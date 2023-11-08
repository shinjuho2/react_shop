import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";


function Detail(props) {

  let [alert, setalert] = useState(true)

  useEffect(() => {
    let timer = setTimeout(() => { setalert(false) }, 2000)
    return () => {
      clearTimeout(timer)
    }
  }, [])

  let [count, setcount] = useState(0);
  let { id } = useParams();
  let find = props.shoes.find(x => x.id == id);

  return (
    <div className="container">
      {
        alert === true
        ?
        (<div className="alert alert-warning">
          click me within 2 seconds
        </div>)
        : null
      }
      {count}
      <button onClick={() => {
        setcount(count + 1)
      }}>button</button>
      <div className="row">
        <div className="col-md-6">
          <img src={'https://codingapple1.github.io/shop/shoes' + (id) + '.jpg'} width="100%" />
        </div>
        <div className="col-md-6 mt-4">
          <h4 className="pt-5">{find.title}</h4>
          <p>{find.content}</p>
          <p>수량</p>
          <input className="onlyNum"></input>
          <p>{find.price}원</p>
          <button className="btn btn-danger">주문하기</button>
        </div>
      </div>
    </div>
  )
}

export default Detail;