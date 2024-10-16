import { useSelector, useDispatch } from 'react-redux'
import { closeModal } from '../../reducers/modal/modalSlice';
import { resetCounter, setModalOpened } from '../../reducers/counter/counterSlice';

const CounterModal = () => {
    const dispatch = useDispatch();
    const counter = useSelector((state) => state.counter.value);

    const handleClose = () => {
        dispatch(closeModal());
        dispatch(resetCounter());
        dispatch(setModalOpened(false));
    };

    return (
        <div>
            <h2 className="font-bold text-2xl">Count: {counter}</h2>
            <button className="" onClick={handleClose}>Start over</button>
        </div>
    )
}

export default CounterModal;