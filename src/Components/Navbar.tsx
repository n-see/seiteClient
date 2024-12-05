import { Navbar,Container } from 'react-bootstrap';
import Logo from '../assets/Logo.png'
import { Link, NavLink } from 'react-router-dom';


const NavbarComponent = () => {
    return (
        <div className="navbar-wrapper">
            <Navbar className="custom-navbar" data-bs-theme="dark">
                <Container>
                    <NavLink to={'/'}>
                    <img
                            src={Logo} 
                            alt="Siete Logo" 
                            className='sieteLogo'
                        />
                    </NavLink>
                </Container>
            </Navbar>
            
            <div className="bottom-bar">
                <Container className="bottom-bar-content">
                    <div className="left-links">
                        <Link to={'/'} className='navTextLeft'>Home</Link>
                        <Link to={'/Contact'} className='navTextLeft'>Contact Us</Link>
                    </div>
                    <div className="right-links">

                        <Link to={'/Dashboard'} className='navTextRight'>Dashboard</Link>
                        <Link to={"Login"} className='navTextRight'>Login</Link>

                    </div>
                    </Container>
            </div>
        </div>
    );
};

export default NavbarComponent;
