import React, { useEffect, useState } from "react";
import { capitalizeFirstLetter } from "../../utils/helpers";
import About from "../../pages/About";
import Resume from "../../pages/Resume";
import Contact from "../../pages/Contact";
import Project from "../Project";

function Nav(props) {
    const { currentCategory } = props;

    const [portfolioSelected, setPortfolioSelected] = useState(false);
    return (
        <main>
            {!portfolioSelected ? (
                <>
                    <About />
                    <Resume />
                    <Contact />
                </>
            ) : (
                <Project />
            )}
        </main>
    );
}

export default Nav;