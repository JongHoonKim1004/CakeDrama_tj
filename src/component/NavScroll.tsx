import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import "../css/index.css";
import { Navigate, useNavigate } from "react-router-dom";


function NavScroll() {
  let navigate = useNavigate();
  return (
    <>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container fluid>
          {/* <Navbar.Brand onClick={() => {navigate("/customer")}}>Navbar scroll</Navbar.Brand> */}
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{
                maxHeight: "100px",
                margin: "0 auto",
                borderTop: "1px solid #eee",
                fontSize: "16px",
                paddingTop: "10px",
              }}
              navbarScroll
            >
              <Nav.Link
                style={{ minWidth: "200px", textAlign: "center", fontWeight: "bold", color: "black"}}
                onClick={() => {
                  navigate("/");
                }}
              >
                홈
              </Nav.Link>
              <NavDropdown title="케익드라마소개" className="NavMenu" style={{fontWeight: "bold", color: "black"}}>
                <NavDropdown.Item onClick={() => {navigate("/company")}} className="NavItem">
                  회사소개
                </NavDropdown.Item>
                <NavDropdown.Item onClick={() => {navigate("/company")}} className="NavItem">
                  경영이념
                </NavDropdown.Item>
                <NavDropdown.Item onClick={() => {navigate("/company")}} className="NavItem">
                  연혁
                </NavDropdown.Item>
                <NavDropdown.Item onClick={() => {navigate("/company")}} className="NavItem">
                  CI소개
                </NavDropdown.Item>
                <NavDropdown.Item onClick={() => {navigate("/company")}} className="NavItem">
                  협력업체
                </NavDropdown.Item>
                <NavDropdown.Item onClick={() => {navigate("/company")}} className="NavItem">
                  찾아오시는길
                </NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title="제품소개" className="NavMenu" style={{fontWeight: "bold", color: "black"}}>
                <NavDropdown.Item onClick={() => {navigate("/product")}} className="NavItem">
                  신제품
                </NavDropdown.Item>
                <NavDropdown.Item onClick={() => {navigate("/product")}} className="NavItem">
                  케이크
                </NavDropdown.Item>
                <NavDropdown.Item onClick={() => {navigate("/product")}} className="NavItem">
                  머핀/쿠키/베이글
                </NavDropdown.Item>
                <NavDropdown.Item onClick={() => {navigate("/product")}} className="NavItem">
                  베이커리완제품
                </NavDropdown.Item>
                <NavDropdown.Item onClick={() => {navigate("/product")}} className="NavItem">
                  베이커리반제품
                </NavDropdown.Item>
                <NavDropdown.Item onClick={() => {navigate("/product")}} className="NavItem">
                  냉동과일
                </NavDropdown.Item>
                <NavDropdown.Item onClick={() => {navigate("/product")}} className="NavItem">
                  차/음료
                </NavDropdown.Item>
                <NavDropdown.Item onClick={() => {navigate("/product")}} className="NavItem">
                  부자재/기타
                </NavDropdown.Item>
                <NavDropdown.Item onClick={() => {navigate("/product")}} className="NavItem">
                  프로모션
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link
                style={{ minWidth: "200px", textAlign: "center", fontWeight: "bold", color: "black"}}
                onClick={() => {
                  navigate("/cart");
                }}
                
              >
                장바구니
              </Nav.Link>
              <NavDropdown title="마이페이지" className="NavMenu" style={{fontWeight: "bold", color: "black"}}>
                <NavDropdown.Item onClick={() => {navigate("/myPage")}} className="NavItem">
                  장바구니
                </NavDropdown.Item>
                <NavDropdown.Item onClick={() => {navigate("/myPage")}} className="NavItem">
                  가상계좌발급
                </NavDropdown.Item>
                <NavDropdown.Item onClick={() => {navigate("/myPage")}} className="NavItem">
                  주문조회
                </NavDropdown.Item>
                <NavDropdown.Item onClick={() => {navigate("/myPage")}} className="NavItem">
                  제품별구매정보
                </NavDropdown.Item>
                <NavDropdown.Item onClick={() => {navigate("/myPage")}} className="NavItem">
                  세금계산서
                </NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title="고객센터" className="NavMenu" style={{fontWeight: "bold", color: "black"}}>
                <NavDropdown.Item onClick={() => {navigate("/customer")}} className="NavItem">
                  공지사항
                </NavDropdown.Item>
                <NavDropdown.Item onClick={() => {navigate("/customer")}} className="NavItem">
                  FAQ
                </NavDropdown.Item>
                <NavDropdown.Item onClick={() => {navigate("/customer")}} className="NavItem">
                  납품문의
                </NavDropdown.Item>
                <NavDropdown.Item onClick={() => {navigate("/customer")}} className="NavItem">
                  언론제보
                </NavDropdown.Item>
                <NavDropdown.Item onClick={() => {navigate("/customer")}} className="NavItem">
                  채용공고
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      
    </>
  );
}

export default NavScroll;
