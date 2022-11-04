import React, { useState } from "react";

function Login() {
    const [userName,setUserName]=useState('');
    const [password,setPassword]=useState('');
   
    const [UserError,setUserError]=useState(false);
    const [passwordError,setPasswordError]=useState(false);
   
    function loginHandler(e){
        if(userName.length <4 || password.length <4 ){
            alert('Invalid Detail')
        }else{
            alert('logegd in successfully')
        }
        e.preventDefault()
    }
    function userHandler (e)
    {
        let item = e.target.value
        if (item.length <4){
            setUserError(true)
        }else{
            setUserError(false)
        }

        setUserName(item)
        

    }
    
    function passHandler(e)
    {
        let item = e.target.value
        if (item.length <4){
            setPasswordError(true)
        }else{
            setPasswordError(false)
        }
        setPassword(item)
       

    }

  return (
    <div>
      <div className="login"><h1>Login</h1></div><hr />
      <div className="container">
        <form action="" onSubmit={loginHandler}>
          <label htmlFor="username">Username: </label>
          <input type="text" placeholder="Username" onChange={userHandler} />{UserError? <span>User Name Not Valid</span>:"" } <br /> <br />
        
          <label htmlFor="password">Password: </label>
          <input type="password" placeholder="Password" onChange={passHandler} />{passwordError? <span>Password Not Valid</span>:"" } <br />
          <br />
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
}

export default Login;
