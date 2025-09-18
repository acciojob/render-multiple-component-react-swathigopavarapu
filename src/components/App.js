import React, {Component, useState} from "react";
import '../styles/App.css';

const App = () => {
  const projects = [
    {
      name: "Fleet Management System",
      description: "A system to track and manage vehicles, drivers, and trips."
    },
    {
      name: "Food Delivery App",
      description: "A web app that connects restaurants with customers for fast delivery."
    },
    {
      name: "Health Records System",
      description: "A platform to store and manage patient health records securely."
    }
  ];
  return (
    <div id="main">
      {projects.map((project, index) => (
        <div key={index}>
          <h1 data-ns-test="project-name">{project.name}</h1>
          <p data-ns-test="project-description">{project.description}</p>
        </div>
      ))}
    </div>
  )
}


export default App;
