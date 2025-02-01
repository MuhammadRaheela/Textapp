import Navbar from './components/Navbar';
import Footer from './footer';
import TextForm from './components/TextForm';
// import DigitalClock from './components/AlarmClock';
// import About from './components/About';
import { useState } from 'react';
import React from 'react';
import Alert from './components/Alert';




function App() {
  const [mode, setMode] = useState('light')
  const [alert, setAlert] = useState(null)

  const showAlert =(message, type)=>{
   setAlert({
    msg: message,
    type:type
    })
  }


  const togglemode = () =>{
    if(mode === 'light'){
      setMode('dark')
      document.body.style.backgroundColor = '#577657'
      showAlert("Dark mode has been Enable","sucess")

    }else{
      setMode ('light')
      document.body.style.backgroundColor = 'white'
      showAlert("Light mode has been Enable","sucess")


    }
  }
  return (
    <>
      <Navbar title="OK" About="About" mode={mode} togglemode={togglemode} />
      <Alert Alert={alert}/>
      <div className="container my-3" >
        <TextForm heading="Enter the text analyze below" />
      </div>
      <Footer />









      {/* 
    <div>
      <DigitalClock />
    </div> */}
      {/* <About /> */}

    </>
  );
}

export default App;
