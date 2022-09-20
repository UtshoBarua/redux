import React from 'react';
import {login,logout} from '../feature/user'
import {useDispatch} from 'react-redux';
function Login(props) {
    const dispatch = useDispatch();
    return (
        
        <div>
            <button onClick={()=>dispatch(login({name:"utsho", age:23, email:"utshoemail"}))} >Login</button>
            <button onClick={()=>dispatch(logout())} >Logout</button>
        </div>
    );
}

export default Login;