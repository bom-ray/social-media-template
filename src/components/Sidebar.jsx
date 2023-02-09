import { Analytics, BookmarkAddOutlined, Explore, HomeOutlined, MessageOutlined, NotificationsOffOutlined, Settings } from '@mui/icons-material'
import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    background-color: ${({theme}) => theme.bgStrong};
    margin-top: 10px;
    padding-left: 0.5rem;
`
const Items = styled.div`
    display: flex;
    align-items: center;
    gap: 0.5rem;
    width: 100%;
    padding-block: 0.5rem;
    color:  ${({theme}) => theme.textSoft};   
`
const Title = styled.h5`
    font-size: 14px;
    color: ${({theme}) => theme.textStrong};
`
function Sidebar() {
  return (
    <Container>
        <Items>
            <HomeOutlined/>
            <Title>Home</Title>
        </Items>
        {/* 2nd */}
        <Items>
            <Explore/>
            <Title>Explore</Title>
        </Items>
        {/* 3rd */}
        <Items>
            <NotificationsOffOutlined/>
            <Title>Notifications</Title>
        </Items>
        {/* 4th */}
        <Items>
            <MessageOutlined/>
            <Title>messages</Title>
        </Items>
        {/* 5th */}
        <Items>
            <BookmarkAddOutlined/>
            <Title>Bookmarks</Title>
        </Items>
        {/* 6th */}
        <Items>
            <Analytics/>
            <Title>Analytics</Title>
        </Items>
        {/* 7th */}
        <Items>
        <Settings/>
            <Title>Theme</Title>
        </Items>
        {/* 8th */}
        <Items>
            <Settings/>
            <Title>Settings</Title>
        </Items>
    </Container>
  )
}

export default Sidebar