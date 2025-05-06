import React from 'react';
import { Navbar, Nav, Container, Button } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import Cookies from "js-cookie"

const AppNavbar = () => {
  const { user, loggedOutUser } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    Cookies.remove('user')
    Cookies.remove('token')
    await loggedOutUser()
    navigate('/login');    
  };

  return (
    <Navbar bg="dark" variant="dark" expand="lg" sticky="top">
      <Container>
        <Navbar.Brand as={Link} to="/dashboard">Task Manager</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse>
          {user && (
            <Nav className="me-auto">
              <Nav.Link as={Link} to="/dashboard">Dashboard</Nav.Link>
              <Nav.Link as={Link} to="/tasks">Tasks</Nav.Link>
              <Nav.Link as={Link} to="/tasks/create">Create Task</Nav.Link>
            </Nav>
          )}
          <Nav className="ms-auto">
            {user ? (
              <>
                <Navbar.Text className="me-2">Signed in as <strong>{user.name}</strong></Navbar.Text>
                <Button variant="outline-light" size="sm" onClick={handleLogout}>Logout</Button>
              </>
            ) : (
              <>
                <Nav.Link as={Link} to="/login">Login</Nav.Link>
                <Nav.Link as={Link} to="/register">Register</Nav.Link>
              </>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default AppNavbar;
