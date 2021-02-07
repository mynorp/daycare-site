import React, {useState} from 'react';

import { Button } from "../ButtonElement";
import { 
    HeroContainer,
    HeroBg,
    ImgBg,
    HeroH1,
    HeroP,
    HeroBtnWrapper,
    HeroContent,
    ArrowForward,
    ArrowRight
} from "./HeroElements";

const HeroSection = () => {

    const [hover, setHover] = useState(false);

    const onHover = () => {
        setHover(!hover)
    }

    return (
        <HeroContainer id='home'>
            <HeroBg>
                <ImgBg   src= {'/'} />
            </HeroBg>
            <HeroContent>
            <HeroH1> Home Away From Home </HeroH1>
            <HeroP>
                Your children are our top priority. We put their safety, learning, and happiness first. 
            </HeroP>
            <HeroBtnWrapper>
                <Button to="signin" onMouseEnter={onHover} onMouseLeave={onHover}>
                    Learn more {hover ? <ArrowForward /> : <ArrowRight />}
                </Button>
            </HeroBtnWrapper>
            </HeroContent>
        </HeroContainer>
        
    );
};

export default HeroSection;
