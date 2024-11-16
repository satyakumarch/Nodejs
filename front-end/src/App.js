// import Nav from './Nav.js';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <Nav />
//       <h1>E-commerce</h1>
//       <h1>Hello Satya, Welcome to Node.js with React simple project.</h1>
//     </div>
//   );
// }

// export default App;
import React from 'react';
import Nav from './Nav.js';
import './App.css';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Nav />
        <h1>E-commerce</h1>
      </BrowserRouter>
    </div>
      
  );
}

export default App;