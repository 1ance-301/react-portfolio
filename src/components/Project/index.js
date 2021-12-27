import React from "react";

function Project() {
    return (
        <div>
            <h2>Portfolio</h2>
            <div className="work">
                <article id="main-project" className="projects">
                    <span className="project-name">
                        <a href="https://1ance-301.github.io/run-buddy/">Run Buddy</a>
                        <p>Html/CSS</p>
                    </span>
                </article>
                <article id="horiseon-project" className="projects">
                    <span className="project-name">
                        <a href="https://1ance-301.github.io/Horiseon">Horiseon</a>
                        <p>Html/CSS</p>
                    </span>
                </article>
                <article id="robot-gladiators-project" className="projects">
                    <span className="project-name">
                        <a href="https://1ance-301.github.io/robot-gladiators/">Robot Gladiators</a>
                        <p>Html/JavaScript</p>
                    </span>
                </article>
                <article id="weather-dashboard-project" className="projects">
                    <span className="project-name">
                        <a href="https://1ance-301.github.io/weather-dashboard/">Weather Dashboard</a>
                        <p>jQuery/Bootstrap</p>
                    </span>
                </article>
                <article id="where2watch-project" className="projects">
                    <span className="project-name">
                        <a href="https://saadsyed98.github.io/Where2Watch/">Where2Watch</a>
                        <p>Axios/jQuery/Normalize</p>
                    </span>
                </article>
                <article id="recipe-rendezvous" className="projects">
                    <span className="project-name">
                        <a href="https://sleepy-beach-41817.herokuapp.com/">Recipe Rendezvous</a>
                        <p>MySQL/Sequelize/MVC</p>
                    </span>
                </article>
            </div>
        </div>
    );
}

export default Project;