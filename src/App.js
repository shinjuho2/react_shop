import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';
import img from './img/bg.png';
import { useState } from 'react';
import data from './data.js';
import { Routes, Route, Link, useNavigate, Outlet, Navigate } from 'react-router-dom'
import Detail from './pages/detail';
import axios from 'axios';

function App() {

  let [shoes, setshoes] = useState(data);
  let navigate = useNavigate();

  return (
    <div className="App">
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand onClick={() => { navigate('/') }}>shop</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link onClick={() => { navigate('/') }}>Home</Nav.Link>
              <Nav.Link onClick={() => { navigate('/detail') }}>detail</Nav.Link>
              <NavDropdown title="성별" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">남성</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">여성
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
                  return <Product shoes={shoes[i]} i={i} key={a.id}></Product>
                })}
              </div>
            </div>
            <Button onClick={() => {
              axios.get('https://codingapple1.github.io/shop/data2.json')
                .then((result) => {
                  let copy = [...shoes, ...result.data];
                  setshoes(copy)
                  console.log(shoes)
                })
            }}>더보기</Button>
          </div>
        }></Route>

        <Route path="/detail/:id" element={<Detail shoes={shoes}></Detail>}></Route>

        <Route path='/about' element={<About></About>}>
          <Route path='member' element={<div>member</div>}></Route>
          <Route path='location' element={<div>location</div>}></Route>
        </Route>

        <Route path='event' element={<Event></Event>}>
          <Route path='one' element={<div>happy</div>}></Route>
          <Route path='two' element={<div>unhappy</div>}></Route>
        </Route>

        <Route path='*' element={<div>:b :(</div>}></Route>
      </Routes>
    </div>
  );
}

function Event() {
  return (
    <div>
      <h4>today event</h4>
      <Outlet></Outlet>
    </div>
  )
}

function About() {
  return (
    <div>
      <h4>회사 정보</h4>
      <Outlet></Outlet>
    </div>
  )
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
