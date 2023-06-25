import './App.css';
import React, { useState } from 'react'
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import About from './components/About';
import Alert from './components/Alert';

import {
  BrowserRouter,
  Route,
  Routes,
} from 'react-router-dom';



function App() {

  // const [Alert, setAlert] = useState(null)

  // const showalert = (message, type) =>{
  //   setAlert({
  //     msg: message,
  //     type:type
  //   })
  // }



  const [mode, setMode] = useState('light')

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      console.log("ha re bhaii.....")
    }
    else {
      setMode('light');
    }
  }
  return (
    <>
      <BrowserRouter>

        <Navbar />
        {/* <Alert /> */}

        <div className="container my-3">
          <Routes>
            
              <Route exact path="/Home" element={<Textform heading=" Enter your text to analyse" mode={mode} togglemode={toggleMode} />}/>

              <Route exact path="/About" element={<About />}/>
             
            </Routes>
        </div>
      </BrowserRouter>
    </>

  );
}

export default App;
