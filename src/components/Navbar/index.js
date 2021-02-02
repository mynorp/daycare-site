import React from 'react';
import { animateScroll as scroll } from 'react-scroll';
import { FaBars } from 'react-icons/fa'; //acces to react icons react-icons.github.io fa is for the first two letters of the icon
import { 
    Nav,
    NavbarContainer,
    NavLogo,
    NavLogoImg,
    MobileIcon,
    NavItem,
    NavMenu,
    NavLinks,
    NavBtn,
    NavBtnLink         
} from "./NavbarElements"; //importing the elements from navbar elements to this file



const toggleHome = () => {
    scroll.scrollToTop();
};

const Navbar = ( {toggle} ) => {
    return (
        <>
            <Nav>
                <NavbarContainer>
                    <NavLogo to="/" onClick={toggleHome}>
                        <NavLogoImg src='/images/logo-2.png' alt='Ramirez Family Child Care'></NavLogoImg>
                    </NavLogo>
                    <MobileIcon onClick={toggle} >
                        <FaBars />
                    </MobileIcon>
                    <NavMenu>

                        <NavItem>
                            <NavLinks 
                            to='about'
                            smooth={true}
                            duration={500}
                            spy={true}
                            exact='true'
                            offset={-80}
                            >
                                About
                            </NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks 
                            to='services'
                            smooth={true}
                            duration={500}
                            spy={true}
                            exact='true'
                            offset={-80}

                            >
                                Services
                            </NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks 
                            to='gallery'
                            smooth={true}
                            duration={500}
                            spy={true}
                            exact='true'
                            offset={-80}
                            
                            >
                                Gallery
                            </NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks 
                            to='contact'
                            smooth={true}
                            duration={500}
                            spy={true}
                            exact='true'
                            offset={-80}
                            >
                                Contact Us 
                            </NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks 
                            to='pricing'
                            smooth={true}
                            duration={500}
                            spy={true}
                            exact='true'
                            offset={-80}
                            >
                                Pricing
                            </NavLinks>
                        </NavItem>


                    </NavMenu>
                    <NavBtn>
                    <NavBtnLink to="signin" >
                        Sign In

                    </NavBtnLink>

                    </NavBtn>

                </NavbarContainer>
            </Nav>
            
        </>
    );
};

export default Navbar;
