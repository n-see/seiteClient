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
            
            <div>
                <Container>
                    <div >
                        <Link to={"/"} >Home</Link>
                        <Link to={"/contact"} >Contact Us</Link>
                    </div>
                    <div >
                        <Link to={'/dashboard'} >Dashboard</Link>
                        <Link to={'/login'} >Login</Link>
                    </div>
                    </Container>
            </div>
        </div>
    );
};

export default NavbarComponent;
