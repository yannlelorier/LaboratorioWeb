//librerias ó components
import "./App.css";
import "./index.css";
import React, { useState, useContext, useEffect } from "react";


function App() {
  
  const [date, setDate] = useState(new Date());
  const [seconds, setSeconds] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [hours, setHours] = useState(0);

  
  useEffect(() => {
    let interval = null;
    if (seconds<60) {
      interval = setInterval(() => {
        setSeconds(seconds => seconds + 1);
      }, 1000)
    }
    else if (minutes<60) {
      setMinutes(minutes => minutes + 1);
      setSeconds(0);
    }
    else if (hours<24) {
      setHours(hours => hours + 1);
      setMinutes(0);
      setSeconds(0);
    }

    return () => clearInterval(interval);
    
  });

  useEffect(() => {
    var timerID = setInterval( () => tick(), 1000);
  
    return function cleanup() {
        clearInterval(timerID);
      };
   });
  
     function tick() {
      setDate(new Date());
     }
  
     

  return (
    <div>
      {hours}h-{minutes}m-{seconds}s
      <h2>It is {date.toLocaleTimeString()}.</h2>
      
    </div>
  );
}

export default App;
