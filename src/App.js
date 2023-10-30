import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';
import img from './img/bg.png';
import { useState } from 'react';
import data from './data.js';
import { Routes, Route, Link } from 'react-router-dom'
import Detail from './detail';

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
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/detail">detail</Nav.Link>
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

      <Routes>
        <Route path='/' element={
          <div>
            <div className='main-bg' style={{ backgroundImage: 'url(' + img + ')' }}></div>
            <div className='container'>
              <div className='row'>
                {shoes.map((a, i) => {
                  return <Product shoes={shoes[i]} i={i}></Product>
                })}
              </div>
            </div>
          </div>
        }></Route>
        <Route path='/detail' element={<Detail></Detail>}></Route>
      </Routes>
    </div>
  );
}

function Product(props) {
  return (
    <div className='col-md-4'>
      <img src={'https://codingapple1.github.io/shop/shoes' + (props.i + 1) + '.jpg'} width="80%" />
      <h4>{props.shoes.title}</h4>
      <p>{props.shoes.price}</p>
    </div>
  )
}

export default App;
