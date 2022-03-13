import {Tab, Tabs} from 'react-bootstrap';
import CashFlowChart from './CashFlowChart';
import BalanceSheet from './BalanceSheet';
import {useState} from 'react';

const SimpleTab = () =>{
    let userId = localStorage.getItem('userId');

    let [cashFlow, setCashFlow] = useState([]);
    let [balanceSheet, setBalanceSheet] = useState([]);


    return (<Tabs defaultActiveKey="balanceSheet" id="uncontrolled-tab-example" className="mb-3">
    <Tab eventKey="balanceSheet" title="재무상태표">
      <BalanceSheet userId={userId} state={balanceSheet} setter={setBalanceSheet}></BalanceSheet>
    </Tab>
    <Tab eventKey="cashFlow" title="현금흐름표">
      <CashFlowChart userId={userId} state={cashFlow} setter={setCashFlow}></CashFlowChart>
    </Tab>
  </Tabs>)
}

export default SimpleTab;