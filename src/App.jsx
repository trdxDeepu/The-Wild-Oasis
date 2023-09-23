import styled from "styled-components";
import GlobalStyle from "./styles/GlobalStyle";
import Button from "./ui/Button";
import Input from "./ui/Input";
import Heading from "./ui/Heading";

const StyledApp = styled.div`
  background-color: orangered;
  padding: 20px;
`;

function App() {
  return (
    <>
      <GlobalStyle />
      <StyledApp>
        <Heading as="h1">The wild oasis</Heading>
        
        <Heading as="h2">check in check out</Heading>
        <Button onClick={() => alert("Check in")}>Check in</Button>
        <Button onClick={() => alert("Check out")}>Check out</Button>
        
        <Heading as="h3">Form</Heading>
        <Input type="number" placeholder="number of guest" />
        <Input type="number" placeholder="" />
      </StyledApp>
    </>
  );
}

export default App;
