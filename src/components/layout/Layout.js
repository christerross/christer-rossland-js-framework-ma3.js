import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
} from 'react-router-dom';
import Container from "react-bootstrap/Container";
import Home from '../home/Home';
import News from '../news/News';
import Login from '../login/Login';

function Layout() {
  return  (
    <Router>
      <Navbar bg="dark" variant="dark" expand="lg">
        <NavLink to="/" exact>
            <Navbar.Brand>JavaScript Frameworks MA3</Navbar.Brand>
        </NavLink>
        <Navbar.Toggle aria-controls="basic-navbar-nav"/>
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
                <NavLink to="/" exact className="nav-link">
                  Home
                </NavLink>
                <NavLink to="/news" className="nav-link">
                  News
                </NavLink>
                <NavLink to="/login" className="nav-link">
                  Login
                </NavLink>
            </Nav>
      </Navbar.Collapse>
    </Navbar>
      <Container>
        <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/news" component={News} />
            <Route path="/login" component={Login} />
        </Switch>
      </Container>
    </Router>
  );
}

export default Layout;