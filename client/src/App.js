import React from 'react';
import './App.css';
import Jobs from './components/jobs';

const jobs=[
  {
    title: "SWE",
    company: "Google"
  },
  {
    title:"SDE-1",
    company: "Amazon"
  }
]

function App() {
  return (
    <div className="App">
      <Jobs jobs={jobs}></Jobs>
    </div>
  );
}

export default App;
