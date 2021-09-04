import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Home() {
  const [seconds, setSeconds] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [hours, setHours] = useState(0);

  useEffect (() => {
    let interval = null;
    if (seconds < 60) {
      interval = setInterval(() => {
        setSeconds(seconds + 1);
      }, 1000)
    }else if (minutes < 60) {
      setMinutes(minutes + 1)
      setSeconds(0);
    }else if (hours < 24) {
      setHours(hours + 1);
      setMinutes(0);
      setSeconds(0);
    }

    return () => clearInterval(interval);
  }, [seconds, minutes, hours]);

  return (
    <div>
        <h2>Home</h2>
        <h3>A timer for your convenience</h3>
        <h2>{hours}h - {minutes}min - {seconds}s</h2>
      </div>
    );
  }
  
  function About() {
    const [employees, setEmployees] = useState([{id:0, name:"Will"}]);
    const onClick = () => {
      setEmployees([...employees, {id:employees.length, name:"Yann"}])
    }
    var dataComponent = {
      type:"button",
      value:"Update"
    }

    return (
      <div>
        <h2>About</h2>
        <h3>Our employees</h3>
        <input onClick={onClick} {...dataComponent}/>
        <div>
          {employees.map((e) => (
            <div>
              {e.id} - {e.name}
            </div>
          ))}
        </div>
      </div>
    );
  }

function Dashboard() {
  return (
    <div>
      <h2>Dashboard</h2>
    </div>
  );
}

//TODO why this doesnt work
function Parameters() {

return (
  <div>
    <h2>Parameters Test</h2>
    <h3>No params were passed</h3>
  </div>
);
}
  
  function ParametersID() {
      const { id } = useParams();

    return (
      <div>
        <h2>Parameters Test</h2>
        <h3>The parameter that was passed is {id}</h3>
      </div>
    );
  }

export {Home,About,Dashboard,Parameters, ParametersID} ;
