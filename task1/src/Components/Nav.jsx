import React from "react";
import '../Styles/NavStyles.scss'
import {Link} from "react-router-dom";


const Nav = function (){

    return(
        <div className="navbar">
            <div className="container">
                <h2 className="logo">
                    <Link className="logo-nav" to="/matvey"> LOGO</Link>
                </h2>
                <ul className="menu">
                    <li className="menu-link">
                        <Link className="link-nav" to="/">Home</Link>
                    </li>
                    {/*<li className="menu-link">*/}
                    {/*    <Link className="link-nav" to="/login">Login</Link>*/}
                    {/*</li>*/}
                    <li className="menu-link">
                        <Link className="link-nav" to="/news">News</Link>
                    </li>
                    <li className="menu-link">
                        <Link className="link-nav" to="/login">Profile</Link>
                    </li>

                </ul>
            </div>

        </div>

    )

}


export default Nav;