import { CommentOutlined, HeartBrokenOutlined, LeakRemoveOutlined, MenuOutlined, ShareOutlined } from '@mui/icons-material'
import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    padding: 0.4rem;
    background-color: ${({theme}) => theme.bgStrong};
    margin-bottom: 0.4rem
`
const Header = styled.div`
    display: flex;
    align-items: flex-start;
    justify-content: space-between
`
const HeaderLeft = styled.div`
    display: flex;
    align-items: center;
    gap: 0.4rem
`
const HImg = styled.img`
    width: 20px;
    height: 20px;
    object-fit: cover
    border-radius: 50%
`
const HTWrapper = styled.div``
const HTitle = styled.h5`
    color: ${({theme}) => theme.textStrong};
`
const HSubTitle = styled.h6`
    color: ${({theme}) => theme.textSoft};
`
const Img = styled.img`
    width: 100%;
    object-fit: cover;
    height: 200px;
    border-radius: 7px
`
const Icons = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between
`
const IconsLeft = styled.div`
    display: flex;
    align-items: center;
    gap: 0.3rem
`
const Socials = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between
`
const SocialsImgs = styled.div`
    display: flex;
    align-items: center
`
const SocialsImg = styled.img`
    border-radius: 50%;
    width: 15px;
    height: 15px
`
const SocialsTitle = styled.h5``
const Post = styled.p``
function Posts() {
  return (
    <Container>
        <Header>
            <HeaderLeft>
                <HImg src='./babes.jpg' />
                <HTWrapper>
                    <HTitle>Benjamin Gojan</HTitle>
                    <HSubTitle>may 2022 </HSubTitle>
                </HTWrapper>
            </HeaderLeft>
            <MenuOutlined/>
        </Header>
        <Img src='./babes.jpg' />
        <Icons>
            <IconsLeft>
                <HeartBrokenOutlined/>
                <CommentOutlined/>
                <LeakRemoveOutlined/>
            </IconsLeft>
            <ShareOutlined/>
        </Icons>
        <Socials>
            <SocialsImgs>
                <SocialsImg  src='./babes.jpg'/>
                <SocialsImg src='./babes.jpg' />
                <SocialsImg src='./babes.jpg' />
            </SocialsImgs>
            <SocialsTitle>liked by Lorem ipsum dolor sit amet consectetur.</SocialsTitle>
        </Socials>
        <Post>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dicta quos sunt id facilis fuga?</Post>
    </Container>
  )
}

export default Posts