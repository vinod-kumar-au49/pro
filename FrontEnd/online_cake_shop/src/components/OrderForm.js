import React, { useState } from 'react';


const OrderForm = () => {

  const [name, setName] = useState(" ")
  const [email, setEmail] = useState(" ")
  const [cakeName, setCakeName] = useState(" ")
  const [address, setAddress] = useState(" ")
  const [city, setCity] = useState(" ")
  const [region, setRegion] = useState(" ")
  const [postalZipcode, setPostalZipcode] = useState(" ")
  const [country, setCountry] = useState(" ")

  const handle = (e) => {
    e.preventDefault();
    console.log({ name, email, cakeName, address, city, region, postalZipcode, })

    fetch('http://localhost:8000/orders', {
      method: "POST",
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify({ name, email, cakeName, address, city, region, postalZipcode, country })
    }).then((response) => {
      console.log("saved")
    }).catch((err) => { console.log(err.message) })

    setName(" ");
    setEmail(" ");
    setCakeName(" ");
    setAddress(" ");
    setCity(" ");
    setRegion(" ");
    setPostalZipcode(" ");
    setCountry(" ");
  }
  const handlee = () => {
    alert("succefully purchased Cake ");
  }

  return (

    <form className="form3" onSubmit={handle}>

      <div className="mb-3">
        <h1>Order Form</h1>
        <label htmlFor='exampleInputname' className="form-label">Name: </label>
        <input type="text" className="form-control" id="exampleInputname"
          placeholder="Enter your Name" value={name} onChange={e => setName(e.target.value)} />

      </div>
      <div className="mb-3">
        <label htmlFor='exampleInputEmail1' className="form-label">Email address: </label>
        <input type="email" className="form-control" id="exampleInputEmail1" placeholder="Enter your postalZipcode"
          value={email} onChange={e => setEmail(e.target.value)} />

      </div>
      <div className="mb-3">
        <label htmlFor="exampleInputPassword1" className="form-label">postalZipcode: </label>
        <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Enter your postalZipcode"
          value={postalZipcode} onChange={e => setPostalZipcode(e.target.value)} />
      </div>
      <div className="mb-3">
        <label htmlFor='exampleInputname' className="form-label">Cake Name: </label>
        <input type="text" className="form-control" id="exampleInputname" placeholder="Enter your Cake Name"
          value={cakeName} onChange={e => setCakeName(e.target.value)} />

      </div>
      <div className="mb-3">
        <label htmlFor='exampleInputname' className="form-label">Address: </label>
        <textarea type="text" className="form-control" id="exampleInputname" placeholder="Enter your Address"
          value={address} onChange={e => setAddress(e.target.value)} />

      </div>
      <div className="mb-3">
        <label htmlFor='exampleInputname' className="form-label">City</label>
        <input type="text" className="form-control" id="exampleInputname" placeholder="Enter your City"
          value={city} onChange={e => setCity(e.target.value)} />

      </div>
      <div className="mb-3">
        <label htmlFor='exampleInputname' className="form-label">region: </label>
        <input type="text" className="form-control" id="exampleInputname" placeholder="Enter your region"
          value={region} onChange={e => setRegion(e.target.value)} />

      </div>
      <div className="mb-3">
        <label htmlFor='exampleInputname' className="form-label">Country: </label>
        <input type="text" className="form-control" id="exampleInputname" placeholder="Enter your Country"
          value={country} onChange={e => setCountry(e.target.value)} />

      </div>
      <div className='btndiv'> <button type="submit" className="submitbtn" onClick={handlee}>Submit</button></div>


    </form>
  )
}

export default OrderForm;
