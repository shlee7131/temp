import { Container, Navbar, Nav, NavDropdown, Button } from "react-bootstrap";
import { useState } from "react";
import UserModal from "./UserModal";
import { Link } from "react-router-dom";

const NavbarTemplate = () => {

    let [signIn,setSignIn] = useState(false);
    let [signUp,setSignUp] =useState(false);

    return (
        <div>
        <Navbar bg="light" expand="xxl">
            <Container>
                <Navbar.Brand href="#home">Nextorial_18</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    <Nav.Link as={Link} to="/">Home</Nav.Link>
                    <Nav.Link as={Link} to="/status">Status</Nav.Link>

                    {/* 로그인 axios*/}
                    <Button variant="secondary" onClick={()=>{setSignIn(!signIn)}}>로그인</Button>
                    <Nav.Link></Nav.Link>
                    {/* 회원가입 axios */}
                    <Button variant="secondary" onClick={()=>{setSignUp(!signUp)}}>회원가입</Button>
                </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
        {
            signIn===true
            ? <UserModal type='로그인'/>   
            : <></>
        }
        {
            signUp===true
            ? <UserModal type='회원가입'/>   
            : <></>
        }
        </div>
    )
}

export default NavbarTemplate