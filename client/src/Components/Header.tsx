import React from "react";
import "../Styles/Header.scss";


function Header() {
    return (
        <header>
            <div className="header">
                <div className="logo">
                    Gym Programer
                </div>
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact</li>
                    <li>Shop</li>
                </ul>
            </div>
        </header>
    )
}

export default Header;
