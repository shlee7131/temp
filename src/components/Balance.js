/* eslint-disabled */
import { Container, Navbar, Nav, NavDropdown, Button } from "react-bootstrap";
import { useState } from "react";
import axios from 'axios';

const Balance = () => {
    let userId = localStorage.getItem('userId');
    let [balance,setBalance] = useState(0)
    return (
        <Navbar expand="lg">
            <Container>
                <Navbar.Brand>내 잔액</Navbar.Brand>
                <Navbar.Brand>{balance}</Navbar.Brand>
                {/* 잔액 조회 버튼 누르는 로직 필요 */}
                <Button variant="secondary" onClick={()=>{axios.get()}}>새로고침</Button>
            </Container>
        </Navbar>
    )
}

export default Balance