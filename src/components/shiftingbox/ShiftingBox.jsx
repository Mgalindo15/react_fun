/*Shifting Modal*/
import { useDispatch, useSelector } from 'react-redux';
import { addComponent } from '../../reducers/universalSwitchSlice';
import { incrementCounter } from '../../reducers/counter/counterSlice';
import { setPosition } from '../../reducers/box/shiftingBoxSlice';

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
        const randX = Math.random() * 100;
        const randY = Math.random() * 100;

        dispatch(setPosition({ xPos: randX, yPos: randY }));
        dispatch(incrementCounter());

        /* Count Tracker */
        const newCounterValue = globalCounter + 1;

        /* Count-Based Event Controller*/
        if(newCounterValue === 10) {
            dispatch(
                addComponent({ 
                    type: 'DIALOGUE', 
                    portalRoot: 'portal-root-dialogue',
                    props: {message: 'feeling tired?'}
                })
            );
        } else if (newCounterValue === 20) {
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
            className="w-25 h-40 p-12 border border-black flex justify-center items-center 
            font-noto font-bold text-lg absolute"
            onMouseEnter={handleHover} 
            style={{ 
                top: `${yPos}%`,
                left: `${xPos}%`,
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
