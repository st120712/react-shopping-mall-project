import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Nav } from 'react-bootstrap';

function Detail(props) {

  let { id } = useParams();
  var shoes = props.shoes.find((o) => o.id == id);
  let [alert, setAlert] = useState(true);
  let [tab, setTab] = useState(0);


  useEffect(() => {
    let a = setTimeout(() => { setAlert(false) }, 2000)

    return () => {
      clearTimeout(a)
    }
  }, [])



  return (
    <div className="container">
      {
        alert ? <div className='alert alert-warning'>
          2초이내 구매시 할인
        </div> : null
      }

      <div className="row">
        <div className="col-md-6">
          <img
            alt='고장'
            src=""
            width="100%"
          />
        </div>

        <div className="col-md-6">
          <h4 className="pt-5">{shoes.title}</h4>
          <p>{shoes.content}</p>
          <p>{shoes.price}원</p>
          <button className="btn btn-danger">주문하기</button>
        </div>
      </div>

      <Nav variant='tabs' defaultActiveKey="link0">
        <Nav.Item>
          <Nav.Link eventKey="link0">버튼0</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link1">버튼1</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link2">버튼2</Nav.Link>
        </Nav.Item>
      </Nav>

      <TabContent tab={tab} />

    </div>
  );
}

function TabContent(props) {
  switch (props.tab) {
    case 0:
      return <div>내용0</div>
    case 1:
      return <div>내용1</div>
    case 2:
      return <div>내용2</div>
  }
}

export default Detail;
