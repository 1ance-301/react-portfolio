import React from 'react';
import coverImage from "../assets/cover/profile-pic.jpeg";

function About() {
    return (
        <section className="my-5">
            <img src={coverImage} className="my-2" style={{ width: "100%" }} alt="cover" />
            <h1 id="about">About Me</h1>
            <div className="my-2">
                <p>
                    I am a full stack web developer. I am 20 years old and live in Indiana. I have experience in both front and back end development. Although I have not had a job requiring these skills, I am ready and willing to put my all into expanding my knowledge and experience. I am also looking to work in a city and willing to relocate given the time.
                </p>
            </div>
        </section>
    );
}

export default About;