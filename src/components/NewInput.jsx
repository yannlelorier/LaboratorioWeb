import React from "react";

function Home() {
    return (
      <div>
        <h2>Home</h2>
        <h3>A clock for your convenience</h3>
      </div>
    );
  }
  
  function About() {
    var dataComponent = {
      type:"button",
      value:"Update"
    }

    return (
      <div>
        <h2>About</h2>
        <h3>Our workers</h3>
        <input {...dataComponent}/>
      </div>
    );
  }
  
  function Dashboard() {
    return (
      <div>
        <h2>Dashboard</h2>
        <h3>a Timer! For your convenience</h3>
      </div>
    );
  }

export {Home,About,Dashboard} ;
