'use client'
import {useState} from "react";
import slidesData from "./../data/slidesData.json";
import Image from "next/image";

export default function Home() {
    const [currentSlide, setCurrentSlide] = useState(0);
    const changeSlide = (direction: number) => {
        const newIndex = (currentSlide + direction + slidesData.length) % slidesData.length;
        setCurrentSlide(newIndex);
    };

    const buttonStyle = {
        top: '50%',
        transform: 'translateY(-50%)',
        margin: '0 20px',
        borderRadius: '50%',
        width: '50px',
        height: '50px',
        alignItems: 'center',
        justifyContent: 'center',
        display: 'flex',
        border: '2px solid black',
        backgroundColor: 'transparent',
        color: 'black',
        cursor: 'pointer',
        transition: 'background-color 0.3s ease'
    };

    return (
        <div style={{height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
            <div style={{
                backgroundImage: `url(${slidesData[currentSlide].background_image})`,
                backgroundSize: 'cover',
                color: 'black',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                position: 'relative',
                width: '100%',
                height: '100%',
                padding: "10%",
                textAlign: "left"
            }}>
                <h1 style={
                    {
                        // position: 'absolute',
                        top: '20px',
                        // left: '20px'
                        fontSize: "24px",
                        width: "100%",
                        paddingLeft: "10px"
                    }
                }>{slidesData[currentSlide].title}</h1>
                <div style={{
                    display: 'flex',
                    justifyContent: 'center'
                }}>
                    <div style={{
                        padding: "10px"
                    }}>
                        {slidesData[currentSlide].text_left && (
                            <div dangerouslySetInnerHTML={{__html: slidesData[currentSlide].text_left || ''}}>
                            </div>
                        )}
                        {slidesData[currentSlide].image_left && (
                            // @ts-ignore
                            <Image src={slidesData[currentSlide].image_left} alt={"image"} width={1000} height={1000}>
                            </Image>
                        )}
                    </div>
                    <div style={{
                        padding: "10px"
                    }}>
                        {slidesData[currentSlide].text_right && (
                            <div dangerouslySetInnerHTML={{__html: slidesData[currentSlide].text_right || ''}}>
                            </div>
                        )}
                        {slidesData[currentSlide].image_right && (
                            // @ts-ignore
                            <Image src={slidesData[currentSlide].image_right} alt={"image"} width={1000} height={1000}>
                            </Image>
                        )}
                    </div>
                </div>


                {currentSlide > 0 && (
                    <button style={{...buttonStyle, left: 0}} className={" absolute"}
                            onMouseOver={(e) => (e.currentTarget.style.backgroundColor = 'black')}
                            onMouseOut={(e) => (e.currentTarget.style.backgroundColor = 'transparent')}
                            onClick={() => changeSlide(-1)}>Prev</button>
                )}
                {currentSlide + 1 < slidesData.length && (
                    <button style={{...buttonStyle, right: 0}} className={" absolute"}
                            onMouseOver={(e) => (e.currentTarget.style.backgroundColor = 'white')}
                            onMouseOut={(e) => (e.currentTarget.style.backgroundColor = 'transparent')}
                            onClick={() => changeSlide(1)}>Next
                    </button>
                )}
            </div>
        </div>
    );

}
