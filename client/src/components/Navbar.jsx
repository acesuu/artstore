import { Badge } from '@material-ui/core';
import { AddShoppingCartOutlined, Search } from '@material-ui/icons';
import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom';

const Container = styled.div`
    height: 60px;
    
`;


const Wrapper = styled.div`
    padding: 10px 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;


const Left = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
`;

const Language = styled.span`
    font-size: 14px;
    cursor: pointer;
`;

const SearchContainer = styled.div`
    border: 0.5px solid lightgray;
    display: flex;
    align-items: center;
    margin-left: 25px;
    padding: 5px;
    flex: .7;
    border-radius: 12px;
    height: 22px;
`;

const Input = styled.div`
    border: none;
`;



const Center = styled.div`
    flex: 1;
    text-align: center;
`;

const Logo = styled.h1`
    font-weight: bold;
`

const Right = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: flex-end;
`;

const MenuItem = styled.div`
    font-size: 16px;
    font-weight: bold;
    cursor: pointer;
    margin-left: 25px;
`;


const Navbar = () => {
  return (
    <Container>
        <Wrapper>
            <Left>
                <Language>EN</Language>
                <SearchContainer>
                    <Input/>
                    <Search style={{color:"gray", fontSize: 16}}/>

                </SearchContainer>
            </Left>
            <Center><Logo>Art Station</Logo></Center>

            
            <Right>
                <Link to={`/register`}><MenuItem>Register</MenuItem ></Link>
                <Link to={`/login`}><MenuItem>Login</MenuItem></Link>
                <Link to={`/cart`}>
                <MenuItem>
                <Badge badgeContent={4} color="primary">
                    <AddShoppingCartOutlined />
                </Badge>
                </MenuItem>
                </Link>
            </Right>
        </Wrapper>
    </Container>
  )
}

export default Navbar