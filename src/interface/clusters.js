import { Container, Graphics } from 'pixi.js'
import { clusterGeometry, paintBlob, makeLabel, deconflictLabels } from './geometry.js'
import { getLanguage, onLanguageChange } from './language.js'

export default (entities) => {
    const stage = new Container()
    stage.interactiveChildren = false
    stage.label = 'clusters'
    s.viewport.addChild(stage)

    // Fills and labels are independent layers so they can be toggled separately
    // (e.g. labels alone, alongside the fronts). The fill Graphics holds every
    // blob — each paintBlob commits with its own red/blue tint.
    const fills = new Graphics()
    fills.label = 'clusters-fills'
    fills.visible = false // off by default; the fronts read on their own
    const labels = new Container()
    labels.label = 'clusters-labels'
    stage.addChild(fills, labels)

    const geoms = clusterGeometry(entities)

    // Both an English and a Norwegian label are built for every cluster up
    // front (not rebuilt on toggle) and deconflicted independently — their
    // line wraps and widths differ, so each language needs its own layout
    // pass. setLanguage below just switches which set is visible.
    const labelListEn = []
    const labelListNo = []
    geoms.forEach((c) => {
        paintBlob(fills, c.expanded, c.color)
        const labelEn = makeLabel(c, c.subjectEn)
        const labelNo = makeLabel(c, c.subjectNo)
        labels.addChild(labelEn, labelNo)
        labelListEn.push(labelEn)
        labelListNo.push(labelNo)
    })

    // Nudge labels apart before they're drawn. The generous padding keeps a gap
    // between neighbours so the fronts running between clusters have room; the
    // extra iterations let the (now larger) labels fully settle to no overlap.
    deconflictLabels(labelListEn, { padding: 4, iterations: 200 })
    deconflictLabels(labelListNo, { padding: 4, iterations: 200 })

    const allLabels = [...labelListEn, ...labelListNo]

    // Labels never take pointer events. index.js re-parents this layer
    // straight onto the (eventMode 'static') viewport, and Pixi passes that
    // mode down to children — so without this, the white halo plates would
    // swallow hover/click hit-tests and block the articles underneath.
    labels.eventMode = 'none'

    // Fade-on-approach: when the pointer comes near a label, it fades almost
    // out so the articles beneath are visible as well as hoverable; it fades
    // back once the pointer moves away. Purely a display alpha — the Cluster
    // Labels switch (controls.js) still owns `visible`.
    const FADE_MARGIN_PX = 14 // screen pixels around a label that count as "near"
    const FADED_ALPHA = 0.12
    const FADE_STEP = 0.1 // per frame, ~9 frames for a full fade

    const targets = new Map(allLabels.map((l) => [l, 1]))
    let animating = false

    const animate = () => {
        let moving = false
        targets.forEach((target, label) => {
            const diff = target - label.alpha
            if (Math.abs(diff) > 0.001) {
                label.alpha += Math.sign(diff) * Math.min(Math.abs(diff), FADE_STEP)
                moving = true
            }
        })
        s.app.render()
        if (moving) requestAnimationFrame(animate)
        else animating = false
    }

    const setTargets = (pointer) => {
        let changed = false
        allLabels.forEach((label) => {
            let target = 1
            if (pointer && label.visible) {
                const b = label.getBounds()
                const near =
                    pointer.x >= b.minX - FADE_MARGIN_PX &&
                    pointer.x <= b.maxX + FADE_MARGIN_PX &&
                    pointer.y >= b.minY - FADE_MARGIN_PX &&
                    pointer.y <= b.maxY + FADE_MARGIN_PX
                if (near) target = FADED_ALPHA
            }
            if (targets.get(label) !== target) {
                targets.set(label, target)
                changed = true
            }
        })
        if (changed && !animating) {
            animating = true
            requestAnimationFrame(animate)
        }
    }

    s.viewport.on('globalpointermove', (event) => setTargets(event.global))
    s.app.canvas.addEventListener('pointerleave', () => setTargets(null))

    // Recolours every label's main text (not its white halo plate, which is
    // always plain white regardless of this toggle) to follow "Colour by
    // year", exactly like the circles/crosses do: black when off, each
    // label's own red/blue temperature tint when on. Called by controls.js
    // once on load and again whenever the toggle changes. Applies to both
    // language sets so whichever one is shown is already correctly tinted.
    const setLabelColorByYear = (colorByYear) => {
        allLabels.forEach((container) => {
            container.mainText.tint = colorByYear ? container.temperatureTint : 0x000000
        })
    }

    // Only one language's labels are visible at a time — the masthead NO |
    // ENG toggle (see languageToggle.js) drives this via language.js's shared
    // state, English visible by default.
    const setLanguage = (lang) => {
        labelListEn.forEach((container) => (container.visible = lang === 'en'))
        labelListNo.forEach((container) => (container.visible = lang === 'no'))
    }
    setLanguage(getLanguage())
    onLanguageChange(setLanguage)

    // `labels` handed back so index.js can re-parent it to the very top of
    // the viewport (above the Point Gradient circles, elements, and fronts)
    // once every other layer is in place — topic labels (and their halo, see
    // geometry.js) need to stay readable over all of them, while the fill
    // blobs stay behind at this stage's original position.
    return { labels, setLabelColorByYear }
}
