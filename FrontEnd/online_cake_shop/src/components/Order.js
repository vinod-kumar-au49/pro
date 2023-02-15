import React from 'react';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Order = () => {
  useEffect(() => {
    fetchItems();
  }, []);

  const [orders, setOrders] = useState([]);

  const fetchItems = async () => {
    const res = await fetch("http://localhost:8000/orders");


    const jsonData = await res.json();
    setOrders(jsonData.orders);
  };
  return (
    <div>
      <div className=' producthead'>
        <div className='min'><Link to={'/'}><button type="button" className="backbtn">Back</button></Link></div>
        <h1 className='pHead'>Orders Detailes</h1>
      </div>
      {
        orders.map((e) => (
          <div className='order-body' >
            <h4>Name:{e.name}</h4>
            <h4>cake Name: {e.cakeName}</h4>
            <h4>Email Address:{e.email}</h4>
            <h4>Address:{e.address}</h4>
            <h4>Region:{e.region}</h4>
            <h4>Postal/Zipcode:{e.postalZipcode}</h4>
            <h4>country:{e.country}</h4>
            <hr style={{ margin: "20px" }} />
          </div>
        ))
      }
    </div>
  )
}

export default Order;
