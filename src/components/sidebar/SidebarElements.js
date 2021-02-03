import styled  from "styled-components"; //no curly brace from styled
import { FaTimes } from "react-icons/fa";
import { Link as LinkS } from 'react-scroll';
import { Link as LinkR } from 'react-router-dom';

export const SidebarContainer = styled.aside`

    position: fixed;
    z-index:999;
    width: 100%;
    height: 100%;
    background: #EC9600;
    display: grid;
    align-items: center;
    top:0;
    left:0;
    transition: 0.3s ease-in-out;
    opacity: ${ ({ isOpen }) => (isOpen ? '100%' : '0' ) }; //ternary operator can use if else statemanets in styled components if is open is true the opacity will be 100% if its not it will be 0%
    top: ${ ({ isOpen }) => (isOpen ? '0' : '-100%') };

`

export const CloseIcon = styled(FaTimes)`
    color:#fff;
`

export const Icon = styled.div`
    position: absolute;
    top:1.2rem;
    right: 1.5rem;
    background: transparent;
    font-size: 2rem;
    cursor: pointer;
    outline:none;
`

export const SidebarWrapper = styled.div`
  color:#EC9600;
`

export const SidebarMenu = styled.ul`
    text-align:center;
    display:grid;
    grid-template-columns:1fr;
    grid-template-rows:repeat(6,80px);

    @media screen and (max-width:480px){
        grid-template-rows:repeat(6,60px);

    }
`
export const SidebarLink = styled(LinkS)`
    display:flex;
    align-items:center;
    justify-content:center;
    font-size:1.5rem;
    text-decoration:none;
    list-style:none;
    transition:0.2s ease-out;
    color:#fff;
    cursor:pointer;

    &:hover {
        color: #d12881;
    }
`

export const SideBtnWrap = styled.div`
    display:flex;
    justify-content:center;

`

export const SidebarRoute = styled(LinkR)`
    border-radius:50px;
    background: #d12881;
    white-space: nowrap;
    padding: 16px 64px;
    color: #010606;
    font-size: 16px;
    outline:none;
    border:none;
    cursor:pointer;
    transition: all 0.2s ease-in-out;
    text-decoration:none;

    &:hover{
        transition: all 0.2s ease-in-out;
        background: #fff;
        color: #000;
    }
`