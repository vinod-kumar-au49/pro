import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const AllProducts = () => {
  useEffect(() => {
    fetchItems();
  }, []);

  const [cakes, setCakes] = useState([]);

  const fetchItems = async () => {
    const res = await fetch("http://localhost:8000/cakes");

    const jsonData = await res.json();
    setCakes(jsonData.cakes);
  };
  return (

    <div className='div' >

      {cakes.map((e) => (
        <div key={e._id}>
          <img src={e.image} alt='cakes' className='imgaes' />
          <h2 >  <Link className='cakeName' to={`/cakes/${e._id}`}>{e.name}</Link></h2>
          <div className='buyandprice'>
            <h1>{e.price}</h1>
            <Link to={'/signup'}> <button className='buybtn'>BUY</button></Link>
          </div>
          <hr style={{ margin: "20px" }} />
        </div>
      ))
      }
    </div>
  )
}
export default AllProducts;