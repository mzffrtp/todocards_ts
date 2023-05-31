import * as React from 'react';
import { Container, Navbar } from 'react-bootstrap';



const Header: React.FunctionComponent = () => {
  return (
    <Navbar bg="light" variant="light" className='d-flex justify-content-center align-items-center border-bottom border-3 border-warning'>
        <Container className='d-flex justify-content-center'>
            <Navbar.Brand>
                <p className='my-2 shadow-lg rounded fs-3 fw-bolder text-info text-opacity-75'>💡 Note Cards 📝</p>
            </Navbar.Brand>
        </Container>
    </Navbar>
  );
};

export default Header;
