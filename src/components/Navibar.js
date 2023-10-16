import React, { Fragment, useState } from 'react';
import {Link} from "react-router-dom";
import './Navbar.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRightLong, faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import logo from "../logo.png";

function NavigationBar() {
    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    return (
        <>
            <nav className="navbar">
                <div className="navbar-container">

                    <Link className="navbar-logo" to='/'>
                        <img src={logo} alt='logo' width={80} height={80} />
                    </Link>
                </div>
            </nav>
        </>
    )
}

export default NavigationBar;