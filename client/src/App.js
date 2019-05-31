import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Landing from './components/layout/Landing';
import Login from './components/auth/Login';
import './App.css';

const App = () => (
  <Router>
    <Fragment>
      <Navbar />

      <Route exact path='/' component={Landing} />

      <section className='container'>
        <switch>
          <Route exact path='/login' component={Login} />
        </switch>
      </section>
    </Fragment>
  </Router>
);

export default App;
