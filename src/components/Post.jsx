import { FeedOutlined, LocationOnOutlined, PhotoOutlined, TagOutlined } from '@mui/icons-material'
import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    padding: 0.4rem;
    box-shadow: 0px 3px 3px rgba(0,0,0,0.1);
    background-color: ${({theme}) => theme.bgStrong}; 
    margin-block: 0.5rem
`

const Top = styled.div`
    display: flex;
    align-items: center;
    gap: 0.4rem;
    padding-bottom: 0.3rem
`
const Img = styled.img`
    width: 3rem;
    height: 3rem;
    object-fit: cover;
    border-radius: 50%
`
const Title = styled.h5`
    color: ${({theme}) => theme.textSoft}; 
`

const InputContainer = styled.div`
    padding-bottom: 0.4rem
`
const Input = styled.input`
    width: 100%;
    border: none;
    border-bottom: 0.1rem solid ${({theme}) => theme.textSoft};
    background-color: transparent;
`
const FileContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between
`
const FileWrapper = styled.div`
    display: flex;
    align-items: center;
    gap: 0.5rem
`
const Btn = styled.button`
    border: none;
    background-color: rgba(0,0,255,1);
    color: rgba(255,255,255,1);
    border-radius: 5px;
    padding-block: 0.4rem;
    padding-inline: 0.6rem;
`
const Item = styled.div`
    display: flex;
    align-items: center;
    gap: 0.25rem
`
const ItemTitle = styled.h5``

function Post() {
  return (
    <Container>
        <Top>
            <Img src='./babes.jpg' />
            <Title>Whats in your mind</Title>
        </Top>
        <InputContainer>
            <Input/>
        </InputContainer>
        <FileContainer>
            <FileWrapper>
                <Item>
                    <PhotoOutlined/>
                    <ItemTitle>Photo or Video</ItemTitle>
                </Item>
                {/* 2nd */}
                <Item>
                    <TagOutlined/>
                    <ItemTitle>Tag</ItemTitle>
                </Item>
                {/* 3rd */}
                <Item>
                    <LocationOnOutlined/>
                    <ItemTitle>Location</ItemTitle>
                </Item>
                {/* 4th */}
                <Item>
                    <FeedOutlined/>
                    <ItemTitle>Fellings</ItemTitle>
                </Item>
            </FileWrapper>
            <Btn>Post</Btn>
        </FileContainer>
    </Container>
  )
}

export default Post