import React from 'react';
import SignUp from './components/SignUp/SignUp';
import {BrowserRouter, Route, Switch} from "react-router-dom"
import SignIn from './components/SignIn/SignIn';

function App() {
  return (
    <>
    <BrowserRouter> 
    <Route path="/register" component={SignUp}/>
    <Route path="/login" component={SignIn}/>
    </BrowserRouter>
    </>
  );
}

export default App;
