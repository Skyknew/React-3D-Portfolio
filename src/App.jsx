import styled from 'styled-components'
import Hero from "./components/Hero"
import Contact from "./components/Contact"
import Works  from "./components/Works"
import Who from "./components/Who"

const Container = styled.div`
  height: 100vh;
  scroll-snap-type: y mandatory;
  scroll-behavior: smooth;
  color: white;
  background: url("./img/bg.jpeg");
  overflow-y: auto;
  scrollbar-width: none;
  &::-webkit-scrollbar{
    display: none;
  }
`;

function App() {

    return (
      <Container>
        <Hero />
        <Works />
        <Who />
        <Contact />
      </Container>
    )
  }
  
  export default App