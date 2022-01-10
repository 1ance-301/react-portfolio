import React, { useEffect, useState } from "react";
import About from "../../pages/About";
import Resume from "../../pages/Resume";
import Contact from "../../pages/Contact";
import Project from "../Project";

function Nav(props) {
    const { currentCategory } = props;

    return (
       <>
        <About />
        <Project />
        <Resume />
        <Contact />
       </>
    );
}

export default Nav;