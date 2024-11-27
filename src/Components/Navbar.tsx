import { Navbar,Container } from 'react-bootstrap';
import Logo from '../assets/Logo.png'
import { Link, NavLink } from 'react-router-dom';


const NavbarComponent = () => {
    return (
        <div className="navbar-wrapper">
            <Navbar className="custom-navbar" data-bs-theme="dark">
                <Container>
                    <Navbar.Brand href="#home">
                    <img
                            src={Logo} 
                            alt="Siete Logo" 
                            className='sieteLogo'
                        />
                    </Navbar.Brand>
                </Container>
            </Navbar>
            
            <div className="bottom-bar">
                <Container className="bottom-bar-content">
                    <div className="left-links">
                        <a href="#home" className='navTextLeft'>Home</a>
                        <a href="#home" className='navTextLeft'>Contact Us</a>
                    </div>
                    <div className="right-links">
                        <a href="#home" className='navTextRight'>Dashboard</a>
                        <a href="#home" className='navTextRight'>Login</a>
                    </div>
                    </Container>
            </div>
        </div>
    );
};

export default NavbarComponent;
