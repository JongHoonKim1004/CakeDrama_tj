import React from 'react';
import { Nav } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import "../css/index.css";
import { MainDataInter } from '../db/Main1';

interface ProductsProps {
  id: number,
  title: string,
  content: string,
  price: number,
  thumbnail: string,
  url: string[]
  
}

interface MainProps {
  bread:MainDataInter;
  i: number;
  key: number;
}

const MainProduct = (props:MainProps) => {
  let navigate = useNavigate();
  const {id, title, content, price, thumbnail} = props.bread;
  let str1 = price;
  let str2 = str1.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
  return (
    <div className='col-md-3' style={{marginBottom: "30px"}}>
      <Nav.Link onClick={() => {navigate("/detail/" + (id - 1))}}  style={{ textDecoration: "none", color: "#000", textAlign: "center" }}>
        <img src={thumbnail} alt='' style={{width: "100%", marginBottom: "10px"}}/>
        <h3 className='MainProductTitle'>{title}</h3>
        <p className='MainProductContent' style={{color: "#999"}}>{content}</p>
        <p className='MainProductContent' style={{color: "#008bcc", fontWeight: "600"}}>{str2 + "원"}</p>
      </Nav.Link>
    </div>
  );
};

export default MainProduct;