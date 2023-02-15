import React from 'react';
import { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';


const ProductDetailes = () => {
  useEffect(() => {
    fetchItems();
  }, []);

  const [cake, setCake] = useState({});
  const { cId } = useParams();

  const fetchItems = async () => {
    const res = await fetch(`http://localhost:8000/cakes/${cId}`);

    const jsonData = await res.json();
    setCake(jsonData.cake);
  };
  return (

    <div > <div className=' producthead'>
      <div className='min'><Link to={'/cakes'}><button type="button" className="backbtn">Back</button></Link></div>
      <h1 className='pHead'>Product Detailes</h1>
    </div>

      <div className="card">
        <img src={cake.image} className="image" alt='all' />
        <div className="card-body">
          <h1>NAME:- {cake.name}</h1>
          <p>PRICE:- {cake.price}</p>
          <p>PRODUCTION-DATE:-{cake.manufactor_Date}</p>
          <p>DETAILES:-{cake.description}</p>
        </div>
      </div>


    </div>
  )
}

export default ProductDetailes;
