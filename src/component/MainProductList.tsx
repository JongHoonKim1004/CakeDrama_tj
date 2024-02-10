import React, { useState } from "react";
import MainProduct from "./MainProduct";
import mainData from "./../db/Main1";
import { Breadcrumb, BreadcrumbItem, Button } from "react-bootstrap";
import axios from "axios";

const MainProductList = () => {
  let style1 = {
    marginTop: "50px",
    width: "1200px",
    height: "auto",
    margin: " 0 auto",
  };

  let [count, setCount] = useState(1);
  let [bread, setBread] = useState(mainData);
  return (
    <div style={style1}>
      <div className="contaner">
        <div className="row">
          <div className="col-md-9"></div>
          <div className="col-md-3">
            <Breadcrumb>
              <BreadcrumbItem
                href="#"
                style={{ fontSize: "12px" }}
                onClick={() => {
                  let copy15 = [...bread].sort((a,b) => a.id > b.id ? 1 : -1);
                  setBread(copy15);
                }}
              >
                기본순
              </BreadcrumbItem>
              <BreadcrumbItem
                href="#"
                style={{ fontSize: "12px" }}
                onClick={() => {
                  let copy16 = [...bread].sort((a,b) => a.price > b.price ? 1 : -1);
                  setBread(copy16);
                }}
              >
                가격순
              </BreadcrumbItem>
              <BreadcrumbItem
                href="#"
                style={{ fontSize: "12px" }}
                onClick={() => {
                  let copy17 = [...bread].sort((a,b) => a.title > b.title ? 1 : -1);
                  setBread(copy17);
                }}
              >
                이름순
              </BreadcrumbItem>
            </Breadcrumb>
          </div>
        </div>
        <div className="row">
          {bread.map((ele, i) => {
            return <MainProduct bread={bread[i]} i={i} key={bread[i].id} />;
          })}
        </div>
        <div style={{ textAlign: "center" }}>
          <Button
            variant="outline-success"
            style={{ margin: " 20px 0 100px" }}
            // count ={count}
            onClick={() => {
              if (count == 1) {
                axios
                  .get(
                    "https://JongHoonKim1004.github.io/FirstReactData/Main3.json"
                  )
                  .then((result) => {
                    let copy2 = [...bread, ...result.data];
                    setBread(copy2);
                    setCount(count + 1);
                    console.log(result);
                    console.log(bread);
                  });
              } else if (count == 2) {
                axios
                  .get(
                    "https://JongHoonKim1004.github.io/FirstReactData/Main4.json"
                  )
                  .then((result) => {
                    let copy3 = [...bread, ...result.data];
                    setBread(copy3);
                    setCount(count + 1);
                    console.log(result);
                    console.log(bread);
                  });
              } else {
                alert("마지막 상품입니다.");
              }
            }}
          >
            상품 더 보기
          </Button>
          <div className="row" style={{marginBottom: "10px"}}>
            <img alt="" src="../img/Main/1.png" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainProductList;
