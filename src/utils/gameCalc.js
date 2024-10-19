/* ------------ ShiftingBox Properties: ------------*/

/* Boundary Detection */

export function getWidthInBoundary() {
    const number = Math.random() * 100;

    if (number <= 95 && number >= 5) {
        return number;
    } else {
        return getWidthInBoundary();
    }
};

export function getHeightInBoundary() {
    const number = Math.random() * 100;

    if (number <= 90.5 && number >= 9.5) {
        return number;
    } else {
        return getHeightInBoundary();
    }
};


