import React, { useState } from 'react';
import styled from 'styled-components';

import Hamburger from '../SideDrawer/Hamburger/Hamburger';
// import NavItems from '../NavItems/NavItems';
import Logo from '../../Logo/Logo';

const FixedWrapper = styled.div`
position: fixed;
background-color: var(--color-main);
padding: 0rem 2rem;
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


const SideDrawer = () => {
    const [isOpened, setIsOpened] = useState(false);
    return (
        <FixedWrapper>
            <Wrapper>
                <Logo />
                <Hamburger opened={isOpened} clicked={() => setIsOpened(!isOpened)} />
            </Wrapper>
        </FixedWrapper>
    )
}

export default SideDrawer;