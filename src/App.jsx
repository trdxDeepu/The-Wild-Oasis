import styled from "styled-components";
import GlobalStyle from "./styles/GlobalStyle";
import Button from "./ui/Button";
import Input from "./ui/Input";


const H1 = styled.h1`
  font-size: 50px;
  font-weight: 600;
  background-color: aqua;
`;


const StyledApp = styled.div`
  background-color: orangered;
  padding: 20px;
`;

function App() {
  return (
    <>
    <GlobalStyle/>
    <StyledApp>
      <H1>The wild oasis</H1>

      <Button onClick={() => alert("Check in")}>Check in</Button>
      <Button onClick={() => alert("Check out")}>Check out</Button>

      <Input type="number" placeholder="number of guest"/>
      <Input type="number" placeholder=""/>
    </StyledApp></>
    
  );
} 

export default App;
