import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Menu from './components/menu/Menu';
import UserChoice from './components/menu/UserChoice';
import Profile from './components/profile/Profile';

import Home from './components/home/Home';
import Shop from './components/shop/Shop';

import SignIn from './components/profile/signin/SignIn';
import SignUp from './components/profile/signup/SignUp';
import Map from './components/Map/Map';
import AuthContext from './firebase/AuthContext';
import ForgotPassword from './components/profile/ForgotPassword';
import FirstLog from './components/Firstlog/FirstLog';

function App() {
  const [isUserChoiceExpended, setIsUserChoiceExpended] = useState(false);
  const [firstLogUser, setFirstLogUser] = useState(true);

  useEffect(() => {
    if (firstLogUser) {
      setTimeout(() => {
        setFirstLogUser(false);
        localStorage.setItem('alreadyLogged', true);
      }, 4000);
    }
  });

  return (
    <div className="App">
      {firstLogUser && !localStorage.getItem('alreadyLogged') ? (
        <FirstLog />
      ) : (
        <AuthContext>
          <Router>
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
              <Route exact path="/forgot-password">
                <ForgotPassword />
              </Route>
              <Route exact path="/shop">
                <Shop />
              </Route>
            </Switch>
            <UserChoice
              isUserChoiceExpended={isUserChoiceExpended}
              closeUserChoicePopup={() => setIsUserChoiceExpended(false)}
            />
            <Menu
              isUserChoiceExpended={isUserChoiceExpended}
              clickOnUser={() => {
                setIsUserChoiceExpended(!isUserChoiceExpended);
              }}
            />
          </Router>
        </AuthContext>
      )}
    </div>
  );
}

export default App;
