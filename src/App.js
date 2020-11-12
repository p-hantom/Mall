import React from 'react'
import { Route, Switch } from 'react-router-dom';

import './App.css';
import Layout from './hoc/Layout/Layout'
import Login from './components/Login/Login'
import IndexPage from './components/IndexPage/IndexPage'

function App() {
  return (
    <Layout>
      <Switch>
        <Route path="/login" component={Login} />
        <Route path="/" component={IndexPage} />
      </Switch>
    </Layout>
  );
}

export default App;
