import React from 'react';
import { Nav } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { ProductsInter } from './../App';


interface ProductsProp {
  product: ProductsInter;
  i: number;
  key: number;
}

const Products = (props:ProductsProp) => {
  let navigate = useNavigate();
  const {id, title, content, price, thumbnail} = props.product;
  let str1 = price;
  let str2 = str1.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")

  return (
    <div className='col-md-3' style={{marginBottom: "30px"}}>
      <Nav.Link onClick={() => {navigate("/detail/" + (id - 1))}} style={{ textDecoration: "none", color: "#000", textAlign: "center" }}>
        <img src={thumbnail} alt='' style={{width: "100%", marginBottom: "10px"}}/>
        <h3 className='MainProductTitle'>{title}</h3>
        <span className='MainProductContent'>{content}</span>
        <p className='MainProductContent' style={{color: "#008bcc", fontWeight: "600"}}>{str2 + "원"}</p>
      </Nav.Link>
    </div>
  );
};

export default Products;