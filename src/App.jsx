// React
import React, { Fragment } from "react";
// Styles
import "./assets/css/normalize.css";
import "./assets/sass/main.scss";
// Components
import Header from "./components/containers/Header";
import Landing from "./components/containers/Landing";
import WhatIsGPT3 from "./components/containers/WhatIsGPT3";
import Features from "./components/containers/Features";
import Banner from "./components/containers/Banner";

export default function App() {
    return (
        <Fragment>
            <Header />
            <Landing />
            <WhatIsGPT3 />
            <Features />
            <Banner />
        </Fragment>
    );
}
