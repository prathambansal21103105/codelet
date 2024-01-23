import { useState } from "react";
import { useNavigate } from 'react-router-dom';

const Login=(props)=>{
    const [name,setName]=useState("");
    const [password,setPassword]=useState("");
    const navigate=useNavigate();
    const nameInputHandler=(event)=>{
        setName(event.target.value);
    }
    const passwordInputHandler=(event)=>{
        setPassword(event.target.value);
    }
    const submitHandler=(event)=>{
        event.preventDefault();
        if(props.onSubmit(name,password)){
            setName("");
            setPassword("");
            navigate('/');
        }
        else{
            setName("");
            setPassword("");
            navigate('/login');
        }
        
    }
    return(
        <>
        <form className="login-form" onSubmit={submitHandler}>
        <input type="text" placeholder="username" value={name} onChange={nameInputHandler}/>
        <input type="password" placeholder="password" value={password} onChange={passwordInputHandler}/>
        <button>login</button>
        </form>
        </>
    );
}
export default Login;

/*
        <form onSubmit={submitHandler}>
            <label htmlFor="name">Name</label>
            <input type="name" id="name" onChange={nameInputHandler} value={name}></input>
            <label htmlFor="name">Password</label>
            <input type="password" id="password" onChange={passwordInputHandler} value={password}></input>
            <button type="submit">Login</button>
        </form> 
*/