import styled from 'styled-components';
import {Link} from 'react-scroll';

export const Button = styled(Link)`
    border-radius:50px;
    background: ${ ( {primary} ) => (primary ? 'teal' : '#fff') };
    white-space:nowrap;
    padding: ${ ( {big} ) => (big ? '14px 48px' : '12px 30px') };
    color: ${({dark}) => (dark ? '#010060' : 'teal') };
    font-size: ${({fontBig}) => (fontBig ? '20px':'16px')};
    outline:none;
    border:none;
    cursor:pointer;
    display: flex;
    justify-content: center;
    align-items:center;
    transition: all 0.2s ease-out;

    &:hover {
        transition: all 0.2s ease-out;
        background: ${({primary}) => (primary ? '#fff' : 'teal') };
        color: ${({dark}) => (dark ? 'teal' : '#fff') };
    }
    
`;