import logo from './logo.svg';
import './App.css';
import Home from './component/Home';
import Post from './component/postapi';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <Switch>
            <Route path="/">
              <Home />
            </Route>
            <Route path="/post">
              <Post />
            </Route>
          </Switch>
        </div>
      </Router>

    </div>
  );
}

export default App;
