
import React from 'react';

const Signup = () => {
  return (
    <div className='signup'>
      <h1>Register</h1>
        <input className='input-text' type ='text' placeholder='Enter Your Name:'/>
        <input className='input-text' type='text' placeholder='Enter Your Email:'/>
        <input  className='input-text' type='password' placeholder='Enter Your Password:'/>

    </div>
  );
};

export default Signup;