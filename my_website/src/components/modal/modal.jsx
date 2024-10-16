import { useSelector, useDispatch } from 'react-redux';
import { closeModal } from '../../reducers/modal/modalSlice';
import CounterModal from '../utils/counter'

const Modal = () => {
    const modal = useSelector((state) => state.modal);
    const dispatch = useDispatch();

    if (!modal) return null;

    let component;
    switch (modal.type) {
        case 'COUNTER_MODAL':
            component = <CounterModal />;
            break;
        default:
            return null;
    }

    return (
        <div className="flex justify-center mt-5" onClick={() => dispatch(closeModal())}>
            <div className="font-noto text-center" onClick={(e) => e.stopPropagation()}>
                {component}
            </div>
        </div>
    );
};

export default Modal;
