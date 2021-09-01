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
    
      interval = setInterval(() => {
        setSeconds(setSeconds(
          if(seconds < 59) {
            seconds => seconds + 1;
          }else if () {
            seconds => 0;
            setMinutes(minutes => minutes + 1);
          }
        ), 1000);
    
    return () => clearInterval(interval);
  });

  useEffect(() => {
    let interval = null;
    
      interval = setInterval(() => {
        setMinutes(minutes => minutes<59? minutes + 1 : 0);
      }, 6000);
    
    return () => clearInterval(interval);
  });

  useEffect(() => {
    let interval = null;
    
      interval = setInterval(() => {
        setHours(hours => hours + 1);
      }, 360000);
    
    return () => clearInterval(interval);
  });



  useEffect(() => {
    var timerID = setInterval( () => tick(), 1000 );
  
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
