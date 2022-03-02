import React, { useState } from 'react';
import { Navbar, Nav, Button, Container } from 'react-bootstrap';
import Title from '../styles/Title.module.css';
import Login from './api/Login';
import Link from 'next/link';
import LoginModal from './api/LoginModal';


const MainTitle = () => {
    const Name = "Level Zero";
    const [LoginOn, setLoginOn] = useState(false);

    return (
        <>
            <LoginModal
                onShow={LoginOn}
                onHide={() => setLoginOn(false)}
            />

            <div>
                <Navbar bg="light" expand="xl">
                    <h4><Navbar.Brand href="/">{Name}</Navbar.Brand></h4>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ml-auto">
                            <div className={Title.MainMenu}><Link href="/">Home</Link></div>
                            <div className={Title.MainMenu}><Link href="/Script/Community">Community</Link></div>
                        </Nav>
                    </Navbar.Collapse>
                    <Nav className="mr-auto">
                        <Button variant="primary" onClick={() => setLoginOn(true)} >Login</Button>
                    </Nav>
                </Navbar>
            </div>
        </>
    )
}

export default MainTitle;

/*         
        <div>
            <div className={Title.MainBar}>
                {Name}
            </div>           

            <div className={Title.MainMenu}><li><Link href="/">Home</Link></li></div>
            <div className={Title.MainMenu}><li><Link href="/Script/Community">Community</Link></li></div>
            <div className={Title.MainMenuRight}><Login/></div>

            <br></br><br></br>
        </div>      */


/*
<>
<LoginModal onShow={LoginOn} onHide={() => setLoginOn(false)} />

<header>
    <Navbar bg="light" expand="xl">
        <h4><Navbar.Brand href="/">{Name}</Navbar.Brand></h4>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
                <Nav.Link href="/">Home</Nav.Link>
                <Nav.Link href="/Script/Community">Community</Nav.Link>
            </Nav>
        </Navbar.Collapse>
        <Nav className="mr-auto">
            <Button variant="primary" onClick={() => setLoginOn(true)} >Login</Button>
        </Nav>
    </Navbar>
</header>
</>        
*/