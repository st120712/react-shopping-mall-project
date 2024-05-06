import './App.css';
import { Navbar, Container, Nav } from 'react-bootstrap';
import bg from './img/bg.jpg';
import { useEffect, useState } from 'react';
import data from './data.js';
import { Routes, Route, Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import Cart from './routes/Cart.js';
import Detail from './routes/Detail.js';


function App() {

  let [watched, setWatched] = useState([...JSON.parse(localStorage.getItem('watched'))]);

  useEffect(() => {
    localStorage.setItem('watched', JSON.stringify(watched));
  }, [watched])


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
            m.img = `https://codingapple1.github.io/shop/shoes${m.id + 1}.jpg`;
            tmp.push(m);
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
                navigate('/cart');
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
              >
                <div className='watched'>
                  최근본상품
                  {
                    watched.map((e, i) => {
                      return <div>{e}</div>
                    })
                  }
                </div>
              </div>
              <div className="container">
                <div className="row">
                  {shoes.map((data, i) => {
                    return (< Card key={i} data={data} watched={watched} setWatched={setWatched} ></Card>)
                  })}
                </div>
              </div>

              <button onClick={() => getShoesData()} >버튼</button>

            </>
          }
        />
        <Route path="/detail/:id" element={
          <Detail shoes={shoes} />
        } />

        <Route path='/cart' element={<Cart />} />

      </Routes>
    </div>
  );
}

const Card = (props) => {
  return (
    <div className="col-md-4">
      <Link to={'detail/' + props.data.id} onClick={() => {
        let tmp = [...props.watched];
        tmp.unshift(props.data.title);
        let set = new Set(tmp);
        tmp = [...set];
        props.setWatched(tmp);
      }}>
        <img alt="이미지없음" src={props.data.img} width="80%" />
        <h4>{props.data.title}</h4>
        <p>{props.data.price}원</p>
      </Link>
    </div>
  );
}

export default App;
