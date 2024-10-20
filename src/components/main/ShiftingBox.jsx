/*Shifting Modal*/
import { useState, useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addComponent } from '../../reducers/universalSwitchSlice';
import { incrementCounter } from '../../reducers/counter/counterSlice';
import { setPosition, setGlide, setPointers, } from '../../reducers/box/shiftingBoxSlice';
import { getPositionInBoundary, getElementWidth, setInitialGlidePointer,
            getUpperBound, getLowerBound, getRightBound, getLeftBound } from '../../utils/gameCalc';
import '../../index.css';

const ShiftingBox = () => {
    /* Static Vars */
    const viewportWidth = window.innerWidth;
    const viewportHeight = window.innerHeight;

    /* State & Ref Trackers */
    const [shiftingBoxWidth, setShiftingBoxWidth] = useState(0);
    const glideIntervalRef = useRef(null);
    const dispatch = useDispatch();

    /* State Selectors */
    const xPos = useSelector((state) => state.box.xPos);
    const yPos = useSelector((state) => state.box.yPos);
    const xPointer = useSelector((state) => state.box.xPointer);
    const yPointer = useSelector((state) => state.box.yPointer);
    const glideOn = useSelector((state) => state.box.glideOn);
    //const globalCounter = useSelector((state) => state.counter.value);
    const isCounterActive = useSelector((state) =>
        state.universalSwitch.some((component) => component.type === 'COUNTER')
    );

    /* Calculate Width After Mount */
    useEffect(() => {
        const width = getElementWidth('.shifting-box');
        setShiftingBoxWidth(width);
    }, []);

    /* Glide Functionality */
    useEffect(() => {
        if (!glideOn) return;

        //Clear Existing Interval */
        if(glideIntervalRef.current) {
            clearInterval(glideIntervalRef.current);
        }

        /* Update X, Y Positions in Linear Direction Per Interval */
        glideIntervalRef.current = setInterval(() => {
            const newXPos = xPos + xPointer;
            const newYPos = yPos + yPointer;

            /* Get Viewport Boundaries */
            const upperBound = getUpperBound(viewportHeight, shiftingBoxWidth);
            const lowerBound = getLowerBound(viewportHeight,shiftingBoxWidth);
            const leftBound = getLeftBound(viewportWidth, shiftingBoxWidth);
            const rightBound = getRightBound(viewportWidth, shiftingBoxWidth);

            /* Detect and Handle Collisions */
            if (newXPos >= rightBound || newXPos <= leftBound) {
                dispatch(setPointers({ xPointer: xPointer * -1, yPointer }));
            }
    
            if (newYPos >= lowerBound || newYPos <= upperBound) {
                dispatch(setPointers({ xPointer, yPointer: yPointer * -1 }));
            }   
               
            dispatch(setPosition({ xPos: newXPos, yPos: newYPos }));
        }, 10);

        /* Clear Interval Before Escape */
        return () => clearInterval(glideIntervalRef.current);
    }, [glideOn, xPointer, yPointer, xPos, yPos, dispatch, viewportWidth, viewportHeight, shiftingBoxWidth]);


    /* On Hover Event */
    const handleHover = () => {
        /* Set Initial Glide Pointers */
        const initialXPointer = setInitialGlidePointer();
        const initialYPointer = setInitialGlidePointer();

        dispatch(setPointers({ xPointer: initialXPointer, yPointer: initialYPointer}))


        /* Calculate & Set ShiftingBox Position */
        const randX = getPositionInBoundary(viewportWidth, shiftingBoxWidth);
        const randY = getPositionInBoundary(viewportHeight, shiftingBoxWidth);

        dispatch(setPosition({ xPos: randX, yPos: randY }));
        dispatch(setGlide(true));

        /* Counter Controller */
        dispatch(incrementCounter());
        
        if (!isCounterActive) {
            dispatch(
                addComponent({ type: 'COUNTER', portalRoot: 'portal-root-counter' })
            );
        }
    };

    return (
            <div
            className="p-12 border border-black flex justify-center items-center 
            font-noto font-bold text-lg fixed shifting-box"
            onMouseEnter={handleHover} 
            style={{ 
                top: `${yPos}vh`,
                left: `${xPos}vw`,
                transform: 'translate(-50%, -50%)',
                backgroundImage: 'linear-gradient(45deg, #4d4d4d, #899196, #e0e0e0)',
                backgroundColor: '#899196',
                borderRadius: '8px',
                boxShadow: '1rem 1rem .8rem -.2rem rgba(0, 0, 0, 0.2)',
                width: shiftingBoxWidth ? `${shiftingBoxWidth}px` : 'auto',
                flexShrink: 0,
            }}
            >
                Catch Me
            </div>
    )
};

export default ShiftingBox;
