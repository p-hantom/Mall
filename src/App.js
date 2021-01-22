import React from 'react'
import { Route, Switch } from 'react-router-dom';

import './App.css';
import Layout from './hoc/Layout/Layout'
import Login from './components/Login/Login'
import IndexPage from './components/IndexPage/IndexPage'
import SearchResult from './components/SearchResult/SearchResult'
import ProductDetail from './components/ProductDetail/ProductDetail';
import Cart from './components/Cart/Cart'
import Footer from './components/Footer/Footer'
import SignUp from './components/SignUp/SignUp'
import ConfirmOrder from './components/ConfirmOrder/ConfirmOrder'

function App() {
  const LayoutRouter = (
    <Layout>
      <Switch>
        <Route path="/searchResult" component={SearchResult} />
        <Route path="/detail" component={ProductDetail} />
        <Route path="/cart" component={Cart} />
        <Route path="/confirmOrder" component={ConfirmOrder} />
        <Route path="/" component={IndexPage} />
      </Switch>
      <Footer />
    </Layout>
  )
  return (
      <Switch>
        <Route path="/login" component={Login} />
        <Route path="/SignUp" component={SignUp} />
        <Route path="/" render={ props => LayoutRouter} />
      </Switch>
  );
}

export default App;
