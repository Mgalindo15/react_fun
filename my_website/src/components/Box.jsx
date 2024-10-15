/*Shifting Modal*/
import { useState } from 'react';

const ShiftingBox = () => {
    const [xPos, setXPos] = useState(50);
    const [yPos, setYPos] = useState(50);

    const handleHover = () => {
        let randX = Math.random() * 90;
        let randY = Math.random() * 90;
        setXPos(randX);
        setYPos(randY);
    };

    return (
            <div
            className="w-12 h-12 border border-black flex justify-center items-center font-noto text-lg absolute"
            onMouseEnter={handleHover} 
            style={{ top: `${yPos}%`, left: `${xPos}%`, transform: 'translate(-50%, -50%)' }}
            >
                Catch Me
            </div>
    )
};

export default ShiftingBox;
