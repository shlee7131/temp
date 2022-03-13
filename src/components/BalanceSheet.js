
import {Table} from 'react-bootstrap';
import axios from "axios";
import { useEffect, useState } from "react";

const BalanceSheet = (props) => {
    let userId = props.userId;
    let setter = (value) => {props.setter(value)};
    
    let [cash, setCash] = useState(0);


    

    // 컴포넌트 등장 시 실행
    useEffect(async ()=>{
        await axios.post().then((value) => setter(value))
    }, []);

    let balanceArray = props.state;
    balanceArray.map((value)=>{
        let accountTypeId = value.TransactionInfo.AccountType;
        let amount = value.TransactionInfo.Amount;
        switch(accountTypeId)
        {
            case 1:
                setCash(cash+amount);
        }
    })
    

    return (
        <>
            <Table bordered hover> 
            <thead>
                <tr>
                <th>차변</th>
                <th></th>
                <th>대변</th>
                <th></th>
                </tr>
            </thead>
            <tbody>
                <tr>
                <td colspan={2} style={{backgroundColor:'#eff'}}>자산</td>
                <td colspan={2} style={{backgroundColor:'#eff'}}>부채</td>
                </tr>
                <tr>
                <td colspan={2} id='custom'>현금성 자산</td>
                <td colspan={2} id='custom'>단기부채</td>
                </tr>
                <tr>
                <td>현금</td>
                <td>Mark</td>
                <td>개인 신용대출</td>
                <td>@mdo</td>
                </tr>
                <tr>
                <td>CMA/보통예금</td>
                <td>Mark</td>
                <td>마이너스통장 잔액</td>
                <td>@mdo</td>
                </tr>
                <tr>
                <td>저축예금</td>
                <td>Mark</td>
                <td>신용카드 잔액</td>
                <td>@mdo</td>
                </tr>
                <tr>
                <td colspan={2} id='custom'>투자자산</td>
                <td colspan={2} id='custom'>중장기부채</td>
                </tr>
                <tr>
                <td>정기예금</td>
                <td>Mark</td>
                <td>자동차 대출</td>
                <td>@mdo</td>
                </tr>
                <tr>
                <td>주식/채권</td>
                <td>Mark</td>
                <td>주택담보 대출</td>
                <td>@mdo</td>
                </tr>
                <tr>
                <td>펀드</td>
                <td>Mark</td>
                <td>임대보장금</td>
                <td>@mdo</td>
                </tr>
                <td colspan={2} id='custom'>은퇴자산</td>
                <td  style={{backgroundColor:'#eef'}}>부채총합</td>
                <td >@mdo</td>
                <tr>
                <td>개인연금펀드</td>
                <td>Mark</td>
                <td>부채 총계</td>
                <td>@mdo</td>
                </tr>
                <tr>
                <td>저축보험</td>
                <td>Mark</td>
                <td colspan={2} style={{backgroundColor:'#eff'}}>자본</td>
                </tr>
                <tr>
                <td colspan={2} id='custom'>사용자산</td>
                <td >순자산</td>
                <td >@mdo</td>
                </tr>
                <tr>
                <td>아파트</td>
                <td>Mark</td>
                <td  style={{backgroundColor:'#eef'}}>자본 총계</td>
                <td>@mdo</td>
                </tr>
                <tr>
                <td>자동차</td>
                <td>Mark</td>
                <td></td>
                <td></td>
                </tr>
                <tr>
                <td>기타</td>
                <td>Mark</td>
                <td></td>
                <td></td>
                </tr>
                <tr>
                <td style={{backgroundColor:'#eef'}}>차변총합</td>
                <td>Mark</td>
                <td style={{backgroundColor:'#eef'}}>대변총합</td>
                <td>@mdo</td>
                </tr>
            </tbody>
        </Table>
        </>
    )

}

export default BalanceSheet;