import { useSelector } from 'react-redux';
import DialogueItem from './DialogueItem';

const Dialogue = () => {
  const dialogues = useSelector((state) => state.dialogue);

  if (dialogues.length === 0) return null;

  return (
    <div>
      {dialogues.map((dialogue) => (
        <DialogueItem key={dialogue.id} dialogue={dialogue} />
      ))}
    </div>
  );
};

export default Dialogue;
