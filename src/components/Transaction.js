import { useContext, useState } from "react";
import { TransactionContext } from "../App";
import { InputGroup, FormControl, DropdownButton, Dropdown } from "react-bootstrap";
import axios from "axios";
import IncomeRequestData from './IncomeRequestData';
import OutcomeRequestData from './OutcomeRequestData';
import TransactionDropdownButton from "./TransactionDropdownButton";

const Transaction = (props)=> {

    let userId = localStorage.getItem('userId');


    let [amount, setAmount] = useState(0);
    let [checkAmount, setCheckAmount] = useState(false);
    let [check, setCheck] = useState(false);

    let [firstButton, setFirstButton] = useState('입출금');
    let [secondButton, setSecondButton] = useState('거래 유형');
    let [thirdButton, setThirdButton] = useState('세부 항목');

    let [transactionLargeType, setTransactionLargeType] = useState(['자산','부채','자본','수익','비용']);
    
    let [depositType, setDepositType] = useState(['근로소득','이자/배당소득','임대소득','기타','대출']);
    let [withdrawalType, setWithdrawaㅣType] = useState(['고정지출','비고정지출','저축','투자','상환']);

    

    let [depositFirstDetail, setDepositFirstDetail] = useState(['급여','성과']);
    let [depositSecondDetail, setDepositSecondDetail] = useState(['CMA/보통 예금','저축 에금','정기 예금','주식/채권','펀드','개인연금 펀드','저축 보험']);
    let [depositThirdDetail, setDepositThirdDetail] = useState(['아파트']);
    let [depositFourthDetail, setDepositFourthDetail] = useState(['기타']);
    let [depositFifthDetail, setDepositFifthDetail] = useState(['개인신용대출','마이너스 통장 잔액', '신용카드 잔액', '자동차 대출', '주택담보 대출', '임대보장금']);
    let depositDetailArray = [depositFirstDetail, depositSecondDetail, depositThirdDetail, depositFourthDetail, depositFifthDetail];


    let [withdrawalFirstDetail, setWithdrawalFirstDetail] = useState(['전기세','수도세','통신비']);
    let [withdrawalSecondDetail, setWithdrawalSecondDetail] = useState(['생활', '외식', '잡화', '자동차', '아파트']);
    let [withdrawalThirdDetail, setWithdrawalThirdDetail] = useState(['CMA/보통예금', '저축예금']);
    let [withdrawalFourthDetail, setWithdrawalFourthDetail] = useState(['정기예금', '주식/채권', '펀드', '개인연금펀드', '저축보험']);
    let [withdrawalFifthDetail, setWithdrawalFifthDetail] = useState(['개인신용대출', '마이너스통장잔액', '신용카드 잔액', '자동차대출','주택담보대출','임대보장금']);
    let withdrawalDetailArary = [withdrawalFirstDetail, withdrawalSecondDetail, withdrawalThirdDetail, withdrawalFourthDetail, withdrawalFifthDetail];

    // 요청하는 거래에 대한 계정과목 정보 확인
    function getTransactionInfo()
    {
        var desc = secondButton.replaceAll(' ','') + ' ' + thirdButton.replaceAll(' ','');
        var transactionInfo;
        switch(firstButton)
        {
            case '입금':
                transactionInfo = IncomeRequestData.find(x => x.description==desc);
                break;
            default :
                transactionInfo = OutcomeRequestData.find(x => x.description==desc);
                break;
        }
        return transactionInfo;
    }

    function setIncomeThirdButtonType(secondButton)
    {
        let index = depositType.indexOf(secondButton);
        return depositDetailArray[index];
    }


    function getDescription(firstButton, secondButton){
        return firstButton.replaceAll(' ','') + ' ' + secondButton.replaceAll(' ','');
    }
    function setOutcomeThirdButtonType(secondButton)
    {
        let index = withdrawalType.indexOf(secondButton);
        return withdrawalDetailArary[index];
    }

    function setThirdButtonType(desc){
        switch (desc)
        {
            case '입금 근로소득':
                return (<TransactionDropdownButton type={thirdButton} setter={setThirdButton} data={depositFirstDetail}/>)
            case '입금 이자/배당소득':
                return (<TransactionDropdownButton type={thirdButton} setter={setThirdButton} data={depositSecondDetail}/>)
            case '입금 임대소득':
                return (<TransactionDropdownButton type={thirdButton} setter={setThirdButton} data={depositSecondDetail}/>)
            case '입금 기타':
                return (<TransactionDropdownButton type={thirdButton} setter={setThirdButton} data={depositSecondDetail}/>)
            case '입금 대출':
                return (<TransactionDropdownButton type={thirdButton} setter={setThirdButton} data={depositSecondDetail}/>)

            case '출금 고정지출':
                return (<TransactionDropdownButton type={thirdButton} setter={setThirdButton} data={depositSecondDetail}/>)
            case '출금 비고정지출':
                return (<TransactionDropdownButton type={thirdButton} setter={setThirdButton} data={depositSecondDetail}/>)
            case '출금 저축':
                return (<TransactionDropdownButton type={thirdButton} setter={setThirdButton} data={depositSecondDetail}/>)
            case '출금 투자':
                return (<TransactionDropdownButton type={thirdButton} setter={setThirdButton} data={depositSecondDetail}/>)
            case '출금 상환':
                return (<TransactionDropdownButton type={thirdButton} setter={setThirdButton} data={depositSecondDetail}/>)
            default :
                return (
                <DropdownButton
                    variant="outline-secondary"
                    title={thirdButton}
                    id="input-group-dropdown-2"
                    align="end"
                    >
                        <Dropdown.Item>없음</Dropdown.Item>
                </DropdownButton>)         
        }
    }
           
    
    

    return (
        <div>
            <InputGroup className="mb-3">
            <button className="btn btn-dang</TransactionDropdownButton>er" disabled='disabled'>기입란</button>    
                <DropdownButton
                    variant="outline-secondary"
                    title={firstButton}
                    id="input-group-dropdown-2"
                    align="end"
                    >
                        <Dropdown.Item onClick={()=>{setFirstButton('입금'); console.log(firstButton)}}>입금</Dropdown.Item>
                        <Dropdown.Item onClick={()=>{setFirstButton('출금')}}>출금</Dropdown.Item>
                </DropdownButton>

                {
                    firstButton === '입금'
                    ? <TransactionDropdownButton type={secondButton} setter={setSecondButton} data={depositType} />
                    : <TransactionDropdownButton type={secondButton} setter={setSecondButton} data={withdrawalType} />
                }

                {setThirdButtonType(getDescription(firstButton,secondButton))}

                <FormControl aria-label="Text input with dropdown button" placeholder="금액을 입력해주세요" onChange={(e)=>{setAmount(e.target.value)}}/>
                {/* transactionInfo 구해와서 userId 와 amount 를 함께 묶어서 axios post 해야함 */}
                <button className="btn btn-primary" onClick={()=>{console.log(getTransactionInfo(firstButton, secondButton,thirdButton))}}>확인</button>
            </InputGroup>
        </div>
    );
}

export default Transaction;
