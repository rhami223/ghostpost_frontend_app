import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import AllPosts from './components/AllPosts'
import Boast from './components/Boast'
import Roast from './components/Roast'
import Score from './components/Score'
import AddPost from './components/AddPost'

export default function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/roast">Roast</Link>
            </li>
            <li>
              <Link to="/boast">Boast</Link>
            </li>
            <li>
              <Link to="/score">Score</Link>
            </li>
            <li>
              <Link to="/addpost">Add Post</Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/addpost">
            <AddPost />
          </Route>
          <Route path="/boast">
            <Boast />
          </Route>
          <Route path="/roast">
            <Roast/>
          </Route>
          <Route path="/score">
            <Score/>
          </Route>
          <Route path="/">
            <AllPosts/>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

