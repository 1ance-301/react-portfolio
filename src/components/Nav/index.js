import React, { useEffect, useState } from "react";
import { capitalizeFirstLetter } from "../../utils/helpers";
import About from "../../pages/About";
import Resume from "../../pages/Resume";
import Contact from "../../pages/Contact";
import Project from "../Project";
import { BrowserRouter, Route, Switch } from "react-router-dom";

function Nav(props) {
    const { currentCategory } = props;

    const [portfolioSelected, setPortfolioSelected] = useState(false);
    return (
        <BrowserRouter>
            <Switch>
                <Route component={About} path='/about' />
                <Route component={Project} path='/project' />
                <Route component={Resume} path='/resume' />
                <Route component={Contact} path='/contact' />
            </Switch>
        </BrowserRouter>
    );
}

export default Nav;