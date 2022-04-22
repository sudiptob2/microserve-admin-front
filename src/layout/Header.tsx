import { useKeycloak } from '@react-keycloak/web';
import React from 'react';
import { Button, Container, Navbar } from 'react-bootstrap';

const Header: React.FC = () => {
  const { keycloak } = useKeycloak();
  return (
    <>
      <Navbar bg="light">
        <Container>
          <Navbar.Brand href="#home">Microserve Admin Front</Navbar.Brand>
          {!keycloak.authenticated && (
            <Button onClick={() => keycloak.login()} >Login</Button>
          )}
          {keycloak.authenticated && (
            <Button onClick={() => keycloak.logout()} >Logout</Button>
          )}
        </Container>
      </Navbar>
    </>
  )
}

export default Header
