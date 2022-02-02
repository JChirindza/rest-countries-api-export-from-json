import React from "react";

const Header = () => {
    return (
        <>
            <header className="header">
                <div className="container">
                    <ul>
                        <div className="item item-left">
                            <li>
                                <a className="nav-logo" href="/">
                                    <i className="fas fa-globe"></i>{" "}
                                    <span>World Countries</span>
                                </a>
                            </li>
                        </div>
                        <div className="item item-right">
                            <li>
                                <a href="#">
                                    <i className="fas fa-search"></i>{" "}
                                    <span>Search</span>
                                </a>
                            </li>
                            <li>
                                <a
                                    href="https://github.com/JChirindza/rest-countries-api-export-from-json-react"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    <i className="fab fa-github"></i>{" "}
                                    <span>Github repo</span>
                                </a>
                            </li>
                        </div>
                    </ul>
                </div>
            </header>
        </>
    );
};

export default Header;
