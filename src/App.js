import Navbar from './components/Navbar';
import Footer from './footer';
import TextForm from './components/TextForm';
import { useState } from 'react';
import React from 'react';




function App() {
  const [mode, setMode] = useState('light')

  


  const togglemode = () =>{
    if(mode === 'light'){
      setMode('dark')
      document.body.style.backgroundColor = 'yellow'

    }else{
      setMode ('light')
      document.body.style.backgroundColor = 'white'


    }
  }
  return (
    <>
      <Navbar title="TEXT___M|R"  togglemode={togglemode} />
        <TextForm heading="World of words..."/>
      <Footer/>

      
    </>
  );
}

export default App;
