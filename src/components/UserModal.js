import { Form, Button } from "react-bootstrap";
import axios from "axios";

const UserModal= (props) =>{
    let type = props.type; // 로그인(signIn)인지 회원가입(signUp)인지 확인

    const storeIdInLocalStorage = (userId) => {
        localStorage.setItem('userId', userId);
    }
    
    return (
        <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="id" placeholder="Enter email" />
                <Form.Text className="text-muted">
                We'll never share your email with anyone else.
                </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            {/* 제출 로직 axois*/}
            <Button variant="primary" type="submit" onSubmit={()=>{axios.post().then((value)=>{storeIdInLocalStorage(value)})}}>
                Submit
            </Button>
        </Form>
    )

}

export default UserModal;
