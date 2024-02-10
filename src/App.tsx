import NavScroll from "./component/NavScroll";
import Main from "./component/Main";
import "./css/App.css";
import "./css/reset.css";
import { Routes, Route, Link, useNavigate } from "react-router-dom";
import Productlist from "./component/Productlist";
import Footer from "./component/Footer";
import Company from "./component/Company";
import Detail from "./component/Detail";
import Cart from "./component/Cart";
import MyPage from "./component/MyPage";
import LoginNav from "./component/LoginNav";
import { Nav } from "react-bootstrap";
import Login from "./component/Login";
import data from "./db/product";

export interface ProductsInter {
  id: number,
  title: string,
  content: string,
  price: number,
  thumbnail: string,
  url: string[],
}



function App():JSX.Element {
  let navigate = useNavigate();
  
  return (
    <div className="App">
      <div>
        <div className="row" style={{ height: "30px", backgroundColor: "#333",  position: "relative" }}>
          
          <div className="col-md-2" style={{paddingTop: "5px", position: "absolute", right: "0"}}>
            <LoginNav/>
          </div>
          
        </div>
        <Nav.Link onClick={() => {navigate('/')}}>
          <div className="logoBox"></div>
        </Nav.Link>
        <NavScroll />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/detail/:id" element={<Detail  />} />
          <Route path="/company" element={<Company />} />
          <Route path="/product" element={<Productlist />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/myPage" element={<MyPage />} />
          <Route path="/customer" element={<></>} />
          <Route path="/login" element={<Login/>}/>
        </Routes>
        <Footer />
      </div>
    </div>
  );
}

export default App;
