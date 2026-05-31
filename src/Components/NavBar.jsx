import React from "react";
import { Link } from "react-router-dom";

export const NavBar = ({}) => {

    return (

        <nav className="navbar navbar-expand-sm navbar-light bg-light">

            <Link
                className="navbar-brand"
                to="/"
            >
                <img
                    src="/logo.jpeg"
                    alt="Logo"
                    className="logo"
                />
            </Link>

            <div>

                <Link className="m-2" to="/">
                    Home
                </Link>

                <Link className="m-2" to="/menu">
                    Menu
                </Link>

                <Link className="m-2" to="/about">
                    About
                </Link>

                <Link className="m-2" to="/contact">
                    Contact
                </Link>

            </div>

        </nav>

    );
};