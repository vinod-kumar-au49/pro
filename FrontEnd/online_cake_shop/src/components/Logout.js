import React from 'react';

const Logout = () => {
  fetch('http://localhost:8000/logout', {
    method: "POST",

  }).then((response) => {
    console.log("saved")
  }).catch((err) => { console.log(err.message) })

  return (
    <div>
      <button type="button" className='loginbtn'>Logout</button>
    </div>
  )
}

export default Logout;
