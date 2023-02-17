import React from "react";

export default function NavBar({navRef, pageSectionsRef}) {
    return (
        <nav ref={navRef}>
            <div ref={pageSectionsRef} className="website-sections">
                <a href="#what-is">What Is GPT-3?</a>
                <a>Open AI</a>
                <a href="#features">case studies</a>
                <a>library</a>
            </div>
            <div className="sign-btns">
                <button>Sign in</button>
                <button className="orange-btn">Sign up</button>
            </div>
        </nav>
    );
}
