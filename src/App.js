import logo from './logo.svg';
import './App.css';
import { BrowserRouter,Routes,Route,NavLink,Link } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Home from './component/Home';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Slide from './component/Slide';
import './component/Own.css'
import Image from 'react-bootstrap/Image';
import Form from 'react-bootstrap/Form';
import NavbarCollapse from 'react-bootstrap/esm/NavbarCollapse';
import { Button } from 'bootstrap';
import Para from './component/Para';
function App() {
  return (
    <>
    <div className="Nava">
      
      <BrowserRouter>




<Container fluid>
<Row>
  <Col>
  <Navbar expand="sm" sticky="top" >
<Container>
  <Navbar.Brand href="#home" className='logo'>logo</Navbar.Brand>
 <Navbar.Toggle aria-controls='my-nav'/> 
 <Navbar.Collapse id='my-nav'>
  
    <Nav className='ms-auto'>
      <NavLink href="#home" className="navbar" >Home</NavLink>
      <NavLink href="#home" className="navbar">Home</NavLink>
      <NavLink href="#home" className="navbar">Home</NavLink>
      <NavLink  href="#home"className="navbar">Home</NavLink>
      <NavLink  href="#home" className="navbar"><button className='bt'>Home</button></NavLink>
     
      
    </Nav>
   </Navbar.Collapse>
   
    </Container>
 
 
  </Navbar>
  </Col>
  </Row>
</Container>



<Routes>

<Route exact path="/" element={<Home/>}></Route>
</Routes>
</BrowserRouter>

<Container>
  <Row>
  <h4>Premium penthouse in central Barcelona with<br/> panoramic view</h4>
  <Col xs={7} md={7}>
          <Image src="img15.jpg" className='w-100 h-25' rounded />
         
          <Slide/>
         
        </Col>
        
    <div>
        <Col sm={5}>
        


  
    <Form>
      <Form.Group className="mb-3" controlId="formGroupEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formGroupPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
    </Form>




        </Col>
        </div>

</Row>
</Container>



    </div>
    </>
  );
}

export default App;
