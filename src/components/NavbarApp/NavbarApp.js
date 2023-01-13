import React from 'react'
import './NavbarApp.css';
import images from '../images/images';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import {Link} from 'react-router-dom'

export const NavbarApp = () => {
  return (
    <div>
      <Navbar className='navbar' bg="dark" variant="dark">
        <Container>
          <Navbar.Brand className='brand' href="/">
            <img
              src={images.img1}
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{' '}
            MORTAL KOMBAT
          </Navbar.Brand>
        </Container>
        <Nav className='link'>
            <Nav.Link><Link className='navlink' to='/history'>Historia</Link></Nav.Link>
            <Nav.Link><Link className='navlink' to='/characters'>Personajes</Link></Nav.Link>
            <Nav.Link><Link className='navlink' to='/games'>Juegos</Link></Nav.Link>
            <Nav.Link><Link className='navlink' to='/'>Inicio</Link></Nav.Link>
          </Nav>
      </Navbar>
    </div>

  )
}
