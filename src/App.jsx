import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/">
            <h1>Hello Home</h1>
          </Route>
          <Route exact path="/login">
            <h1>Hello Login</h1>
          </Route>
          <Route exact path="/map">
            <h1>Hello Map</h1>
          </Route>
          <Route exact path="/profile">
            <h1>Hello Profile</h1>
          </Route>
          <Route exact path="/shop">
            <h1>Hello Shop</h1>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
