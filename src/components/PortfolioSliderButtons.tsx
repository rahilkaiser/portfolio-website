"use client"
import {useSwiper} from "swiper/react";
import {PiCaretLeftBold, PiCaretRight, PiCaretRightBold} from "react-icons/pi";

interface PortfolioSliderButtonsProps {
    containerStyles: string,
    btnStyles: string,
    iconStyles: string
}

export const PortfolioSliderButtons = ({containerStyles, btnStyles, iconStyles}: PortfolioSliderButtonsProps) => {
    const swiper = useSwiper();
    return (
        <div className={containerStyles}>
            <button className={btnStyles} onClick={() => swiper.slidePrev()}>
                <PiCaretLeftBold className={iconStyles}/>
            </button>
            <button className={btnStyles} onClick={() => swiper.slideNext()}>
                <PiCaretRightBold className={iconStyles}/>
            </button>
        </div>
    );
};
