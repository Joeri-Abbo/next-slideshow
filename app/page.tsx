'use client'
import {useState} from "react";
import slidesData from "./../data/slidesData.json";
import NavigationButton from "@/components/NavigationButton";
import Slide from "@/components/Slide";

export default function Home() {
    const [currentSlide, setCurrentSlide] = useState(0);
    const changeSlide = (direction: number) => {
        const newIndex = (currentSlide + direction + slidesData.length) % slidesData.length;
        setCurrentSlide(newIndex);
    };


    return (
        <div className={"font-sans h-screen text-white"}>
            {/*@ts-ignore*/}
            <Slide slideData={slidesData[currentSlide]}/>

            {currentSlide > 0 && (
                <NavigationButton direction="left" onClick={() => changeSlide(-1)}/>
            )}
            {currentSlide + 1 < slidesData.length && (
                <NavigationButton direction="right" onClick={() => changeSlide(1)}/>
            )}
            <div className="absolute inset-x-0 bottom-0 flex justify-center font-sans">
                <a href={"https://joeriabbo.nl/"} className={"text-blue-500 hover:text-blue-700 underline mr-2"}>Joeri
                    Abbo </a>  © 2024 All Rights Reserved
            </div>

        </div>
    );

}
