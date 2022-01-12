import React, { useEffect, useState } from "react";
import About from "../../pages/About";
import Resume from "../../pages/Resume";
import Contact from "../../pages/Contact";
import Portfolio from "../../pages/Portfolio";


function Nav(props) {
    const { currentCategory } = props;

    return (
       <>
        <About></About>
        <Portfolio></Portfolio>
        <Resume></Resume>
        <Contact></Contact>
       </>
    );
}

export default Nav;