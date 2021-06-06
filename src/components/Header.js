import React from 'react';
import styled from 'styled-components';


const Header = () => {
    return (
        <HeaderContainer className='header'>
            <HeaderTop className='header__top'>

            </HeaderTop>

            <div className='header__bottom'>

            </div>
        </HeaderContainer>
    )
}

export default Header

const HeaderContainer = styled.div`
    height: 100px;
    background-color: #2874F0;
`;


const HeaderTop = styled.div`

`;