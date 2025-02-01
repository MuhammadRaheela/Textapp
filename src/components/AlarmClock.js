import React, { useState, useEffect } from 'react';

export default function DigitalClock() {
  const [timer, setTime] = useState(new Date().toLocaleTimeString());

  // Update the time every second
  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);

    return () => clearInterval(timer); // Cleanup the timer on unmount
  }, []);

  return (
    <>

    <div className='box'>

        {timer}
    </div>
    </>
  )
}
