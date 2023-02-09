import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    overflow-x: auto;
    scroll-bahaviour: smooth;
    display: grid;
    grid-gap: 0.45rem;
    grid-auto-flow: column;
    grid-auto-columns: 25%;
    grid-auto-rows: 7rem;
    // max-width: 100%;
    margin-inline: auto;
    padding-bottom: 0.4rem;
    &::-webkit-scrollbar{
        display: none
    };
    // &::-webkit-scrollbar-thumb{
    //     background-color: ${({theme}) => theme.bgSoft};
    //     border-radius: 100vh;
    // };
  
`
const ImgWrapper = styled.div`
    position: relative;
    overflow: hidden;
    border-radius: 5px;
`
const Img = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    aspect-ratio: 16/9
`
const Title = styled.h4`
    position: absolute;
    bottom: 0.3rem;
    left: 0.2rem
`
const Grad = styled.div`
    position: absolute;
    bottom: 0px;
    left: 0px;
    right: 0px;
    background-color: rgba(0,0,0,0.8);
    z-index: 20
`
function Slider() {
  return (
    <Container>
        <ImgWrapper>
            <Img src='./babes.jpg' />
            <Title>Vill Story</Title>
            <Grad/>
        </ImgWrapper>
        {/* 2nd */}
        <ImgWrapper>
            <Img src='./babes.jpg' />
            <Title>Vill Story</Title>
        </ImgWrapper>
        {/* 3rd */}
        <ImgWrapper>
            <Img src='./babes.jpg' />
            <Title>Vill Story</Title>
        </ImgWrapper>
        {/* 4th */}
        <ImgWrapper>
            <Img src='./babes.jpg' />
            <Title>Vill Story</Title>
        </ImgWrapper>
        {/* 5th */}
        <ImgWrapper>
            <Img src='./babes.jpg' />
            <Title>Vill Story</Title>
        </ImgWrapper>
        {/* 6th */}
        <ImgWrapper>
            <Img src='./babes.jpg' />
            <Title>Vill Story</Title>
        </ImgWrapper>
        {/* 7th */}
        <ImgWrapper>
            <Img src='./babes.jpg' />
            <Title>Vill Story</Title>
        </ImgWrapper>
        {/* 8yh */}
        <ImgWrapper>
            <Img src='./babes.jpg' />
            <Title>Vill Story</Title>
        </ImgWrapper>
    </Container>
  )
}

export default Slider