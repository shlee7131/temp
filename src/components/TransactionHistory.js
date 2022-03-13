/* eslint-disabled */
import { Container, Navbar, Nav, NavDropdown, Button } from "react-bootstrap";
import { useState } from "react";
import axios from 'axios';
import HistoryTable from "./HistoryTable";

const TransactionHistory = (props) => {
    
    let [history, setHistory] = useState([]);

    const requestHistory = async (userId) => {
        // userId 보내는 로직 필요
        await axios.post().then((value)=>{
            setHistory(value);
        })
    }

    return (
        <div>
        <Navbar expand="lg">
            <Container>
                <Navbar.Brand>거래 내역</Navbar.Brand>
                {/* 거래 내역 조회 API 연결, userId 입력*/}
                <Button variant="secondary" onClick={()=>{requestHistory(props.userId)}}>조회</Button>
            </Container>
        </Navbar>
        <HistoryTable history={history}></HistoryTable>
        </div>
    )
}

export default TransactionHistory