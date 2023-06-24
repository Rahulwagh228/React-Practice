import './App.css';
import React, { useState } from 'react'
import Navbar from './components/Navbar';
import Textform from './components/Textform';
// import About from './components/About';
import Alert from './components/Alert';


function App() {

  // const [Alert, setAlert] = useState(null)

  // const showalert = (message, type) =>{
  //   setAlert({
  //     msg: message,
  //     type:type
  //   })
  // }



  const [mode, setMode] = useState('light')

  const toggleMode = () =>{
    if(mode === 'light'){
      setMode('dark');
      console.log("ha re bhaii.....")
    }
    else{
      setMode('light');
    }
  }
  return (
    <>
      <Navbar rahnar="vishw" link="w3school" />
        <Alert/>

      <div className="container my-3">
        <Textform heading=" Enter your text to analyse"  mode = {mode} togglemode = {toggleMode} />

        {/* <About/> */}

      </div>
    </>

  );
}

export default App;
