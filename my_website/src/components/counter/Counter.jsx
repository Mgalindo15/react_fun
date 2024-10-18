import { useSelector, useDispatch } from 'react-redux'
import { removeComponent } from '../../reducers/universalSwitchSlice';
import { resetCounter } from '../../reducers/counter/counterSlice';
import { resetPosition } from '../../reducers/box/shiftingBoxSlice';
import { CounterPropTypes } from '../../utils/propTypes';

const Counter = ({ id }) => {
    const counter = useSelector((state) => state.counter.value);
    const dispatch = useDispatch();

    const handleClose = () => {
        dispatch(removeComponent({ id }));
        dispatch(resetCounter());
        dispatch(resetPosition());
    };

    return (
        <div  className="flex justify-center mt-5 font-noto text-center">
            <div>
                <h2 className="font-bold text-2xl">Count: {counter}</h2>
                <button className="background-styles" onClick={handleClose}>
                    Start over
                </button>
            </div>
        </div>
    );
};

Counter.propTypes = CounterPropTypes;

export default Counter;