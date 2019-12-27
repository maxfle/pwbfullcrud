import React, { useState } from 'react';
import styled from 'styled-components';

import Hamburger from '../SideDrawer/Hamburger/Hamburger';
import NavItems from '../NavItems/NavItems';
import Logo from '../../Logo/Logo';

const FixedWrapper = styled.div`
position: fixed;
background-color: var(--color-mainDark);
padding: 0rem 2rem;
z-index: 10;
top: 0;
left: 0;
width: 100%;
height: 6rem;
display: none;
    @media ${props => props.theme.mediaQueries.smallest} {
        display: flex;
    }
`;

const Wrapper = styled.div`
display: flex;
height: 100%;
width: 100%;
justify-content: space-between;
align-items: center;
`;

const Menu = styled.div`
width: 100%;
background-color: var(--color-mainDark);
height: 100vh;
margin-top: 6rem;
visibility: ${props => props.opened ? 'visible' : 'hidden'};
position: fixed;
top: 0;
left: 0;
display: flex;
align-items: center;
justify-content: center;
transform: translateY(${props => (props.opened ? "0$" : "-100%")});
transition: all 0.2s cubic-bezier(0.445, 0.05, 0.55, 0.95);
`;


const SideDrawer = () => {
    const [isOpened, setIsOpened] = useState(false);
    return (
        <>
            <FixedWrapper>
                <Wrapper>
                    <Logo />
                    <Hamburger opened={isOpened} clicked={() => setIsOpened(!isOpened)} />
                </Wrapper>
            </FixedWrapper>  
            <Menu opened={isOpened}>
                <NavItems mobile clicked={() => setIsOpened(false)} />
            </Menu>

        </>
        
    )
}

export default SideDrawer;