import './App.css';
import { Navbar, Container, Nav } from 'react-bootstrap';
import bg from './img/bg.jpg';
import { useState } from 'react';
import data from './data.js';
import { Routes, Route, Link, useNavigate } from 'react-router-dom';
import Detail from './routes/detail.js';
import axios from 'axios';

function App() {
  let [shoes, setShoes] = useState(data);
  let navigate = useNavigate();

  let getShoesData = (e) => {
    var dataNum = 2;

    if (shoes.length == 6) { dataNum = 3 }

    if (shoes.length < 9) {
      axios.get(`https://codingapple1.github.io/shop/data${dataNum}.json`)
        .then((result) => {
          var tmp = [...shoes];
          result.data.map((m) => {
            console.log(m);
            m.img = `https://codingapple1.github.io/shop/shoes${m.id + 1}.jpg`;
            tmp.push(m);
            return m;
          });

          setShoes(tmp);
        })
        .catch((e) => { console.log(e) })
    }
  }

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
                  {shoes.map((data, i) => {
                    return (< Card key={i} data={data} ></Card>)
                  })}
                </div>
              </div>

              <button onClick={() => getShoesData()} >버튼</button>

            </>
          }
        />
        <Route path="/detail/:id" element={<Detail shoes={shoes} />} />
      </Routes>
    </div>
  );
}

const Card = (props) => {
  return (
    <div className="col-md-4">
      <Link to={'detail/' + props.data.id}>
        <img alt="이미지없음" src={props.data.img} width="80%" />
        <h4>{props.data.title}</h4>
        <p>{props.data.price}원</p>
      </Link>
    </div>
  );
}

export default App;
