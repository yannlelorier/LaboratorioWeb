//librerias ó components
import "./App.css";
import "./index.css";
import React, { useState, useEffect } from "react";
import NewInput from "./components/NewInput";

function App() {
  
  const [users, setUsers] = useState([{ id: 0, name: "Ruben" }]);

  const onClick = () => {
    //... := spread notation
    setUsers([...users, {id:users.length, name:"Yann"}])
  };

  const [date, setDate] = useState(new Date());
  const [seconds, setSeconds] = useState(0)

  useEffect (() => {
    var timerID = setInterval(() => tick(), 1000);

    //limpiando los threads
    return function cleanup(params) {
      clearInterval(timerID)
    }
  });

  useEffect (() => {
    let interval = null;

    interval = setInterval(() => {
      setSeconds(seconds => seconds + 1);}, 1000);

      return function cleanup(params) {
        clearInterval(seconds)
      }
  })

  function tick() {
    setDate(new Date())
  }

  // de aqui heredan todos los componentes que los usen
  var dataComponent = {
    type:"button",
    value:"Update"
  };

  return (
    <div>
      {/* primero trata de renderear date */}
      <h1>{seconds}</h1>
      <h1>{date.toLocaleTimeString()}</h1>
      {/* otro spread notation */}
      <NewInput onClick={onClick} {...dataComponent} />
      <div>
        {users.map((e) => (
          <div>
            {e.id} - {e.name}
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
