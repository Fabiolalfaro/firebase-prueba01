import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Tareas from './Components/Tareas';

class App extends Component{
  render(){
    return (
      <div className="App">
        
        <Tareas/>
        
          <img src={logo} className="App-logo" alt="logo" />
        
      </div>
    );
  }
    
}

export default App;
