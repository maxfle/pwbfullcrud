import React from 'react';
import styled from 'styled-components';

const LogoWrapper = styled.div`
color: var(--color-white);
display: flex;
align-items: center;
font-weight: 700;
font-size: 1.2rem;
padding: 1rem;
`;

const Logo = () => {
    return <LogoWrapper>Play Wallball</LogoWrapper>
};

export default Logo;