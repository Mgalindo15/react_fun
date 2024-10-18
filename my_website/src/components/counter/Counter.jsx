import { useSelector, useDispatch } from 'react-redux'
import { closeModal } from '../../reducers/modal/modalSlice';
import { resetCounter, setModalOpened } from '../../reducers/counter/counterSlice';
import { resetPosition } from '../../reducers/box/shiftingBoxSlice';

const CounterModal = () => {
    const counter = useSelector((state) => state.counter.value);
    const dispatch = useDispatch();

    const handleClose = () => {
        dispatch(closeModal());
        dispatch(resetCounter());
        dispatch(setModalOpened(false));
        dispatch(resetPosition());
    };

    return (
        <div  className="flex justify-center mt-5 font-noto text-center">
            <div>
                <h2 className="font-bold text-2xl">Count: {counter}</h2>
                <button className="background-styles" onClick={handleClose}>Start over</button>
            </div>
        </div>
    )
}

export default CounterModal;