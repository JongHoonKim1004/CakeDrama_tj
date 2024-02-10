import React, { ChangeEvent, useEffect } from "react";
import { useState } from "react";
import { Button, Form, Nav, Table } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import store, { addItem } from "../store";
import data from "./../db/product";
import { useDispatch, useSelector } from "react-redux";
import "../css/index.css";
import { ProductsInter } from "../App";



const Detail = () => {
  let dispatch = useDispatch();
  let { id } = useParams<{ id?: string }>();
  const safeId = id ?? 'defaultId';
  
  let selProduct = data.find((x) => x.id - 1 == parseInt(id ?? "0")) as ProductsInter;
  

  let [amount, setAmount] = useState(1);
  useEffect(() => {
    window.scrollTo(0,0);
  },[])
  const onChange = (e:React.ChangeEvent<HTMLInputElement>) => {
    setAmount(parseInt(e.target.value));
  }
  let price1 = selProduct.price;
  let price2 = price1.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",");
  let amountPrice1 = amount * selProduct.price;
  let amountPrice2 = amountPrice1.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");

  return (
    <div className="container" style={{ padding: "30px 0" }}>
      <div className="row underNav"></div>
      <div
        className="row"
        style={{ border: "1px solid #d8d8d8", padding: "20px" }}
      >
        <div className="col-md-6 DetailLeft">
          <img
            alt=""
            src={selProduct.thumbnail}
            style={{ width: "80%" }}
          />
        </div>
        <div className="col-md-6 DetailRight">
          <div
            className="row"
            style={{
              
              padding: "20px 0",
              height: "auto",
            }}
          >
            <p style={{ fontSize: "40px", fontWeight: "520", marginBottom: "20px" }}>
              {selProduct.title}
            </p>
            <p style={{ fontSize: "16px", lineHeight: "24px" }}>
              {selProduct.content}
            </p>
          </div>
          
          <div className="row" style={{ height: "200px", borderTop: "1px solid #d8d8d8", borderBottom: "1px solid #d8d8d8" }}>
            <table className="infoTable" >
              <colgroup >
                <col width={"130px"}></col>
              </colgroup>
              <tbody >
                <tr style={{fontSize: "14px"}}>
                  <th>가격</th>
                  <td>
                    <span style={{color: "tomato"}}>{price2}</span>
                    <span>{" 원"}</span>
                  </td>
                </tr>
                <tr style={{fontSize: "14px"}}>
                  <th>포인트</th>
                  <td>{Math.round(price1 * 0.02) + " 포인트 (2% 적립)"}</td>
                </tr>
                <tr style={{fontSize: "14px"}}>
                  <th>배송비</th>
                  <td>3,000원 &#40;120,000원 이상 주문시 무료&#41;</td>
                </tr>
                <tr style={{fontSize: "14px"}}>
                  <th>배송 소요일</th>
                  <td>2 ~ 3일</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div
            className="row"
            style={{
              height: "70px",
              
              marginTop: "55px",
            }}
          >
            <div className="col-md-6" style={{ marginTop: "10px" }}>
              <Form style={{position: "relative"}}>
                <Button
                  variant="outline-warning"
                  className="amountBtn"
                  style={{ borderRadius: "10px 0 0 10px", position: "absolute", top:"0px", left: "0px" }}
                  onClick={() => {
                    let num = amount;
                    num--;
                    if(num <= 0){
                      alert("더 이상 줄일 수 없습니다.");
                      num = 1;
                    }
                    setAmount(num);
                  }}
                >
                  -{" "}
                </Button>
                <input value={amount} type="number" className="amountInput" onChange={onChange}/>
                <Button
                  variant="outline-warning"
                  className="amountBtn"
                  style={{ borderRadius: "0 10px 10px 0", position: "absolute", top:"0px", left: "160px"  }}
                  onClick={() => {
                    let num = amount;
                    num++;
                    setAmount(num);
                  }}
                >
                  +{" "}
                </Button>
              </Form>
            </div>
          </div>
          <div className="row" style={{ height: "50px", marginTop: "10px" }}>
            <div className="col-md-3">
              <Button
                variant="outline-danger"
                onClick={() => {
                  dispatch(
                    addItem({
                      id: selProduct.id,
                      title: selProduct.title,
                      count: amount,
                      thumbnail: selProduct.thumbnail,
                      price: selProduct.price
                    })
                  );
                }}
              >
                장바구니 담기
              </Button>
            </div>
            <div className="col-md-4">
              <Link to="/cart">
                <Button variant="outline-info">장바구니로 이동</Button>
              </Link>
            </div>
            <div className="col-md-4" style={{textAlign: "right", lineHeight: "40px"}}>
              <span>총 &nbsp;</span>
              <span style={{fontSize: "40px", fontWeight: "600"}}>{amountPrice2}</span>
              <span>원</span>
            </div>
          </div>
        </div>
      </div>
      <div
        className="row"
        style={{
          margin: "50px 0",
          padding: "30px 0",
          border: "1px solid #d8d8d8",
        }}
      >
        <div className="row">
          {(selProduct.id % 2 == 0) ? <img alt="" src="../../img/Main/banner_1.jpg" /> : <img  alt="" src="../../img/Main/banner_2.jpg" />}
        </div> 
        {selProduct.url.map((ele, index) => (
          <div
            key={index}
            className="row"
            style={{
              display: "flex",
              justifyContent: "center",
              margin: "0 auto",
            }}
          >
            <img
              alt=""
              src={ele}
              style={{ marginBottom: "10px", width: "50%" }}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Detail;
