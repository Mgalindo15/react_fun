import { useSelector } from 'react-redux';
import CounterModal from '../utils/Counter';

const Modal = () => {
    const modal = useSelector((state) => state.modal);

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
        <div>
            {component}
        </div>
    );
};

export default Modal;
