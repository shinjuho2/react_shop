import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';
import img from './img/bg.png';
import { useState } from 'react';
import data from './data.js';
import {Routes, Route, Link} from 'react-router-dom'

function App() {

  let [shoes] = useState(data)

  return (
    <div className="App">

      <Routes>
        <Route path='/detail' element={<div>asd</div>}></Route>
        <Route path='/about' ></Route>
      </Routes>
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
        <Product shoes={shoes[0]} i = {1}></Product>
        <Product shoes={shoes[1]} i = {2}></Product>
        <Product shoes={shoes[2]} i = {3}></Product>
      </div>
    </div>
    </div>
  );
}

function Product(props){
  return(
    <div className='col-md-4'>
      <img src={'https://codingapple1.github.io/shop/shoes'+ props.i +'.jpg'} width="80%"/>
      <h4>{props.shoes.title}</h4>
      <p>{props.shoes.price}</p>
    </div>
  )
}

export default App;
