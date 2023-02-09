import React from 'react'
import styled from 'styled-components'
const Container = styled.div`
    border-radius: 5px;
    background-color: ${({theme}) => theme.bgStrong};   
    padding-block: 0.3rem;
    padding-inline: 0.5rem
`
const Wrapper = styled.div`
    display: flex;
    gap: 5px;
    align-items: center;
`
const Img = styled.img`
    width: 20px;
    height: 20px;
    border-radius: 50%
`
const Right = styled.div`
`
const Title = styled.h4`
    color: ${({theme}) => theme.textStrong};
`
const SubTitle = styled.h5`
    color: ${({theme}) => theme.textSoft};
`
const Buttons = styled.div`
    display: flex;
    align-items: center;
    gap: 5px;
    padding-top: 0.5rem;
`
const AcceptBtn = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    border: none;
    border-radius: 100vh;
    background-color: blue;
    color: white;
    padding-block: 0.1rem;
    padding-inline: 0.5rem
`
const DeclineBtn = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    border: none;
    border-radius: 100vh;
    background-color: gray;
    color: black;
    padding-block: 0.1rem;
    padding-inline: 0.5rem
`
function People({ title, subtitle, img, request }) {
  return (
    <Container>
        <Wrapper>
            <Img src={img} />
            <Right>
                <Title>{title}</Title>
                <SubTitle>{subtitle}</SubTitle>
            </Right>
        </Wrapper>
        {request && 
             <Buttons>
             <AcceptBtn>Accept</AcceptBtn>
             <DeclineBtn>Decline</DeclineBtn>
         </Buttons>
        }      
    </Container>
  )
}

export default People