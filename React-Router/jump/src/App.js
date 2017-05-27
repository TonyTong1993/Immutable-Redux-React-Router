import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router,Route,Link,Switch,Redirect} from 'react-router-dom';
const About = ()=>{
  return (
    <div>
      <h4>About me</h4>
    </div>
    )
}
const Home = ()=>{
  return (
    <div>
      <h4>Home</h4>
      <button>

      </button>
    </div>
    )
}
const Settings = ()=>{
  return (
    <div>
      <h4>Settings</h4>
    </div>
    )
}
class App extends Component {
  render() {
    return (
      <Router>
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
          <button><Link to="/home">home</Link></button>
          <button><Link to="/about">about</Link></button>
          <button><Link to="/settings">settings</Link></button>
         
         
        <Switch>
           <Route path="/home" component = {Home} />
           <Route path="/about" component = {About} />
           <Route path="/settings" component = {Settings} />
        </Switch>

      </div>
      </Router>
    );
  }
}

export default App;
