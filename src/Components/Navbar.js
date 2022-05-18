import { signOut } from 'firebase/auth';
import React from 'react';
import { Container, Nav } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../firebase.init';

const Navbar = () => {
    const [user, loading, error] = useAuthState(auth);
    const logOut = () => {
        signOut(auth)
    }
    return (
        <Navbar className='navbar sticky-top header' collapseOnSelect expand="lg">
            <Container>
                <Navbar.Brand as={Link} to="/">TO-DO</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mx-auto">
                        <Nav.Link as={Link} to="/">Home</Nav.Link>
                        <Nav.Link as={Link} to='/dashboard'>Dashboard</Nav.Link>
                    </Nav>
                    {/* <Nav>
                        {
                            user
                                ?
                                <Nav.Link onClick={logOut} as={Link} to="/"> Sign Out</Nav.Link>
                                :
                                <Nav.Link as={Link} to="login"> Login</Nav.Link>

                        }
                    </Nav> */}
                </Navbar.Collapse>
            </Container>
        </Navbar >
    );
};

export default Navbar;