import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';
import img from './img/bg.png';
import { useState } from 'react';
import data from './data.js';

function App() {

  let [shoes] = useState(data)

  return (
    <div className="App">
      <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">shop</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">cart</Nav.Link>
            <NavDropdown title="성별" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">남성</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                여성
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated Link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

    <div className='main-bg' style={{backgroundImage : 'url('+img+')'}}></div>

    <div className='container'>
      <div className='row'>
        <Product shoes={shoes}></Product>
        <Product shoes={shoes}></Product>
        <Product shoes={shoes}></Product>
      </div>
    </div>
    </div>
  );
}

function Product(props){
  return(
    <div className='col-md-4'>
      <img src='https://codingapple1.github.io/shop/shoes1.jpg' width="80%"/>
      <h4>{props.shoes[2].title}</h4>
      <p>{props.shoes[2].price}</p>
    </div>
  )
}

export default App;
