import React from 'react'
import styled from 'styled-components'
import Post from '../components/Post'
import Posts from '../components/Posts'
import Slider from '../components/Slider'

const Container = styled.div`
  height: 100%;
`

function Home() {
  return (
    <Container>
        <Slider/>
        <Post/>
        <Posts/>
        <Posts/>
    </Container>
  )
}

export default Home