// @ts-ignore
const NavigationButton = ({direction, onClick}) => {
    // Determine the position class based on the direction
    const positionClass = direction === 'left' ? "left-0" : "right-0";

    return (
        <button
            className={`absolute ${positionClass} top-1/2 -translate-y-1/2 mx-5 rounded-full w-12 h-12 flex items-center justify-center border-2 border-black bg-transparent text-black cursor-pointer transition-colors duration-300 hover:bg-white`}
            onClick={onClick}>
            {direction === 'left' ? 'Prev' : 'Next'}
        </button>
    );
};

export default NavigationButton;

