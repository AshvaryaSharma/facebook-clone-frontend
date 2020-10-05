import React from 'react';
import logo from './logo.svg';
import './Facebook.css';
import Header from './Component/Sections/Header';
import Container from './Component/Sections/Container';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom"
import Login from './Pages/Login';

function App() {
  return (
   <Router>
      <div className="facebook">
      <Switch>
       
        <Route path="/login">
          <Login />
        </Route>
         <Route path="/">
          <Header />
          <Container />
        </Route>
      </Switch>
    </div>
   </Router>
  );
}

export default App;
