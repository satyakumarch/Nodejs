// this is the main component of the application
import React from 'react';
import Nav from './Components/Nav.js';
import './App.css';
import { BrowserRouter ,Routes,Route} from 'react-router-dom';
import Footer from './Components/Footer.js';
import Signup from './Components/Signup.js';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<h1>Product Listing compement</h1>}/>
          <Route path='/Add' element={<h1>Add Product component</h1>}/>
          <Route path='/update' element={<h1>update product compement</h1>}/>
          <Route path='/logout' element={<h1>logout component</h1>}/>
          <Route path='/profile' element={<h1>profile component</h1>}/>
          <Route path='/Signup' element={<Signup/>}/>
        </Routes>
      </BrowserRouter>
      <Footer/>
    </div>
      
  );
}

export default App;