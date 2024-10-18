import reactDOM from 'react-dom';
import { useSelector } from 'react-redux';
import CounterModal from '../counter/Counter';

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

    const modalElement = (
        <div>
            {component}
        </div>
    );

    return reactDOM.createPortal(modalElement, document.getElementById('portal-root-modal'));
};

export default Modal;
