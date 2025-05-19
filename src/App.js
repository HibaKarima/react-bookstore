import { Routes , Route} from 'react-router-dom';
import './App.css';
import Home from './Pages/Home';
import Shop from './Pages/Shop';
import Header from './Components/Header/Header';
import Cart from './Pages/Cart';
import Login from './Pages/Login/Login';
import PlaceOrder from './Pages/PlaceOrder';
import { ClipLoader } from "react-spinners";
import React,{ useEffect, useState } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Recommendations from './Components/Recommendations';
import Result from './Components/Result';

function App() {

  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 3000);
    return () => clearTimeout(timer);
  }, []);
  return (
    
<>
      {loading ? (
        <div className='position-absolute d-flex flex-column justify-content-center align-items-center' style={{transform:'translate(-50%,-50%)',top:'50%',left:'50%', color:'var( --color-txt-hover)'}}>
        <ClipLoader size={100} color={"var( --color-txt-hover)"} />
        <h3 className='text-center'>Welcome to MY SPHERE website</h3>
        <p className='text-center'>We Won`t Keep You Waiting Long</p>
        </div>
      ) : (<main className="overflow-hidden ">
        <Header/>
        <Routes>
       <Route path='/' element={<Home/>}/>
        <Route path='/shop' element={<Shop/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/place-order' element={<PlaceOrder/>}/> 
        <Route path="/recommendations" element={<Recommendations />} />
        <Route path="/result" element={<Result />} />
      </Routes>
      <ToastContainer 
  autoClose={5000}
  hideProgressBar={false}
  newestOnTop={true}
  rtl={true}
  pauseOnFocusLoss
  draggable
  pauseOnHover/>
        </main>
      )}

     

</>
  );
}

export default App;
