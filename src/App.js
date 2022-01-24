import './App.css';
import Header from "./Header";
import Body from "./Body";
import Footer from "./Footer";
import {Container} from "react-bootstrap";

function App() {
  return (
    <Container fluid style={{width: "100%", height: "100%", justifyContent: "space-between", padding: "0"}}>
      <Header/>
      <Body/>
      <Footer/>
    </Container>
  );
}

export default App;
