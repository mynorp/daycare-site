import React, {useState} from 'react';


import Navbar from '../components/navbar';
import Sidebar from '../components/sidebar';
import HeroSection from '../components/HeroSection';

const Home = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen);
    };


    return (
        <>  
        <Sidebar isOpen={isOpen} toggle={toggle} />  
        <Navbar isOpen={isOpen} toggle={toggle} />
        <HeroSection />

            
        </>
    )
}

export default Home
