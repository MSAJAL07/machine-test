import React, { useState } from 'react';

const Login = ({user, pass,userHandeler,passHandeler,setUser }) =>{
    
    

const login = e  => {
    if( user == "user" && pass == "pass"){
        localStorage.setItem("login" , true);
        localStorage.setItem("token","xxxx")
    }
}
return(
    <div>
    <label>User Name: <input type="text" value={user} onChange={userHandeler}/></label>
    <label> Pass: <input type="text" value={pass} onChange = {passHandeler}/></label>
    <input type="button" defaultValue = "Login" onClick = {login} />
    </div>
)



}


export default Login;