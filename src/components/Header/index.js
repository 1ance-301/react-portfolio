import React, { useState, useEffect } from "react";
import About from "../../pages/About";
import Contact from "../../pages/Contact";
import Resume from "../../pages/Resume";
import { capitalizeFirstLetter } from "../../utils/helpers";
import Nav from "../Nav";
import Project from "../Project";

function Header() {
    const [categories] = useState([
        {
            name: 'About Me'
        },
        {
            name: 'My Portfolio'
        },
        {
            name: 'My Resume'
        },
        {
            name: 'Contact Me'
        }
    ]);

    const [currentCategory, setCurrentCategory] = useState(categories[0]);

    useEffect(() => {
        document.title = capitalizeFirstLetter(currentCategory.name);
    }, [currentCategory]);
    
    return (
        <div>
            <header>
                <a href="/">
                    Lance Bontrager
                </a>
                <nav>
                    <ul className="flex-row">
                        {categories.map((category) => (
                            <li
                                className={`mx-1 ${currentCategory.name === category.name && `navActive`
                                    }`}
                                key={category.name}
                            >
                                <span
                                    onClick={() => {
                                        setCurrentCategory(category);
                                    }}
                                >
                                    {capitalizeFirstLetter(category.name)}
                                </span>
                            </li>
                        ))}
                    </ul>
                </nav>
            </header>
            <main>
                <Nav />
            </main>
        </div>
    );
}

export default Header;