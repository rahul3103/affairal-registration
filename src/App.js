import React, { Component } from 'react';
import Registration from './components/registration';
import AdminPage from './components/adminpage';
import Event from './components/event';
import User from './components/user';
import EventList from './components/eventlist';
import EventPreview from './components/eventpreview'
import { BrowserRouter as Router, Route, NavLink }from 'react-router-dom';

class Routes extends Component {
  
  render() {
    return (
      <Router>
      <div>
        <header className="header-basic">
          <div className="header-limiter">
            <h1><NavLink exact to="/">Affairal</NavLink></h1>
            <nav>
              <NavLink activeClassName="selected" exact to="/">Sign Up</NavLink>
              <NavLink activeClassName="selected" exact to="/event">Create Event</NavLink>
              <NavLink activeClassName="selected" exact to="/users">Admin Page</NavLink>
              <NavLink activeClassName="selected" exact to="/eventlist">Events List</NavLink>
            </nav>
          </div>
        </header>
        <Route exact path="/" component={Registration} />
        <Route exact path="/users/:id" component={User} />
        <Route exact path="/users" component={AdminPage} />
        <Route exact path="/event" component={Event} />
        <Route exact path="/eventlist/:id" component={EventPreview} />
        <Route exact path="/eventlist/edit/:id" component={Event} />
        <Route exact path="/eventlist" component={EventList} />
      </div>
      </Router>
    );
  }
}

export default Routes;
