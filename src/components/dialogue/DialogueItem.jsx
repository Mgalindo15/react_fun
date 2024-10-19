import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { removeComponent } from '../../reducers/universalSwitchSlice';
import { DialogueItemPropTypes } from '../../utils/propTypes';

const DialogueItem = ({ id, message }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    const timer = setTimeout(() => {
      dispatch(removeComponent({ id }));
    }, 3000);

    return () => clearTimeout(timer);
  }, [id, dispatch]);

  return (
    <div className='fixed inset-0 flex items-center justify-center'>
      <div className="font-dotgothic text-3xl animate-move-down">
        {message}
      </div>
    </div>
  );
};

DialogueItem.propTypes = DialogueItemPropTypes;

export default DialogueItem;
