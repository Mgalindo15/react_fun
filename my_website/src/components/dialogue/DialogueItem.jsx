import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { closeDialogueBox } from '../../reducers/dialogue/dialogueSlice';
import { DialogueItemPropTypes } from '../utils/propTypes';

const DialogueItem = ({ dialogue }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    const timer = setTimeout(() => {
      dispatch(closeDialogueBox({ id: dialogue.id }));
    }, 3000);

    return () => clearTimeout(timer);
  }, [dialogue.id, dispatch]);

  let content;
  switch (dialogue.type) {
    case 'THRESHOLD_10':
      content = 
        <div className='font-dotgothic text-3xl animate-move-down'>
            feeling tired?
        </div>;
      break;
    case 'THRESHOLD_20':
      content = 
        <div className='font-dotgothic text-3xl animate-move-down'>
            ready to quit?
        </div>;
      break;
    default:
      content = null;
  }

  return (
    <div className='fixed inset-0 flex items-center justify-center'>
      {content}
    </div>
  );
};

DialogueItem.propTypes = DialogueItemPropTypes;

export default DialogueItem;
