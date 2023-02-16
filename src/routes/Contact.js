import React from "react";

// Custom Components
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

// Custom Styles
import "./ContactStyles.css";

export default function Contact() {
    return (
        <>
            <div className="contact">
                <Navbar />
                <div className="contact-header">
                    <h1 className="main-section-header">Where To Find Me</h1>
                    <h2 className="highlight">For More Specific Information, Please Contact Me!</h2>

                    <div className="contact-items">
                        <div className="email">
                            <h2>Email</h2>
                            <p>stoneculver727@gmail.com</p>
                        </div>

                        <div className="social-media">
                            <div className="github">
                                <h2>Github</h2>
                                <a href="https://github.com/duskuser" className="link-button">Click to View</a>
                            </div>
                        </div>

                        <div className="social-media">
                            <div className="github">
                                <h2>Instagram</h2>
                                <a href="https://www.instagram.com/duskuser/" className="link-button">Click to View</a>
                            </div>
                        </div>
                    </div>
                </div>

                <Footer />

            </div>
        </>
    )
}