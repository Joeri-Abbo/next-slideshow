import Image from 'next/image';
import React from "react";

type SlideData = {
    background_image?: string;
    title: string;
    text_left?: string;
    image_left?: string;
    text_right?: string;
    image_right?: string;
};

type SlideProps = {
    slideData: SlideData;
};

const Slide: React.FC<SlideProps> = ({slideData}) => {
    return (
        <div
            className="font-sans bg-cover bg-center text-black flex flex-col justify-center items-center relative w-full h-full p-20 text-left"
            style={{backgroundImage: `url(${slideData.background_image})`}}>
            <h1 className="text-4xl w-full pl-2.5 mt-5 text-white">{slideData.title}</h1>
            <div className="grid grid-cols-2 gap-4 w-full">
                <div className="p-2.5 text-white">
                    {slideData.text_left && (
                        <div className={"mb-4"} dangerouslySetInnerHTML={{__html: slideData.text_left || ''}}/>
                    )}
                    {slideData.image_left && (
                        <Image src={slideData.image_left} alt="image" width={1000} height={1000}/>
                    )}
                </div>
                <div className="p-2.5 text-white">
                    {slideData.text_right && (
                        <div className={"mb-4"} dangerouslySetInnerHTML={{__html: slideData.text_right || ''}}/>
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
