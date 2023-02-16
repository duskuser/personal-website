import React from "react";

import "./FooterStyles.css";
import { FooterData } from "./FooterData";

function Footer() {

    return (
        <>
            <div className="footer">
                <div>
                    <h1>Stone Culver</h1>
                </div>

                <ul className="footer-lists">
                    {FooterData.map((item, index) => {
                        return (
                            <li key={index}>
                                <h3 className="list-label">{item.title}</h3>
                                <ul className="internal-footer-list">
                                    {item.links.map((internalItem, internalIndex) => {
                                        return (
                                            <li key={index}>
                                                <a href={internalItem.url} className={internalItem.cName}>
                                                    <i className={internalItem.icon}></i> {internalItem.title}
                                                </a>
                                            </li>
                                        )
                                    })
                                    }
                                </ul>
                            </li>
                        )
                    })
                    }
                </ul>
                <div>
                    <p className="bottom-text">Website Made With Love by Stone Culver using React and Express <i className="fa-regular fa-heart" i /></p>
                </div>
            </div>
        </>
    )
}

export default Footer;