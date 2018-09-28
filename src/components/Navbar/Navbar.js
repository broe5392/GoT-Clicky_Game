import React from "react";
import "./Navbar.css";

const Navbar = props => <nav className="navbar">
    <ul>
        <li className="navbar-brand">GoT CLICKY GAME</li>
        <li>{props.message}</li>
        <li>Score: {props.score} | High Score: {props.highScore}</li>
    </ul>
</nav>


export default Navbar;