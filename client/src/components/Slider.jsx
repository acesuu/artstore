import {  ArrowLeftOutlined, ArrowRightOutlined } from "@material-ui/icons";
import styled from "styled-components"
import { sliderItems } from "../data";
import React, { useState } from "react";
import {Link } from "react-router-dom";

const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    postion: relative;
    overflow: hidden;

`;

const Arrow = styled.div`
    width: 50px;
    height: 50px;
    background-color: #fff7f7;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0;
    bottom: 0;
    margin: auto;
    left: ${props=> props.direction === "left" && "10px"};
    right: ${props=> props.direction === "right" && "10px"};
    cursor: pointer;
    opacity: 2;
    z-index: 2;
`;

const Wrapper = styled.div`
    height: 100%;
    display: flex;
    transform: translateX(${props=>props.slideIndex * -100}vw);
    transition: all 1.5s ease;
`;

const Slide = styled.div`
    display: flex;
    align-items: center;
    width: 100vw;
    height: 100vh;
    
`;

const ImgContainer = styled.div`
    flex: 1;
    height: 100%;
`;

const Image = styled.img`
    height: 70%;
    width: 90%;
    margin-top: 80px;
    margin-left: 40px;
`;

const InfoContainer = styled.div`
    flex: 1;

`;

const Title = styled.h1`
    font-size: 50px;

`;
const Desc = styled.p`
    margin: 50px 0px;
    font-size: 20px;
    font-weight: 500;
    letter-spacing: 2px;
`;
const Button = styled.button`
    padding: 10px;
    font-size: 20px;
    border-color: teal;
    background-color: teal;
    cursor: pointer;
    color: white;
    border-radius: 10px;
    &:hover,
  &:focus {
    border-color: none;
    background-color: none;
  }
`;

const Slider = () => {
  const [slideIndex, setSlideIndex] = useState(0);
  const handleClick = (direction) => {
    if(direction==="left"){
        setSlideIndex(slideIndex > 0 ? slideIndex-1 : 2 )
    } else {
        setSlideIndex(slideIndex < 2 ? slideIndex +1 : 0)
    }
  };


  return (
    <Container>
        <Arrow direction="left" onClick={()=>handleClick("left")}>
            <ArrowLeftOutlined/>
        </Arrow>
        <Wrapper slideIndex={slideIndex }>
            {sliderItems.map(item=>(
                <Slide>
            <ImgContainer>
              <Image src={item.img}/>
            </ImgContainer>
            <InfoContainer>
                <Title>{item.title}</Title>
                <Desc>{item.desc}</Desc>
                <Link to={`/products`}><Button>Browse</Button ></Link>
            </InfoContainer>
            </Slide>
            ))}
            
        </Wrapper>
        <Arrow direction="right" onClick={()=>handleClick("right")}>
            <ArrowRightOutlined/>
        </Arrow>
    </Container>
  )
}

export default Slider