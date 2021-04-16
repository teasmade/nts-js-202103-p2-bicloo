import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Menu from './components/menu/Menu';
import Profile from './components/profile/Profile';

import Home from './components/home/Home';
import Shop from './components/shop/Shop';

import Footer from './components/footer/Footer';
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
            <Profile />
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
      <Footer />
    </div>
  );
}

export default App;
