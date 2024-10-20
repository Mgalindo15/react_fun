import DialogueItem from './Dialogue_Item';
import { DialoguePropTypes } from '../../utils/propTypes';
import '../../index.css';

const Dialogue = ({ id, message }) => {
  return (
    <div className="dialogue-container">
      <DialogueItem id={id} message={message} />
    </div>
  );
};

Dialogue.propTypes = DialoguePropTypes;

export default Dialogue;
