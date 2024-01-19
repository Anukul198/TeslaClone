import CloseIcon from '@mui/icons-material/Close';
import MenuIcon from '@mui/icons-material/Menu';
import React, { useState } from 'react';
import styled from 'styled-components';


function Header() {
    const [burgerStatus, setBurgerStatus] = useState(false);
  return (
    <div>
        <Container>
            <a href='/'>
                <img src="/images/logo.svg" />
            </a>

            <Menu>
                <a href='#'>Model S</a>
                <a href='#'>Model 3</a>
                <a href='#'>Model X</a>
                <a href='#'>Model Y</a>
            </Menu>

            <RightMenu>
                <a href='#'>Shop</a>
                <a href='#'>Tesla Account</a>
                <CustomMenuIcon onClick={() => {setBurgerStatus(true)}}/>
            </RightMenu>

            <BurgerButton showMenu = {burgerStatus}>
                <WrapCloseIcon>
                    <CustomClose onClick={() => setBurgerStatus(false)}/>
                </WrapCloseIcon>
                
                <li><a href='#'>Existing Inventory</a></li>
                <li><a href='#'>Used Inventory</a></li>
                <li><a href='#'>Trade-In</a></li>
                <li><a href='#'>Test Drive</a></li>
                <li><a href='#'>Insurance</a></li>
                <li><a href='#'>Cybertruck</a></li>
                <li><a href='#'>Roadster</a></li>
                <li><a href='#'>Semi</a></li>
                <li><a href='#'>Charging</a></li>
                <li><a href='#'>Powerwall</a></li>
                <li><a href='#'>Commercial Energy</a></li>
                <li><a href='#'>Utilities</a></li>
                <li><a href='#'>Find Us</a></li>
                <li><a href='#'>Support</a></li>
                <li><a href='#'>Investor Relations</a></li>
            </BurgerButton>

        </Container>
    </div>
  )
}

export default Header;

const Container = styled.div`
    z-index : 1;
    height : 60px;
    padding : 15px 20px;
    align-items : center;
    justify-content : center;
    position : fixed;
    display : flex;
    top :0;
    left :0;
    right: 0;
    justify-content: space-between;

`

const Menu = styled.div`
    display : flex;
    align-items : center;
    a{
        padding : 0 10px;
        font-weight : 560;
    }

    @media (max-width : 786px){
        display : none;
    }

`

const RightMenu = styled.div`
    display : flex;
    align-items : center;
    justify-content : center;
    a{
        padding : 0 10px;
        font-weight : 560;
    }

`

const CustomMenuIcon = styled(MenuIcon)`
    cursor : pointer;

`

const BurgerButton = styled.div`
    z-index : 10;
    top :0;
    right : 0;
    bottom : 0;
    background-color : white;
    width : 300px;
    position : fixed;
    transform : ${props => props.showMenu ? "translateX(0)" : "translateX(100%)"};
    transition : transform 0.4s;
    overflow : scroll;
    li{
        list-style : none;
        padding : 14px 50px ;
        a{
            font-weight : 600;
        }
    }

`

const CustomClose = styled(CloseIcon)`
    cursor : pointer;
    margin : 5px 10px;
    
    
`

const WrapCloseIcon = styled.div`
    display : flex;
    justify-content : flex-end;
    
    
`