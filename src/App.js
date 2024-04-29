import './App.css';
import { Button, Navbar, Container, Nav } from 'react-bootstrap';
import bg from './img/bg.jpg';
import { useState } from 'react';
import data from './data.js';
import { Routes, Route, Link, useNavigate, Outlet } from 'react-router-dom';
import Detail from './routes/detail.js';

function App() {
  let [shoes] = useState(data);
  let navigate = useNavigate();

  return (
    <div className="App">
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand>DHMall</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link
              onClick={() => {
                navigate('/');
              }}
            >
              Home
            </Nav.Link>
            <Nav.Link
              onClick={() => {
                navigate('/detail');
              }}
            >
              Cart
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <Routes>
        <Route
          path="/"
          element={
            <>
              <div
                className="main-bg"
                style={{ backgroundImage: 'url(' + bg + ')' }}
              ></div>
              <div className="container">
                <div className="row">
                  {shoes.map((data, i) => (
                    <Card data={data}></Card>
                  ))}
                </div>
              </div>
            </>
          }
        />

        <Route path="/detail/:id" element={<Detail shoes={shoes} />} />

        <Route path="/event" element={<Event></Event>}>
          <Route path="one" element={<div>첫 주문시 양배추즙 서비스</div>} />
          <Route path="two" element={<div>생일기념 쿠폰받기</div>} />
        </Route>
        <Route path="*" element={<div>없는페이지요</div>} />
      </Routes>
    </div>
  );
}

function Event() {
  return (
    <div>
      <h4>오늘의 이벤트</h4>
      <Outlet></Outlet>
    </div>
  );
}

function Card(props) {
  return (
    <div className="col-md-4">
      <img src={props.data.img} width="80%" />
      <h4>{props.data.title}</h4>
      <p>{props.data.price}원</p>
    </div>
  );
}

export default App;
