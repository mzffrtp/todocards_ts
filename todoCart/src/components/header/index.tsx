import * as React from 'react';
import { Container, Navbar } from 'react-bootstrap';



const Header: React.FunctionComponent = () => {
  return (
    <Navbar bg="light" variant="light" className='d-flex justify-content-center align-items-center border-bottom border-3 border-warning'>
        <Container className='d-flex justify-content-center'>
            <Navbar.Brand>
                <p>💡 Note Cards 📝</p>
            </Navbar.Brand>
        </Container>
    </Navbar>
  );
};

export default Header;
