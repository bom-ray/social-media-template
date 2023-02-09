import { PendingOutlined, SearchOutlined } from '@mui/icons-material'
import React from 'react'
import styled from 'styled-components'
import People from '../components/People'

const Container = styled.div`
    padding: 0.4rem;
    background-color: ${({theme}) => theme.bgStrong};
    height: 25rem;
    overflow-y: auto;
    &::-webkit-scrollbar{
         opacity: 0
    };
`
const Top = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-block: 0.3rem
`
const Logo = styled.h4``
const Search = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: ${({theme}) => theme.bgSoft};
    border-radius: 100vh;
    padding-inline: 8px;
    padding-block: 1px;
    color: ${({theme}) => theme.bgSoft}
`
const Input = styled.input`
    flex: 1;
    background-color: transparent;
    border: none;
`
const Header = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-block: 0.5rem
`
const Title = styled.span`
    font-size: 14px
`
const List = styled.div`

`
function Messages() {
  return (
    <Container>
        <Top>
           <Logo>Messages</Logo> 
           <PendingOutlined/>
        </Top>
        <Search>
            <Input  placeholder='Search for categories' ></Input>
            <SearchOutlined />
        </Search>
        <Header>
            <Title>Primary</Title>
            <Title>General</Title>
            <Title>Request</Title>
        </Header>
        <List>
            <People title='Damian' subtitle='@dayi' img='./girls.jpg' />
            <People title='Geb' subtitle='@dayi' img='./girls.jpg' />
            <People title='Roy' subtitle='@dayi' img='./girls.jpg' />
            <People title='Geb' subtitle='@dayi' img='./girls.jpg' />
            <People title='Roy' subtitle='@dayi' img='./girls.jpg' />
            <People title='Geb' subtitle='@dayi' img='./girls.jpg' />
            <People title='Roy' subtitle='@dayi' img='./girls.jpg' />
        </List>
    </Container>
  )
}

export default Messages