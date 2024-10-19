/*Shifting Modal*/
import { useDispatch, useSelector } from 'react-redux';
import { addComponent } from '../../reducers/universalSwitchSlice';
import { incrementCounter } from '../../reducers/counter/counterSlice';
import { setPosition } from '../../reducers/box/shiftingBoxSlice';
import { getWidthInBoundary, getHeightInBoundary} from '../../utils/gameCalc';
import '../../index.css';

const ShiftingBox = () => {
    const dispatch = useDispatch();
    const xPos = useSelector((state) => state.box.xPos);
    const yPos = useSelector((state) => state.box.yPos);
    const globalCounter = useSelector((state) => state.counter.value);
    const isCounterActive = useSelector((state) =>
        state.universalSwitch.some((component) => component.type === 'COUNTER')
    );

    const handleHover = () => {
        /* ShiftingBox Controller */
        const randX = getWidthInBoundary();
        const randY = getHeightInBoundary();

        dispatch(setPosition({ xPos: randX, yPos: randY }));
        dispatch(incrementCounter());

        /* Count Tracker */
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
