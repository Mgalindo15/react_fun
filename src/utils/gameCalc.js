/* ------------ ShiftingBox Properties: ------------*/

/* Calculate ShiftingBox Width From Browser */

export function getElementWidth(selector) {
    const element = document.querySelector(selector);
    if (element) {
        const { width } = element.getBoundingClientRect();
        return width;
    }
    return 0;
}

/* Calculate ShiftingBox Position */

export function getPositionInBoundary(viewSize, boxSize) {
    /* calculate boundary */
    const boxHalfSize = boxSize / 2;
    const boundary = (boxHalfSize / viewSize) * 100;

    /* get random number 0 --> 100 */
    const position = Math.random() * 100;

    /* if random position assignment is out of bounds, recall function */
    if (position >= boundary && position <= (100 - boundary)) {
        return position;
    } else {
        return getPositionInBoundary(viewSize, boxSize);
    }
}

/* Glide Mechanics */

export function setInitialGlidePointer() {
    const intIndex = Math.floor(Math.random() * 2);

    console.log(intIndex);

    switch(intIndex) {
        case 0:
            return Math.random() * (0.2)
        case 1:
            return Math.random() * (-0.2)
        default:
            return null;
    }
}

/* Boundary Detection */

export function getUpperBound(viewHeight, boxHeight) {
    const boxHalfSize = boxHeight / 2;
    const upperBound = (boxHalfSize / viewHeight) * 100;

    return upperBound;
}

export function geLowerBound(viewHeight, upperBound) {
    return viewHeight - upperBound;
}

export function getLeftBound(viewWidth, boxWidth) {
    const boxHalfSize = boxWidth / 2;
    const leftBound = (boxHalfSize / viewWidth) * 100;

    return leftBound;
}

export function getRightBound(viewWidth, leftBound) {
    return viewWidth - leftBound;
}

/* Collision Mechanics */




