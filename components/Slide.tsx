import Image from 'next/image';
// @ts-ignore

const Slide = ({slideData}) => {
    return (
        <div
            className="font-sans bg-cover bg-center text-black flex flex-col justify-center items-center relative w-full h-full p-20 text-left"
            style={{backgroundImage: `url(${slideData.background_image})`}}>
            <h1 className="text-2xl w-full pl-2.5 mt-5">{slideData.title}</h1>
            <div className="flex justify-center w-full">
                <div className="p-2.5">
                    {slideData.text_left && (
                        <div dangerouslySetInnerHTML={{__html: slideData.text_left || ''}}/>
                    )}
                    {slideData.image_left && (
                        <Image src={slideData.image_left} alt="image" width={1000} height={1000}/>
                    )}
                </div>
                <div className="p-2.5">
                    {slideData.text_right && (
                        <div dangerouslySetInnerHTML={{__html: slideData.text_right || ''}}/>
                    )}
                    {slideData.image_right && (
                        <Image src={slideData.image_right} alt="image" width={1000} height={1000}/>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Slide;
