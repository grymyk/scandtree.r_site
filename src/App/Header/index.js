import React from "react";
import {BrowserRouter as Router} from "react-router-dom";
import { NavHashLink as Link } from 'react-router-hash-link';

function Header() {
    return (
        <Router>
            <h1 id="logo">
                <Link smooth to="#about" activeClassName="selected">Scandinavian Tree</Link>
            </h1>
            <div>
                <nav>
                    <ul>
                        <li>
                            <Link smooth to="#about" activeClassName="selected">about</Link>
                        </li>
                        <li>
                            <Link smooth to="#gallery">gallery</Link>
                        </li>
                        <li>
                            <Link smooth to="#reformer">reformer</Link>
                        </li>
                        <li>
                            <Link smooth to="#product">products</Link>
                        </li>
                        <li>
                            <Link smooth to="#contacts">contacts</Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </Router>
    );
}

export default Header;
