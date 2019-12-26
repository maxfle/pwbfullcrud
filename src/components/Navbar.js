import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
position: fixed;
display: flex;
justify-content: space-between;
background-color: var(--color-main);
padding: 0rem 2rem;
top: 0;
left: 0;
width: 100%;
height: 6rem;

`;

const Navbar = () => {
    return(
        <Wrapper>
            <div>Play Wallball</div>
            <nav>
                <ul>
                <li>jjj</li>
                <li>jjj</li>
                </ul>
            </nav>
        </Wrapper>
    )
}

export default Navbar;