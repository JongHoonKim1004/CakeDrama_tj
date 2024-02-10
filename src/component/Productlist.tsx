import React, { useState } from "react";
import data from "../db/product";
import Products from "./Products";
import { useParams } from "react-router-dom";
import Breadcrumb from "react-bootstrap/Breadcrumb";

const Productlist = () => {
  window.scrollTo(0, 0);
  const [product, setProd] = useState(data);
  let { id } = useParams();

  return (
    <div className="container">
      <div className="row" style={{ paddingTop: "30px" }}>
        <div className="col-md-9"></div>
        <div className="col-md-3">
          <Breadcrumb>
            <Breadcrumb.Item active style={{ fontSize: "12px" }}>
              정렬
            </Breadcrumb.Item>
            <Breadcrumb.Item
              href="#"
              style={{ fontSize: "12px" }}
              onClick={() => {
                let copy11 = [...product].sort((a,b) => a.id > b.id ? 1 : -1);
                setProd(copy11);
              }}
            >
              기본순
            </Breadcrumb.Item>
            <Breadcrumb.Item
              href="#"
              style={{ fontSize: "12px" }}
              onClick={() => {
                let copy12 = [...product].sort((a,b) => a.price > b.price ? 1 : -1);
                setProd(copy12);
              }}
            >
              가격순
            </Breadcrumb.Item>
            <Breadcrumb.Item
              href="#"
              style={{ fontSize: "12px" }}
              onClick={() => {
                let copy13 = [...product].sort((a,b) => a.title > b.title ? 1 : -1);
                setProd(copy13);
              }}
            >
              이름순
            </Breadcrumb.Item>
          </Breadcrumb>
        </div>
      </div>
      <div className="row" style={{ marginTop: "30px" }}>
        {product.map((ele, i) => (
          <Products product={product[i]} i={i} key={data[i].id} />
        ))}
      </div>
    </div>
  );
};

export default Productlist;
