import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const Signup = () => {
  const [name, setName] = useState(" ")
  const [email, setEmail] = useState(" ")
  const [password, setPassword] = useState(" ")

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ name, email, password })

    fetch('http://localhost:8000/signup', {
      method: "POST",
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify({ name, email, password })
    }).then((response) => {
      console.log("saved")
    }).catch((err) => { console.log(err.message) })

    setName(" ")
    setEmail(" ")
    setPassword(" ")
  }

  const v = () => {
    alert("Successfully Created Account ");
  }

  return (
    <form className="form" onSubmit={handleSubmit}>
      <div className='formhead'>
        <h1>Signup</h1>
        <div>
          <label htmlFor='exampleInputname' className="form-label">Enter Name:   </label>
          <input type="text" className="form-control" id="exampleInputname"
            placeholder="Enter your Name" value={name} onChange={e => setName(e.target.value)} /><br />
        </div>
        <div >
          <label htmlFor='exampleInputEmail1' className="form-label">Email address: </label>
          <input type="email" className="form-control" id="exampleInputEmail1"
            placeholder="Enter your Email" value={email} onChange={e => setEmail(e.target.value)} /><br />

        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">Password: </label>
          <input type={"password"} className="form-control" id="exampleInputPassword1"
            placeholder="Enter your password" value={password} onChange={e => setPassword(e.target.value)} /><br />
        </div>

        <div className="mb-3 form-check">
          <input type="checkbox" className="form-check-input" id="exampleCheck1" />
          <label className="form-check-label" htmlFor="exampleCheck1" >Check me out</label><br />
          <div className='btns'>
            <button type="submit" className="submitbtn" onClick={v} >Submit</button>
            <Link to={'/orderForm'}><button type="submit" className="addbtn">Add Form</button></Link></div>

          <p>If you have already account then login?</p>
          <Link to={'/login'}><button type="submit" className="loginbtn"   >LogIn</button></Link>
        </div>
      </div>
    </form>
  )
}

export default Signup;

