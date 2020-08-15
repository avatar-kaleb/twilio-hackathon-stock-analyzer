import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.scss';
import Navigation from './components/Navigation';
// pages
import StockAnalyzer from './pages/StockAnalyzer';

const App = () => {

  return (
    <Router>
      <Navigation></Navigation>
      <div className="app-content">
        <Switch>
          <Route path="/about">
            {/* <About /> */}
            <div>about</div>
          </Route>
          <Route path="/stock-analyzer">
            <StockAnalyzer />
          </Route>
          <Route path="/">
            <div>home</div>
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;
