import { Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import store, {changeName, increase} from '../store'
import { addCount, decreaseCount, deleteItem } from "../store";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

interface Item {
  id: number;
  thumbnail: string;
  title: string;
  count: number;
  price: number;
}

interface RootState {
  user: {
    name: string;
    age: number;
  };
  cart: Item[];
}

function Cart() {
  let state = useSelector((state:RootState) => state);

  let dispatch = useDispatch();

  const smallProdcuctStyle: React.CSSProperties = {
    border: "1px solid #ddd",
    width: "100px",
    height: "80px",
    cursor: "pointer",
  };

  let textverticalAlign: React.CSSProperties = {
    verticalAlign: "middle",
    textAlign: "center",
  };

  useEffect(() => {
    window.scrollTo(0,0);
  },[]);
  
  let sum = 0;
  state.cart.forEach((item:Item) => {
    sum += item.price * item.count;
  })
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-sm-12" style={{ textAlign: "center", minHeight: "600px"}}>
            <h5 style={{ padding: "50px" }}>
              {state.user.name} 의 장바구니
            </h5>
            <Table>
              <thead>
                <tr>
                  <th>id</th>
                  <th>상품이미지</th>
                  <th>상품명</th>
                  <th>수량</th>
                  <th>변경하기</th>
                </tr>
              </thead>
              <tbody>
                {state.cart.map((a, i) => {
                  
                  return (
                  <tr key={i}>
                    <td style={textverticalAlign}>{state.cart[i].id}</td>

                    <td>
                      <Link to={`/detail/${state.cart[i].id-1}`}>
                        <img
                          src={`${state.cart[i].thumbnail}`}
                          style={smallProdcuctStyle}
                        />
                      </Link>
                    </td>
                    <td style={textverticalAlign}>{state.cart[i].title}</td>
                    <td style={textverticalAlign}>{state.cart[i].count}</td>
                    <td style={textverticalAlign}>
                      <Button
                        onClick={() => {
                          dispatch(addCount(state.cart[i].id));
                        }}
                        variant="outline-success"
                        style={{ marginRight: "10px" }}
                      >
                        +
                      </Button>

                      <Button
                        onClick={() => {
                          dispatch(decreaseCount(state.cart[i].id));
                        }}
                        variant="outline-warning"
                        style={{ marginRight: "10px" }}
                      >
                        -
                      </Button>

                      <Button
                        onClick={() => {
                          dispatch(deleteItem(state.cart[i].id));
                        }}
                        variant="outline-danger"
                      >
                        상품삭제
                      </Button>
                    </td>
                  </tr>
                  )
                })}
                <tr >
                  <td colSpan={5} style={{textAlign: "right", height: "90px", paddingTop: "30px"}}>
                    <span>총</span>
                    <span style={{fontSize: "50px"}}>{sum}</span>
                    <span>원</span>
                  </td>
                </tr>
              </tbody>
            </Table>
            
          </div>
        </div>
      </div>
    </>
  );
}

export default Cart;
