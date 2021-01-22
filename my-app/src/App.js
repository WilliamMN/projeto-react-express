import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Login from './user/login/Login'
import Cadastro from './user/signup/Cadastro'
import Home from './home/home/Home'
import Search from "./contas/search/Search"
import Create from "./contas/create/Create"
import Delete from "./contas/delete/Delete"
import Edit from "./contas/edit/Edit"

function App() {
  return (
    <React.StrictMode>
    <BrowserRouter>
      <Switch>
        <Route exact path={["/", "/login"]} component={Login}/>
        <Route exact path="/signup" component={Cadastro}/>
        <Route exact path="/home" component={Home}/>
        <Route exact path="/contas/search" component={Search}/>
        <Route exact path="/contas/create" component={Create}/>
        <Route exact path="/contas/delete" component={Delete}/>
        <Route exact path="/contas/edit" component={Edit}/>
      </Switch>
    </BrowserRouter>
  </React.StrictMode>
  );
}

export default App;
