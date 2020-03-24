import React from 'react';
import FunctionalComponent from './components/functional/FunctionalComponent';
import ClassComponent from './components/classes/ClassComponent';
import './App.css';

function App() {
  return (
    <div className="App">
    <FunctionalComponent />
    <ClassComponent />
    </div>
  );
}

export default App;
