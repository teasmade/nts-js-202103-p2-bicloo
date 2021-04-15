
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Menu from './components/menu/Menu';
import Profile from './components/profile/Profile';
import SignUpLogin from './components/profile/SignUpLogin';
import Home from './components/home/Home';
import './style/App.css';


function App() {
  return (
    <div className="App">
      <Router>
        <Menu />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/login">
            <div className="mainSection">Hello Login</div>
          </Route>
          <Route exact path="/map">
            <div className="mainSection">Hello Map</div>
          </Route>
          <Route exact path="/profile">
            <Profile />
            <SignUpLogin />
          </Route>
          <Route exact path="/shop">
            <div className="mainSection">Hello Shop</div>
          </Route>
        </Switch>
      </Router>
      <div className="footer">cool</div>
    </div>
  );
}

export default App;
