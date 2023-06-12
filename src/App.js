


import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Shop from './pages/Shop'
import Login from './pages/Login';
import Signup from './pages/Signup';
import Product from './pages/Product';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';


function App() {
  return (
    <Routes>
      <Route path="/" element= {<Home/>}></Route>
      <Route path="/about" element= {<About/>}></Route>
      <Route path="/shop" element= {<Shop/>}></Route>
      <Route path="/signup" element= {<Signup/>}></Route>
      <Route path="/login" element= {<Login/>}></Route>
      <Route path="/product" element= {<Product/>}></Route>
  
    </Routes>



  
  );
}

export default App;
