import reactDOM from 'react-dom';
import { useSelector } from 'react-redux';
import DialogueItem from './DialogueItem';
import '../../index.css';

const Dialogue = () => {
  const dialogues = useSelector((state) => state.dialogue);

  if (dialogues.length === 0) return null;

  const dialogueElement = (
    <div className="dialogue-container">
      {dialogues.map((dialogue) => (
        <DialogueItem key={dialogue.id} dialogue={dialogue} />
      ))}
    </div>
  );

  return reactDOM.createPortal(dialogueElement, document.getElementById('portal-root-dialogue'));
};

export default Dialogue;
