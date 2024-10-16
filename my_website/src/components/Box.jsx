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
            className="w-25 h-40 p-12 border border-black flex justify-center items-center 
            font-noto font-bold text-lg absolute"
            onMouseEnter={handleHover} 
            style={{ 
                top: `${yPos}%`,
                left: `${xPos}%`,
                transform: 'translate(-50%, -50%)',
                backgroundImage: 'linear-gradient(45deg, #4d4d4d, #899196, #e0e0e0)',
                backgroundColor: '#899196',
                borderRadius: '8px',
                boxShadow: '1rem 1rem .8rem -.2rem rgba(0, 0, 0, 0.2)'
            }}
            >
                Catch Me
            </div>
    )
};

export default ShiftingBox;
