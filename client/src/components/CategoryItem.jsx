import { Button } from '@material-ui/core';
import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom';

const Container = styled.div`
    flex : 1;
    margin : 8px;
    flex-flow: row-wrap;
    flex-flow: column;
    position: relative;
    
`;
const Image = styled.img`
    width: 100%;
    height: 70%;
    object-fit: cover;
    
`;
const Info = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;
const Title = styled.h1`
    color: black;
    margin-bottom: 20px;
    
    font-weight: bolder;
`;

const Button1 = styled.button`
padding: 10px;
    font-size: 20px;
    border-color: white;
    background-color: white;
    cursor: pointer;
    color: grey;
    border-radius: 10px;
    &:hover,
  &:focus {
    border-color: none;
    background-color: none;
  }
`;



const CategoryItem = ({item}) => {
  return (
    <Container>
        <Link to={`/products`}>
        <Image src={item.img}/>
        <Info>
            <Title>{item.title}</Title>
            <Button1>Browse</Button1>
        </Info>
        </Link>
    </Container>





    


  )
}

export default CategoryItem