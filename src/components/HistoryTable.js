import {Table} from 'react-bootstrap';
import {useState} from 'react';
import axios from 'axios';

const HistoryTable = (props) => {

    let history = props.history;
    
    return (
        <Table striped bordered hover> 
            <thead>
                <tr>
                <th>거래일자</th>
                <th>차변계정</th>
                <th>차변금액</th>
                <th>대변계정</th>
                <th>대변금액</th>
                <th>메모</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                <td>1</td>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
                <td>@mdo</td>
                <td>@mdo</td>
                </tr>
                {
                    history.map((value) => {
                        return (
                            <tr>
                            <td>{value.date}</td>
                            <td>{value.debitType}</td>
                            <td>{value.debitAmount}</td>
                            <td>{value.creditType}</td>
                            <td>{value.creditAmount}</td>
                            <td>{value.memo}</td>
                            </tr>
                        );
                    })
                }
            </tbody>
        </Table>
    )
}

export default HistoryTable;