import './App.css';
import Nav from './Header/Nav';
import About from './Dashboard/About';
import Shop from './CommingSoon/Shop';
import Login from './Authentication/Login'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

const App = () => {

  return (
    <Router>
      <div className="App">
        <Nav />
        <Login/>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" exact component={About} />
          <Route path="/shop" component={Shop} />
        </Switch>
      </div>
    </Router>
  );
};

const Home = () => (
  <div>
    <h1>Home</h1>
  </div>
);

export default App;

