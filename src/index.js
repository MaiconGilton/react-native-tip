import TipProvider from './TipProvider'
import Tip from './Tip'
import TipManager from './TipManager'

function closeTip() {
    TipManager.closeTip()
}

function showTip(tipId: string, timeout: number, props: {}) {
    TipManager.showTip(tipId, timeout, props)
}

function showTipTour(steps: []) {
    TipManager.showTipTour(steps)
}

export default TipProvider
export { Tip, closeTip, showTip, showTipTour }
