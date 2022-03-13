import { DropdownButton, Dropdown } from "react-bootstrap";
import { useState } from "react";

const TransactionDropdownButton = (props) =>{    

    let type = props.type;
    let data = props.data;
    let setter = (name) => {props.setter(name)};



    return (
        <DropdownButton
            variant="outline-secondary"
            title={type}
            id="input-group-dropdown-2"
            align="end"
            >
            {
                data === []
                ? <></>
                : data.map((value)=>{
                        let name = value;
                        return (
                        <Dropdown.Item onClick={()=>{setter(name);}}>{name}</Dropdown.Item>
                        );
                    }
                )
            }
        </DropdownButton>
    )
}

export default TransactionDropdownButton;