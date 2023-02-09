import { Routes, Route } from "react-router-dom";
import styled, { ThemeProvider } from 'styled-components'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import People from './components/People'
import Home from './pages/Home'
import List from './pages/List'
import Conversation from './pages/Conversation'
import { lightTheme , darkTheme} from './Theme'
import Messages from './components/Messages'

const Container = styled.div`
  width: 100%;
  height: 100%;
  background-color: ${({theme}) => theme.bgSoft};
`
const Wrapper = styled.div`
  height: calc(100vh - 2.5rem);
  width: 100%;
  max-width: 1234px;
  margin-inline: auto;
  display: grid;
  grid-template-columns: 1fr 3fr 1fr;
  padding-top: 10px;
  grid-gap: 0.45rem;
  overflow-y: hidden;
 
`
const SidebarWrapper = styled.div`
  height: 100%;
`
const Feed = styled.div`
  height: 100%;
  overflow-y: auto;
  &::-webkit-scrollbar{
     opacity: 0
  };

`
const PeopleWrapper = styled.div`
  
  // overflow-y: scroll:
  // &::-webkit-scrollbar{
  //   background-color: ${({theme}) => theme.bgSoft};
  // }
`
const CreateBtn = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  padding-block: 0.3rem;
  padding-inline: 0.5rem;
  width: 100%;
  border-radius: 100vh;
  border: none;
  margin-top: 0.5rem;
  background-color: blue;
  color: white
`
const Requests = styled.div`
  margin-top: 0.5rem;
  display: flex;
  flex-direction: column;
  gap: 0.45rem;
  height: 20rem;
  overflow-y: auto;
  &::-webkit-scrollbar{
     opacity: 0
  }

`
const RTitle = styled.h5`
  font-size: 15px;
  padding-block: 0.5rem
`
function App() {


  return (
    <ThemeProvider theme={lightTheme} >
    <Container>
      <Navbar/>
      <Wrapper>
        <SidebarWrapper>          
          <People title='Damian' subtitle='@dayi' img='./girls.jpg' />
          <Sidebar/>
          <CreateBtn>Create</CreateBtn>      
        </SidebarWrapper>
        <Feed>
          <Routes>
            <Route path="/" element={<Home/>}  />  
            <Route path="/conversation" element={<List/>}  /> 
            <Route path="/conversation/:id" element={<Conversation/>}  />     
          </Routes>
        </Feed>
        <PeopleWrapper>
          <Messages/>
          <Requests>
            <RTitle>Requests</RTitle>
            <People title='Damian' subtitle='koprli' img='./girls.jpg' request={true} />
            <People title='Ryan' subtitle='partoy' img='./girls.jpg' request={true} />
            <People title='Peterson' subtitle='moral' img='./girls.jpg' request={true} />
            <People title='Ryan' subtitle='partoy' img='./girls.jpg' request={true} />
            <People title='Peterson' subtitle='moral' img='./girls.jpg' request={true} />
          </Requests>
        </PeopleWrapper>
      </Wrapper>
    </Container>
    </ThemeProvider>
  
  );
}

export default App;
