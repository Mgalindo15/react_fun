import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { addComponent, removeComponent, removeComponentsByType } from '../../reducers/universalSwitchSlice';
import { resetCounter } from '../../reducers/counter/counterSlice';
import { resetPosition, setGlide } from '../../reducers/box/shiftingBoxSlice';
import { CounterPropTypes } from '../../utils/propTypes';
import '../../index.css';

const Counter = ({ id }) => {
    const counter = useSelector((state) => state.counter.value);
    const dispatch = useDispatch();

    /* Mounting Components For Count > 1 */

    useEffect(() => {

        if(counter === 9) {
            dispatch(
                addComponent({ 
                    type: 'DIALOGUE', 
                    portalRoot: 'portal-root-dialogue',
                    props: {message: 'getting bored?'}
                })
            );
        } else if (counter === 18) {
            dispatch(
                addComponent({ 
                    type: 'DIALOGUE', 
                    portalRoot: 'portal-root-dialogue',
                    props: { message: 'lets play a game'}
                })
            );
        } else if (counter === 23) {
            dispatch(
                addComponent({ 
                    type: 'GOAL_STRIP', 
                    portalRoot: 'portal-root-shiftingbox',
                })
            );
        } 

    }, [counter, dispatch]);

    const handleClose = () => {
        dispatch(resetCounter());
        dispatch(resetPosition());
        dispatch(setGlide(false));
        dispatch(removeComponent({ id }));
        dispatch(removeComponentsByType({ type: 'DIALOGUE' }));
        dispatch(removeComponentsByType({ type: 'GOAL_STRIP' }));
        dispatch(removeComponentsByType({ type: 'STOP_WATCH' }));
    };

    return (
        <div  className="flex justify-center mt-5 font-noto text-center">
            <div>
                <h2 className="font-bold text-2xl textShadow">Points: {counter}</h2>
                <button className="textShadow" onClick={handleClose}>
                    Start over
                </button>
            </div>
        </div>
    );
};

Counter.propTypes = CounterPropTypes;

export default Counter;