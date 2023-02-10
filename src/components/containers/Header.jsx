// React
import React, { useRef } from "react";
// Logo
import logo from "../../assets/images/logo.svg";
// NavBar component 
import NavBar from "../children/NavBar";

export default function Header() {
    const toggleSideBar = useRef();
    const nav = useRef();
    const pageSections = useRef();

    function toggleClick() {
        toggleSideBar.current.classList.toggle("clicked");
        nav.current.classList.toggle("open");
        pageSections.current.classList.toggle("open");
    }

    return (
        <header>
            <div className="container">
                <a href="#" className="logo">
                    <img src={logo} alt="GPT-3" />
                </a>
                <NavBar pageSectionsRef={pageSections} navRef={nav} />
                <button
                    ref={toggleSideBar}
                    className="toggle"
                    onClick={toggleClick}
                >
                    <div></div>
                    <div></div>
                    <div></div>
                </button>
            </div>
        </header>
    );
}
