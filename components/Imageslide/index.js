import React,{useState} from "react";
import styles from '@/styles/Home.module.css'

const ImageSlider = ({slides}) => {
    const[currentIndex, setCurrentIndex] = useState(0);


    const sliderstyles = {
        height: "100%",
        position: "relative",
    };
    const  slideStyles = {
        width: "100%",
        height: "100%",
        backgroundImage: `url(${slides[currentIndex].url})`
    };

    const leftarrow = {
        position: 'absolute',
        top: '50%',
        transform: 'translate(0, -50%)',
        fontsize: "50px",
        color: 'black',
        zIndex: 1,
        cursor: 'pointer',
        left: "40px",
    }
    const rightarrow = {
        position: 'absolute',
        top: '50%',
        transform: 'translate(0, -50%)',
        fontsize: "50px",
        color: 'black',
        zIndex: 1,
        cursor: 'pointer',
        right: "40px",
    };

    const dotstyle = {
        margin: "0 3px",
        cursor: "pointer",
        fontsize: "50px",
        color: "black",
    };

    const dotcont = {
        display: "flex",
        justifyContent: "center",
    };

    const goToPrevious = () => {
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? slides.length - 1 : currentIndex;
        setCurrentIndex(newIndex);
    };

    const goToNext = () =>{
        const isLastSlide = currentIndex === slides.length - 1;
        const newIndex = isLastSlide ? 0 : currentIndex +1;
        setCurrentIndex(newIndex);
    };

    const goToSlide = (slideIndex) => {
        setCurrentIndex(slideIndex);
    };
    return (
        <div style={sliderstyles}>
            <div style={leftarrow} onClick={goToPrevious}>  ↤ </div>
            <div style={rightarrow} onClick={goToNext}>  ↦
            <img href="/arrowicon.png"></img>
             </div>
            <div style={slideStyles}>
                <div style={dotcont}>
                    {slides.map((slides, slideIndex) => (
                        <div style={styles.dotstyle}key={slideIndex} onClick={() => goToSlide(slideIndex)}> • </div>
                    ))}
                </div>

            </div>
        </div>
    )
};

export default ImageSlider;