import React from "react";

function Resume() {
    return (
        <div>
            <a href="../assets/resume/Lance Bontrager Resume.pdf">
                Download My Resume
            </a>
            <ul className="front-end">
                <h2>Front End Proficiencies</h2>
                <li>- React</li>
                <li>- jQuery</li>
                <li>- Html</li>
                <li>- CSS</li>
                <li>- JavaScript</li>
            </ul>
            <ul className="back-end">
                <h2>Back End Proficiencies:</h2>
                <li>- Express</li>
                <li>- MongoDB</li>
                <li>- MySQL</li>
                <li>- Node.js</li>
            </ul>
        </div>
    );
}

export default Resume;