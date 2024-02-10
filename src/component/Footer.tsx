import React from "react";
import { Nav } from "react-bootstrap";


const Footer = () => {
  return (
    <div className="footer">
      <div className="fotBox">
        <div className="container">
          <div className="row" style={{height: "60px", borderBottom: " 1px solid #d8d8d8", fontSize: "14px"}}>
            <div className="col-md-6" >
              <Nav.Link href="#" style={{float: "left", color: "brown", paddingTop: "20px"}}>개인정보처리방침</Nav.Link>
              <Nav.Link href="#" style={{float: "left", color: "#333", paddingTop: "20px"}}>찾아오시는길</Nav.Link>
              <Nav.Link href="#" style={{float: "left", color: "#333", paddingTop: "20px"}}>가입안내</Nav.Link>
              <Nav.Link href="#" style={{float: "left", color: "#333", paddingTop: "20px"}}>회원가입</Nav.Link>
              <Nav.Link href="#" style={{float: "left", color: "#333", paddingTop: "20px"}}>FAQ</Nav.Link>
            </div>
            <div className="col-md-6">
              <div className="logoDiv">
                <img alt="" src="https://jonghoonkim1004.github.io/FirstReactData/img/Footer/facebook.png" />
              </div>
              <div className="logoDiv">
                <img alt="" src="https://jonghoonkim1004.github.io/FirstReactData/img/Footer/instagram.png"/>
              </div>
              <div className="logoDiv">
                <img alt="" src="https://jonghoonkim1004.github.io/FirstReactData/img/Footer/naver_blog.png"/>
              </div>
            </div>
          </div>
          <div className="row" style={{marginTop: " 20px", paddingBottom: "50px", fontSize: "12px"}}>
            <div className="col-md-6" style={{lineHeight: "20px", color: "#666"}}>
              경기도 군포시 공단로 141 &#40;당동 51-2&#41;	&#40;주&#41;케익드라마<br/>
              TEL: 031&#41;	456-0520~1, 031&#41;	451-0520
              <em style={{fontSize:"12px" , color: "#333", margin: "0 10px"}}>|</em>
              FAX: 0303-0799-1520<br/>
              info@cakedrama.com &#40;대표메일&#41;
              <em style={{fontSize:"12px" , color: "#333", margin: "0 10px"}}>|</em>
              trade@cakedrama.com &#40;수출문의&#41;<br/>
              사업자등록번호 : 123-86-16060 &nbsp;&nbsp;	&nbsp; 대표 : 최순호 &nbsp;	&nbsp; 통신판매 신고번호 : 2009-경기군포-00313호<br/>
              Copyright 2017 CAKEDRAMA Co.Ltd. ALL RIGHT RESERVED
            </div>
            <div className="col-md-6">
              <div className="HACCP-Div">
                <img alt="" src="https://jonghoonkim1004.github.io/FirstReactData/img/Footer/footer_haccp.png" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
