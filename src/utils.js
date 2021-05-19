import { UIManager, Dimensions, StatusBar } from 'react-native'

export const TOP_OFFSET = 5
export const ARROW_WIDTH = 20
export const ARROW_HEIGHT = 15
export const RENDER_BOUNDARY = 5

const { width: screenWidth, height: screenHeight } = Dimensions.get('window')

export function clearItemStyles(styles) {
    return {
        ...styles,
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        margin: 0,
        marginRight: 0,
        marginTop: 0,
        marginLeft: 0,
        marginBottom: 0,
        marginVertical: 0,
        marginHorizontal: 0,
        transform: undefined,
        position: undefined
    }
}

export async function getItemCoordinates(target) {
    const itemCoordinates = new Promise((resolve, reject) => {
        UIManager.measure(target, (x, y, width, height, px, py) => {
            py = py + StatusBar.currentHeight

            const coords = {
                width,
                height,
                px,
                py,
                centerPoint: {
                    y: py + height / 2,
                    x: px + width / 2
                }
            }

            resolve(coords)
        })
    })

    await itemCoordinates
    return itemCoordinates
}

export function getTipPositionProps(itemCoords, tipHeight, tipWidth) {
    const { height = 0, py = 0, centerPoint } = itemCoords

    const tipPosition = {
        top: py + height + TOP_OFFSET + ARROW_HEIGHT,
        left: centerPoint.x - tipWidth / 2
    }

    // if tip extrapolates screen on left side
    if (tipPosition.left < RENDER_BOUNDARY) tipPosition.left = RENDER_BOUNDARY

    // if tip extrapolates screen on right side
    const tipRightX = tipPosition.left + tipWidth
    if (tipRightX + RENDER_BOUNDARY > screenWidth) {
        const overflowAmount = tipRightX - screenWidth
        tipPosition.left = tipPosition.left - overflowAmount - RENDER_BOUNDARY
    }

    // if tip extrapolates screen on bottom side
    // should move tip to the top of the item
    const tipBottomY = tipPosition.top + tipHeight
    const shouldInvertTip = tipBottomY > screenHeight

    const arrowPosition = {
        top: -ARROW_HEIGHT,
        left: centerPoint.x - tipPosition.left - ARROW_WIDTH / 2
    }

    if (shouldInvertTip) {
        tipPosition.top = py - tipHeight - TOP_OFFSET - ARROW_HEIGHT

        // move arrow as well
        delete arrowPosition.top
        arrowPosition.bottom = -ARROW_HEIGHT
        arrowPosition.transform = [{ scaleY: -1 }]
    }

    const pp = 0.5 - (centerPoint.x - tipPosition.left) * 0.5 / (tipWidth / 2)

    const pivotPoint = {
        x: pp * tipWidth,
        y: (shouldInvertTip ? -0.5 : 0.5) * tipHeight
    }

    return {
        tipPosition,
        shouldInvertTip,
        arrowPosition,
        pivotPoint,
        tipHasProps: true
    }
}
