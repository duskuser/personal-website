import React, { useLayoutEffect, useState } from "react";

// Animations
import { TypeAnimation } from "react-type-animation";
import { Fade } from "react-reveal";

// Custom Components
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import ProjectItem from "../components/ProjectItem";

// External Data
import { ProjectData } from "../components/ProjectData";

import { SkillsData } from "../components/SkillsData";

// Custom Styles
import "./HomeStyles.css";

// Size Handling for Type Animation Re-renders

function useWindowSize() {
    const [size, setSize] = useState([0, 0]);
    useLayoutEffect(() => {
        function updateSize() {
            setSize([window.innerWidth, window.innerHeight]);
        }
        window.addEventListener('resize', updateSize);
        updateSize();
        return () => window.removeEventListener('resize', updateSize);
    }, []);
    return size;
}

function Home() {
    React.useEffect(() => {
        document.title = "Homepage | Stone Culver";
    })

    const [width, height] = useWindowSize();

    // Renders

    const renderTypeAnimation = () => {
        if (width <= 850) {
            console.log(width);
            return (
                <>
                    <TypeAnimation
                        sequence={[
                            '', 300, 'Stone Culver', 1500
                        ]}
                        speed={30}
                        cursor={false}
                        style={{
                            fontSize: "3.6rem",
                            fontFamily: 'Source Code Pro',
                            fontWeight: '800',
                            color: "#f7f1e3",
                        }} />

                    <TypeAnimation
                        sequence={[
                            '', 1500, 'Hobbiest',
                            1000, 'Freelancer',
                            1000, 'Web Developer',
                            1000, 'Software Engineer',
                        ]}
                        style={{
                            fontSize: "2rem",
                            fontFamily: 'Source Code Pro',
                            fontWeight: '800',
                            color: "#fff",
                            marginBottom: "48px",
                        }}
                    />
                </>
            )
        } else {
            return (
                <>
                    <TypeAnimation
                        sequence={[
                            '', 300, 'Stone Culver', 1500
                        ]}
                        speed={30}
                        cursor={false}
                        style={{
                            fontSize: "6.4rem",
                            fontFamily: 'Source Code Pro',
                            fontWeight: '800',
                            color: "#f7f1e3",
                        }} />

                    <TypeAnimation
                        sequence={[
                            '', 1500, 'Hobbiest',
                            1000, 'Freelancer',
                            1000, 'Web Developer',
                            1000, 'Software Engineer',
                        ]}
                        style={{
                            fontSize: "3.6rem",
                            fontFamily: 'Source Code Pro',
                            fontWeight: '800',
                            color: "#fff",
                            marginBottom: "48px",
                        }}
                    />
                </>

            )
        }
    }

    const renderMobileImage = () => {
        if (width <= 850) {
            return (
                <div className="hugs-image">
                    <img src="images/hugs.png" alt="hearts unite logo"></img>
                </div>
            )
        }
    }

    const renderDesktopImage = () => {
        if (width > 850)
            return (
                <div className="hugs-image">
                    <img src="images/hugs.png" alt="hearts unite logo"></img>
                </div>
            )

    }

    // Prevents elements which depend on width attribute from loading incorrectly

    if (width === 0) {
        return <></>
    }

    return (
        <>
            <div className="home">
                <Navbar />
                <div className="home-header">

                    <div className="home-header-text">

                        {renderTypeAnimation()}
                        <Fade>
                            <p>Stone Culver is an American Software Engineer from Michigan currently
                                living between southern Finland and the West Coast of the US. </p>
                            <p>He is the lead full-stack web developer for Hearts Unite to Give Support and has been programming professionally since 2022.</p>
                            <p>Scroll Down to Learn More</p>
                        </Fade>
                    </div>
                </div>

                <div className="home-description">

                    <div className="projects-section">
                        <div className="current-section">
                            <Fade>
                                <h1 className="main-section-header">Professional Experience</h1>
                            </Fade>

                            <Fade bottom>
                                <div className="hugs-container">
                                    <div className="hugs-text">
                                        <h1 className="experience-header highlight">Hearts Unite to Give Support</h1>
                                        {renderMobileImage()}
                                        <h2 className="experience-date">2022-Current</h2>
                                        <h2 className="experience-languages">Fullstack Web Developer</h2>
                                        <h2 className="experience-languages highlight">Javascript: React, Express, MongoDB</h2>
                                        <p>Since 2022 I have worked as the sole web developer, designer, and engineer for Hearts Unite to Give Support, a non-profit based out of Nevada.</p>
                                        <p>The website is built using React, Express, and MongoDB, as well as other smaller but noteworthy modules and frameworks, such as Mailgun for email routing, and AWS for server hosting. During this project, I dedicated a lot of time
                                            to creating a smooth and unique user experience, as well as optimizing the back-end to run as efficently as humanly possible.</p>

                                        <a href="https://hearts-unite.com" className="link-button hugs-link">Click to View Website</a>
                                    </div>

                                    {renderDesktopImage()}

                                </div>
                            </Fade>
                        </div>

                        <div className="past-section">

                            <div className="trijicon-section">
                                <h1 className="experience-header highlight">Trijicon Inc.</h1>
                                <h2 className="experience-date">2022</h2>
                                <h2 className="experience-languages">Subcontract Work</h2>
                                <h2 className="experience-languages highlight">C++</h2>
                                <p>In 2022 I was contacted to do sub-contract work for Trijicon Inc.</p>
                                <p>I designed a simple program for tracking changes between outputted .dat CAD files.</p>

                                <a href="https://github.com/duskuser/file-comparison-tool" className="link-button hugs-link">Click to View Code</a>
                            </div>

                            <div className="freelance-section">
                                <h1 className="experience-header highlight">Freelance Work</h1>
                                <h2 className="experience-date">2022</h2>
                                <h2 className="experience-languages">Freelance</h2>
                                <h2 className="experience-languages highlight">C/C++, Java, Javascript, Python, Etc.</h2>
                                <p>During the middle of 2022 I ocassionally completed Freelance projects on the side.</p>
                                <p>Often these projects were simple python scripts, or debugging help for users in need.</p>

                                <a href="https://github.com/duskuser/" className="link-button hugs-link">Click to View Github</a>
                            </div>


                        </div>
                    </div>

                    <div className="projects-section">
                        <Fade>
                            <h1 className="main-section-header">Personal Projects</h1>
                            <h3 className="highlight">(Contact Me If You're Interested in Learning More!)</h3>
                        </Fade>

                        <ul className="projects-list">
                            {ProjectData.map((item, index) => {
                                return (
                                    <Fade bottom delay={(index * 150)}>
                                        <ProjectItem title={item.title} language={item.language} date={item.date} />
                                    </Fade>

                                )
                            })}
                        </ul>
                    </div>

                    <div className="education-section">
                        <Fade>
                            <h1 className="main-section-header">Education</h1>
                        </Fade>

                        <div className="education-flexbox">

                            <div className="formal-section">
                                <Fade>
                                    <h1 className="main-section-header">Formal</h1>
                                </Fade>

                                <Fade left delay={150}>
                                    <div className="education-container">
                                        <h1 className="highlight">Highschool Diploma (I.T Specialization)</h1>
                                        <h2>Pennfoster Highschool</h2>
                                        <h2>Graduated October 2018</h2>
                                    </div>
                                </Fade>
                            </div>

                            <div className="informal-section">
                                <Fade>
                                    <h1 className="main-section-header">Courses Completed</h1>
                                </Fade>

                                <ul className="courses-list">
                                    <Fade right delay={150}>
                                        <li>
                                            <h2>Beginning C++ Programming</h2>
                                        </li>
                                    </Fade>

                                    <Fade right delay={150}>
                                        <li>
                                            <h2>Data Structure & Algorithms using C++</h2>
                                        </li>
                                    </Fade>

                                    <Fade right delay={150}>
                                        <li>
                                            <h2>Creational Design Patterns in Modern C++</h2>
                                        </li>
                                    </Fade>

                                    <Fade right delay={150}>
                                        <li>
                                            <h2>Structural Design Patterns in Modern C++</h2>
                                        </li>
                                    </Fade>

                                    <Fade right delay={150}>
                                        <li>
                                            <h2>Detecting Memory Leaks in C/C++ Applications</h2>
                                        </li>
                                    </Fade>

                                    <Fade right delay={150}>
                                        <li>
                                            <h2>Multithreading with Modern C++</h2>
                                        </li>
                                    </Fade>

                                    <Fade right delay={150}>
                                        <li>
                                            <h2>Masterclass TCP/IP Mechanics</h2>
                                        </li>
                                    </Fade>

                                    <Fade right delay={150}>
                                        <li>
                                            <h2>Arduino Programming and Hardware Fundamentals</h2>
                                        </li>
                                    </Fade>

                                    <Fade right delay={150}>
                                        <li>
                                            <h2>SQL for Data Analytics and Business Intelligence</h2>
                                        </li>
                                    </Fade>
                                </ul>
                            </div>
                        </div>

                        <div className="languages-section">
                            <Fade>
                                <h1 className="main-section-header">Programming Languages & Skills</h1>
                            </Fade>

                            <div className="languages-flexbox">
                                <div className="languages-container">
                                    <h1 className="main-section-header">Languages</h1>
                                    <ul className="languages-list">
                                        <Fade bottom delay={150}>
                                            <li>
                                                <h1 className="highlight">Proficent With</h1>
                                                <h3>C/C++, Python, C#, Javascript, HTML, CSS</h3>
                                            </li>
                                        </Fade>

                                        <Fade bottom delay={150}>
                                            <li>
                                                <h1 className="highlight">Experience Using</h1>
                                                <h3>XAML, Java, Rust, MySQL, SQLite</h3>
                                            </li>
                                        </Fade>

                                        <Fade bottom delay={150}>
                                            <li>
                                                <h1 className="highlight">Familiarity With</h1>
                                                <h3>x86 Assembly, Ruby</h3>
                                            </li>
                                        </Fade>
                                        
                                    </ul>
                                </div>

                                <div className="skills-container">
                                    <h1 className="main-section-header">Skills</h1>
                                    <ul className="skills-list">
                                        {SkillsData.map((item, index) => {
                                            return (
                                                <Fade delay={(index * 150)}>
                                                    <li key={index}>
                                                        <h1 className="highlight">{item.title}</h1>
                                                        <ul>
                                                            {item.content.map((entry, entryIndex) => {
                                                                return (
                                                                    <Fade delay={(index * 150)}>
                                                                        <li>
                                                                            <h3>{entry}</h3>
                                                                        </li>
                                                                    </Fade>
                                                                )
                                                            })}
                                                        </ul>
                                                    </li>
                                                </Fade>
                                            )
                                        })}
                                    </ul>
                                </div>



                            </div>
                        </div>


                        <div className="description-section">
                            <Fade>
                                <h1 className="main-section-header">A Bit About Me...</h1>
                            </Fade>


                            <div className="general-section">

                                <div className="general-text">
                                    <h1 className="main-section-header highlight">Hi!</h1>
                                    <h2>My name is Stone Culver, I'm a self-taught American programmer based out of Lahti, Finland.</h2>

                                    <p>I was born and raised in Michigan until the age of 18, when I decided to move to Finland.
                                        It's a very long story how it all came to be, but ultimately I ended up staying here and building my life here in Finland.
                                        I still have a home in America to go back to, as well as full American citizenship with rights to work in both countries.
                                        I've been working professionally as a software engineer since 2022 both doing various freelance projects, as well as professional full-stack web development.</p>

                                    <p>I currently live alone with my dog Pepper, a rescue dog from Romania whom I got in early 2021. In my sparetime, I play and write music on bass guitar & electric guitar, cook, bake, read, and exercise 4-5 times a week.
                                        I'm also a fairly obsessive learner, so I've always got something new I'm trying to wrap my head around.
                                        I am currently studying the Finnish language daily and will be attempting to take a language exam to secure Finnish citizenship at the end of 2023.</p>

                                    <p>As for programming, my favorite languages are C/C++ and I have a undying admiration for working in low level languages, in general. I do however have professional experience working in a large range
                                        of languages from Python to C and am capable of learning any language thrown my way relatively quickly. In Web Development, I like to think my strong suit is thinking of UX and providing the best experience
                                        for a customer no matter what their age group and experience with electronics may be. I put a lot of thought and care into optimizing the positionings and sizings of elements, as well as making sure that the backend
                                        can run as efficently as possible.</p>

                                    <h2 className="highlight">Thanks for Stopping By!</h2>
                                </div>

                                {/* <div className="image-wrapper">
                                    <img className="general-image" src="/images/stone-guitar.png"></img>
                                </div> */}
                            </div>
                        </div>

                        <div className="contact-section">
                            <Fade>
                                <h1 className="main-section-header">Interested In Working Together?</h1>
                            </Fade>
                            <div className="contact-container">
                                <h1 className="highlight">Get in Touch</h1>
                                <p>If you're interested in my resume, or otherwise would like to be in touch, please follow the link below for my contact information!</p>
                                <p>I am currently looking for full time employment and am interested in all aspects of software engineering.</p>
                                <a href="/contact" className="link-button">Contact Me</a>
                            </div>
                        </div>
                    </div>


                </div>

                <Footer />
            </div>
        </>
    )
}

export default Home;