import React from 'react';

type NavigationButtonProps = {
    direction: 'left' | 'right';
    onClick: () => void;
};

const NavigationButton: React.FC<NavigationButtonProps> = ({direction, onClick}) => {
    const positionClass = direction === 'left' ? "left-0" : "right-0";

    return (
        <button
            className={`absolute ${positionClass} top-1/2 -translate-y-1/2 mx-5 rounded-full w-12 h-12 flex items-center justify-center border-2 border-white bg-transparent text-white cursor-pointer transition-colors duration-300 hover:bg-gray-600`}
            onClick={onClick}>
            {direction === 'left' ? 'Prev' : 'Next'}
        </button>
    );
};

export default NavigationButton;

