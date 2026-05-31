import React from "react";
import { Link } from "react-router-dom"; //I imported the Link component from react-router-dom to create navigation links in my NavBar component. The Link component allows for client-side routing without full page reloads, which makes the navigation smoother and faster.

export const NavBar = () => { //This is my third component named  NavBar, which is a functional component that doesn't take any props. It returns a navigation bar that contains links to different pages of my website (Home, Menu, About, Contact). The Link component from react-router-dom is used to create these links, allowing for client-side routing without full page reloads.

    return (

        <nav className="navbar navbar-expand-sm navbar-light bg-light"> 

            <Link
                className="navbar-brand"  //Its is a bootstrap class makes "The Yummy Bite" looks like a brand name for my small bussiness and it is usually used for the logo of the website.
                to="/"  //Means that when I click on it goes to home page
            > 
                <img
                    src="/logo.jpeg" //I put the logo of my website in the public folder and I called it logo.jpeg .
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
};//Note :I named it with 4 classes of bootstrap ,the name "navbar" tells bootstrap that this is a navigation bar, "navbar-expand-sm" makes the navbar responsive and collapses it on small screens, "navbar-light" and "bg-light" are used to style the navbar with a light background and dark text.
// the class "m-2" is a bootstrap class that adds margin to the left and right of the link.
// the "/" means that when I click on it goes to home page.