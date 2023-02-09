import { SearchOutlined } from '@mui/icons-material'
import React from 'react'
import styled from 'styled-components'


const Container = styled.div`
    height: 2.5rem;
    background-color: ${({theme}) => theme.bgStrong};
    position: sticky;
    top: 0rem;
    z-index: 2
`
const Wrapper = styled.div`
    max-width: 1234px;
    margin-inline: auto;
    display: grid;
    grid-template-columns: 1fr 3fr 1fr;
    align-items: center;
    height: 100%;
    
`
const Logo = styled.h4`
    font-size: 18px;
    color: ${({theme}) => theme.textStrong};
`
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
const Items = styled.div`
    display: flex;
    align-items: center;
    gap: 8px;
    justify-self: end
`
const Button = styled.button`
    padding-inline: 14px;
    border-radius: 100vh;
    color: white;
    background-color: blue;
    border: none;
    padding-block: 4px
`
const Img = styled.img`
    height: 20px;
    width: 20px;
    object-fit: cover;
    border-radius: 50%
`
function Navbar() {
    
   
  return (
    <Container>
        <Wrapper>
            <Logo>nokiaSocial </Logo>
            <Search>
                <Input placeholder='Search for categories' ></Input>
                <SearchOutlined />
            </Search>
            <Items>
                <Button>Create</Button>
                <Img src='./babes.jpg' />
            </Items>
        </Wrapper>
    </Container>
  )
}

export default Navbar