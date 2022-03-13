import {Table} from 'react-bootstrap';
import CashFlowType from "./CashFlowType";
import axios from "axios";
import { useEffect } from "react";

const CashFlowChart = (props) => {
    let userId = props.userId;
    let setter = (value) => {props.setter(value)};
    let history = props.state;

    // 컴포넌트 등장 시 실행
    useEffect(async ()=>{
        // 총계정원장가져오기
        await axios.post().then((value) => setter(value))
    }, []);



    return (
        <>
            <Table bordered hover> 
            <thead>
                <tr>
                <th>수익</th>
                <th></th>
                <th>비용</th>
                <th></th>
                </tr>
            </thead>
            <tbody>
                <tr>
                <td>근로 소득</td>
                <td>Mark</td>
                <td>고정 지출</td>
                <td>@mdo</td>
                </tr>
                <tr>
                <td>이자/배당 소득</td>
                <td>Mark</td>
                <td>비고정 지출</td>
                <td>@mdo</td>
                </tr>
                <tr>
                <td>임대 소득</td>
                <td>Mark</td>
                <td>저축</td>
                <td>@mdo</td>
                </tr>
                <tr>
                <td>기타 소득</td>
                <td>Mark</td>
                <td>투자</td>
                <td>@mdo</td>
                </tr>
            </tbody>
        </Table>
        </>
    )

}

export default CashFlowChart;