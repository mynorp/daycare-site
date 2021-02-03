import React from 'react'
import { 
    SidebarContainer,
    Icon,
    CloseIcon,
    SidebarWrapper,
    SidebarMenu,
    SidebarLink,
    SideBtnWrap,
    SidebarRoute  
} from "./SidebarElements";

const Sidebar = ( {isOpen, toggle} ) => {
    return (
        <>
            <SidebarContainer isOpen={isOpen} onClick={toggle}>
                <Icon onClick={toggle}>
                    <CloseIcon />
                </Icon>
                <SidebarWrapper>
                    <SidebarMenu>

                        <SidebarLink to='about'> About </SidebarLink>
                        <SidebarLink to='services'> Services </SidebarLink>
                        <SidebarLink to='gallery'> Gallery </SidebarLink>
                        <SidebarLink to='pricing'> Pricing </SidebarLink>
                        <SidebarLink to='contact'> Contact Us </SidebarLink>

                    </SidebarMenu>
                    <SideBtnWrap>
                        <SidebarRoute to='/signin'>
                            Sign In
                        </SidebarRoute>
                    </SideBtnWrap>
                </SidebarWrapper>
            </SidebarContainer>            
        </>
    );
};

export default Sidebar;
