import { useState } from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState(" ")
  const [password, setPassword] = useState(" ")

  const handle = (e) => {
    e.preventDefault();
    console.log({ email, password })
    fetch('http://localhost:8000/login', {
      method: "POST",
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify({ email, password })
    }).then((response) => {
      console.log("saved")
    }).catch((err) => { console.log(err.message) })

    setEmail("")
    setPassword("")
  }

  const v = () => {
    alert("Successfully Logged In ");
  }
  return (
    <div>
      <form className="form2" onSubmit={handle} >
        <h1>LogIn</h1>
        <div className="formhead">
          <label htmlFor='email' >Email address: </label>
          <input id="email" type="email" placeholder="Enter your Email Id" value={email} onChange={e => setEmail(e.target.value)} /> <br />
          <label htmlFor='password'>Enter password: </label>
          <input
            id="password"
            type={"password"}
            maxLength="6"
            placeholder="Enter your password" value={password} onChange={e => setPassword(e.target.value)}
          /> <br />
          <div className='btns'>
            <button type="submit" className="submitbtn" onSubmit={v} >Submit</button>
            <Link to={'/orderForm'}><button type="submit" className="addbtn">Add Form</button></Link>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Login;
