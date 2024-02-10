import { Button } from "react-bootstrap";
import Form from "react-bootstrap/Form";

function Login() {
  return (
    <div className="container" style={{ height: "600px" }}>
      <div className="LoginBox" style={{display: "flex",flexDirection: "column", justifyContent: "center", alignItems: "center", height: "600px"}}>
        <Form style={{width: "300px"}}>
          <Form.Group className="mb-3" controlId="formGroupID">
            <Form.Label>ID</Form.Label>
            <Form.Control type="ID" autoFocus/>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formGroupPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>
          <Button variant="warning" style={{width: "300px", borderRadius: "3px"}} type ="submit">Login</Button>

        </Form>
        
      </div>
    </div>
  );
}

export default Login;
