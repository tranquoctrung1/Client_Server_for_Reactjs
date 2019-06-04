import React from 'react';
import './App.sass';

import TopMenu from './component/TopMenu.js';
import Product from './pages/Product.js';

import { BrowserRouter as Router, Route} from "react-router-dom";

function Index() {
  return <h2>Home</h2>;
}

function App() {
  return (
    <div className="App">
      <TopMenu/>
      <Router>
        <div>
          <Route path="/" exact component={Index} />
          <Route path="/product/" component={Product} />
        </div>
      </Router>
    </div>
  );
}

export default App;
