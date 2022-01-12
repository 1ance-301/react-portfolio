import React, { useState, useEffect } from "react";
import { capitalizeFirstLetter } from "../../utils/helpers";

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
                    <ul>
                        {categories.map((category) => (
                            <li
                                className={`${currentCategory.name === category.name && `navActive`
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
        </div>
    );
}

export default Header;