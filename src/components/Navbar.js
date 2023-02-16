import React, { useState } from "react";

import "./NavbarStyles.css";

function Navbar() {
    return (
        <>
            <div className="navbar">

                <ul className="navbar-items">
                    <li><a className="navbar-link" href="/">Home</a></li>
                    <li className="logo"><a className="navbar-link">Stone Culver</a></li>
                    <li><a className="navbar-link" href="/contact">Contact</a></li>
                </ul>
            </div>
        </>
    )
}

export default Navbar;