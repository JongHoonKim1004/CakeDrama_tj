import React, { Component, useState } from "react";
import Slider from "react-slick";
import mainData2 from "../db/Main2";
import { Nav } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

interface ArrowProps{
  className?: string;
  style?: React.CSSProperties;
  onClick?: () => void;
}


function CenterMode() {
  let [data,setData] = useState(mainData2);
  let navigate = useNavigate();
  
  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 5,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />
  };  
  return (
    <div className="slider-container">
      <Slider {...settings}>
        {data.map((ele, i) => {
          let price1 = data[i].price;
          let price2 = price1.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",");
          return(
          <div className="slider-img">
            <Nav.Link onClick={() => {navigate('/detail/' + (data[i].id - 1))}}>
              <img alt="" src={data[i].thumbnail} style={{width:"100%", height: "180px"}}/>
            </Nav.Link>
            <p style={{textAlign: "center", fontSize: "14px", marginTop: "20px"}}>{data[i].title}</p>
            <p style={{textAlign: "center", fontSize: "14px", marginTop: "20px"}}>{price2 + " 원"}</p>
          </div>
        )})}
      </Slider>
    </div>
  );
}

function SampleNextArrow(props:ArrowProps) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block" }}
      onClick={onClick}
    >
      <img alt="" src="./img/Main/right_icon.png" style={{width: "100%"}}/>
    </div>
  );
}

function SamplePrevArrow(props:ArrowProps) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block"}}
      onClick={onClick}

    >
      <img alt="" src="./img/Main/left_icon.png" style={{width: "100%"}}/>
    </div>
  );
}

export default CenterMode;
