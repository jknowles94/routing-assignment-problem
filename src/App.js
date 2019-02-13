import React, { Component } from 'react';
import {BrowserRouter, Route, NavLink, Switch, Redirect} from 'react-router-dom';
import Courses from './containers/Courses/Courses';
import Users from './containers/Users/Users';

class App extends Component {
  render () {
    return (
      <div className="App">
        <BrowserRouter>
          <div>
            <nav>
              <ul>
                <li><NavLink to="/courses">Courses</NavLink></li>
                <li><NavLink to="/users">Users</NavLink></li>
              </ul>
            </nav>
            <Switch>
              <Redirect from="/all-courses" to="/courses"/>
              <Route path="/courses" component={Courses}/>
              <Route path="/users" component={Users}/>
              <Route render={() => <h1>404 Page Not Found</h1>} />
            </Switch>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
