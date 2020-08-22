import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Home } from './components/Home';
import { NavbarMain } from './components/Navbar';
import { Footer } from './components/Footer';
import { Support } from './components/Support';
import { LoadWallet } from './components/LoadWallet';
import './style.css';

// Add major routes to this file. If you have sub-routes, you can have a <Switch> component in your page component
// example: https://github.com/KMPARDS/timeally-tsx/blob/1d96743746bbfe8c332a3ba0e58b7ebe56c53ca3/src/components/Stakings/Stakings.tsx
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavbarMain />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/support" component={Support} />
          <Route path="/load-wallet" component={LoadWallet} />
        </Switch>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
