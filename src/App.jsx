import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Menu from './components/menu/Menu';
import Log from './components/profile/Log';

import Home from './components/home/Home';
import Shop from './components/shop/Shop';

import SignIn from './components/profile/signin/SignIn';
import SignUp from './components/profile/signup/SignUp';
import Map from './components/Map/Map';

function App() {
  return (
    <div className="App">
      <Router>
        <Menu />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/map">
            <Map />
          </Route>
          <Route exact path="/profile">
            <Log />
          </Route>
          <Route exact path="/signIn">
            <SignIn />
          </Route>
          <Route exact path="/signUp">
            <SignUp />
          </Route>
          <Route exact path="/shop">
            <Shop />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
