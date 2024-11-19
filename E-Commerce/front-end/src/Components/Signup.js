// // import { Collection } from 'mongoose';
// import React,{ useState } from 'react';

// // import React from 'react';

// const Signup = () => {
//     const[name,setName]=useState("");
//     const[email,setEmail]=useState("");
//     const[password,setPassword]=useState("");
//     const collectData=()=>{
//         console.warn(name,email,password);
//     }



//   return (
//     <div className='signup'>
//       <h1>Register</h1>
//         <input className='input-text' type ='text'  
//           value={name} onChange={(e)=>setName(e.target.value)}  
//          placeholder='Enter Your Name:'/>

//         <input className='input-text' type='text' value={email} onChange={(e)=>setEmail(e.target.value)}  placeholder='Enter Your Email:'/>

//         <input  className='input-text' type='password' value={password} onChange={(e)=>setPassword(e.target.value)}  placeholder='Enter Your Password:'/>

//         <button onClick={collectData} className='btn' type="button"> Sign up</button>

//     </div>
//   );
// };

// export default Signup;import React, { useState } from 'react';
import React, { useState } from 'react';

const Signup = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const collectData = (e) => {
    e.preventDefault(); // Prevent the default form submission behavior
    console.log('Collecting data:', { name, email, password });
    // Add your data collection logic here

    // Refresh the page after data collection
    window.location.reload();
  };

  return (
    <div className='signup'>
      <h1>Register</h1>
      <form onSubmit={collectData}>
        <input
          className='input-text'
          type='text'
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder='Enter Your Name:'
        />
        <input
          className='input-text'
          type='text'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder='Enter Your Email:'
        />
        <input
          className='input-text'
          type='password'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder='Enter Your Password:'
        />
        <button className='btn' type='submit'>
          Sign up
        </button>
      </form>
    </div>
  );
};

export default Signup;