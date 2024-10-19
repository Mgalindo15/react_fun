/*Shifting Modal*/
import { useState, useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addComponent } from '../../reducers/universalSwitchSlice';
import { incrementCounter } from '../../reducers/counter/counterSlice';
import { setPosition, setGlide } from '../../reducers/box/shiftingBoxSlice';
import { getPositionInBoundary, getElementWidth, setInitialGlidePointer} from '../../utils/gameCalc';
import '../../index.css';

const ShiftingBox = () => {
    /* Static Vars */
    const viewportWidth = window.innerWidth;
    const viewportHeight = window.innerHeight;

    /* State & Ref Trackers */
    const [shiftingBoxWidth, setShiftingBoxWidth] = useState(0);
    const [xPointer, setXPointer] = useState(0);
    const [yPointer, setYPointer] = useState(0);
    const glideIntervalRef = useRef(null);
    const dispatch = useDispatch();

    /* State Selectors */
    const xPos = useSelector((state) => state.box.xPos);
    const yPos = useSelector((state) => state.box.yPos);
    const glideOn = useSelector((state) => state.box.glideOn);
    const globalCounter = useSelector((state) => state.counter.value);
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

        /* Update x/y pos in linear direction per interval */
        glideIntervalRef.current = setInterval(() => {
            const newXPos = xPos + xPointer;
            const newYPos = yPos + yPointer;

            console.log(newXPos);
            console.log(newYPos);
            
            dispatch(setPosition({ xPos: newXPos, yPos: newYPos }));
        }, 100);

        /* Clear Interval Before Escape */
        return () => clearInterval(glideIntervalRef.current);
    }, [glideOn, xPointer, yPointer, xPos, yPos, dispatch]);


    /* On Hover Event */
    const handleHover = () => {
        /* Set New Glide Pointers */
        setXPointer(setInitialGlidePointer());
        setYPointer(setInitialGlidePointer());

        /* Calculate & Set ShiftingBox Position */
        const randX = getPositionInBoundary(viewportWidth, shiftingBoxWidth);
        const randY = getPositionInBoundary(viewportHeight, shiftingBoxWidth);

        dispatch(setPosition({ xPos: randX, yPos: randY }));
        dispatch(setGlide(true));

        /* Count Tracker */
        dispatch(incrementCounter());
        const newCounterValue = globalCounter + 1;

        /* Count-Based Event Controller*/
        if(newCounterValue === 9) {
            dispatch(
                addComponent({ 
                    type: 'DIALOGUE', 
                    portalRoot: 'portal-root-dialogue',
                    props: {message: 'feeling tired?'}
                })
            );
        } else if (newCounterValue === 18) {
            dispatch(
                addComponent({ 
                    type: 'DIALOGUE', 
                    portalRoot: 'portal-root-dialogue',
                    props: { message: 'ready to quit?'}
                })
            );
        }
        
        /* Counter Controller */
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
            }}
            >
                Catch Me
            </div>
    )
};

export default ShiftingBox;
