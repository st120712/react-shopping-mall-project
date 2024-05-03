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

  let [d_fade, setDFade] = useState('');

  useEffect(() => {
    let a = setTimeout(() => { setDFade('end'); }, 10);

    return () => {
      clearTimeout(a);
      setDFade('');
    }
  }, [id])



  return (
    <div className={`start ${d_fade}`}>
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
              src={shoes.img}
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
            <Nav.Link eventKey="link0" onClick={() => { setTab(0) }}>버튼0</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="link1" onClick={() => { setTab(1) }}>버튼1</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="link2" onClick={() => { setTab(2) }}>버튼2</Nav.Link>
          </Nav.Item>
        </Nav>

        <TabContent tab={tab} />

      </div>
    </div>
  );
}

function TabContent({ tab }) {

  let [fade, setFade] = useState('');

  useEffect(() => {
    let a = setTimeout(() => { setFade('end'); }, 10);

    return () => {
      clearTimeout(a);
      setFade('');
    }
  }, [tab])

  return (<div className={`start ${fade}`}>
    {[<div>내용0</div>, <div>내용1</div>, <div>내용2</div>][tab]}
  </div>)
}

export default Detail;
