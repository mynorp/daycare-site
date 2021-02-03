import styled from 'styled-components'

import { MdKeyboardArrowRight, MdArrowForward } from "react-icons/md";

export const HeroContainer = styled.div`
    background: #00d9d9;
    display:flex;
    justify-content:center;
    align-items:center;

    

    height:100vh;
    position:relative;
    z-index:1;

    :before {
        content:'';
        position: absolute;
        top:0;
        bottom:0;
        right:0;
        left:0;

        z-index:2;

        //background:linear-gradient(135deg, #00b3ff 0%, #00b3ff 100%);

    }
    //add :bbefore styles
`

export const HeroBg = styled.div`
    position:absolute;
    top:0;
    right: 0;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index:1;
    overflow:hidden;



`
export const ImgBg = styled.img`
    width: 100%;
    position:absolute;
    height: 100%;
    -o-object-fit:cover;
    object-fit:cover;

    

    z-index:2;

`;

export const HeroContent = styled.div`
    z-index:3;
    max-width:40rem;
    position: absolute;
    padding: 2rem;
    display:flex;
    flex-direction:column;
    align-items:center;



    
`;

export const HeroH1 = styled.h1`
    color:#34327C;
    font-size:44px;
    letter-spacing: -.05em;
    font-weight:700;
    text-align: center;

    @media screen and (max-width: 768px) {
         font-size: 40px;
    }

    @media screen and (max-width: 480px) {
         font-size: 32px;
    }

    
`;

export const HeroP = styled.p`
    margin-top:24px;

    font-size: 20px;
    text-align: center;
    max-width:30rem;

    @media screen and (max-width: 768px) {
         font-size: 24px;
    }

    @media screen and (max-width: 480px) {
         font-size: 18px;
    }
`

export const HeroBtnWrapper = styled.div`
    margin-top:32px;
    display: flex;
    flex-direction:column;
    align-items:center;  
`;

export const ArrowForward = styled(MdArrowForward)`
    margin-left: 8px;
    font-size:20px;
`;

export const ArrowRight = styled(MdKeyboardArrowRight)`
    margin-left: 8px;
    font-size:20px;
`;