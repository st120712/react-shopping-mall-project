import './App.css';
import { Button, Navbar, Container, Nav } from 'react-bootstrap';
import bg from './img/bg.jpg';
import { useState } from 'react';
import data from './data.js';
import { Routes, Route, Link, useNavigate, Outlet } from 'react-router-dom'
import Detail from './routes/detail.js';

function App() {

  let [shoes] = useState(data);
  let navigate = useNavigate();

  return (
    <div className="App">
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">DHMall</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link onClick={()=>{navigate('/')}}>Home</Nav.Link>
            <Nav.Link onClick={()=>{navigate('/detail')}}>Cart</Nav.Link>
          </Nav>
        </Container>
      </Navbar>



      <Routes>
        <Route path='/' element={
          <>
            <div className='main-bg' style={{ backgroundImage: 'url(' + bg + ')' }}></div>
            <div className='container'>
              <div className='row'>
                {
                  shoes.map((data, i) => (
                    <Card data={data}></Card>
                  ))
                }
              </div>
            </div>
          </>
        } />

        <Route path='/detail' element={<Detail/>} />
        <Route path='*' element={<div>없는페이지요</div>} />
      </Routes>

    </div>
  );
}

function Card(props) {
  return (
    <div className='col-md-4'>
      <img src={props.data.img} width="80%" />
      <h4>{props.data.title}</h4>
      <p>{props.data.price}</p>
    </div>
  )
}

export default App;
