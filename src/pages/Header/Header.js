import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { HashLink } from 'react-router-hash-link';
import useFirebase from '../../hooks/useFirebase/useFirebse';

const Header = () => {
  const { SignOut, user } = useFirebase();
    return (
        <div>
    <Navbar bg="dark" variant="dark" fixed="top" >
    <Container>
    <Navbar.Brand href="#home">Hospital</Navbar.Brand>
      <Nav className="me-auto">
          <Nav.Link as={HashLink} to="/home#home">Home</Nav.Link>
          <Nav.Link as={HashLink} to="/contact#home">Contact Us</Nav.Link>
          
     </Nav>
            <Navbar.Toggle />
            
            <Navbar.Collapse className="justify-content-end">
            {user?.email?
                <Nav.Link as={HashLink} to="/login" onClick={SignOut}>LogOut</Nav.Link> 
                :
                <Nav.Link as={HashLink} to="/login">Login { user.displayName}</Nav.Link> 
          }

            <Navbar.Text>                    
                Signed in as: <a href="#login">{user?.displayName}</a>                  
                        </Navbar.Text> 
              
    </Navbar.Collapse>
    </Container>
  </Navbar>
        </div>
    );
};

export default Header;