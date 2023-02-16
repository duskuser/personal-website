import React from "react";


function ProjectItem(props) {
    return (
        <>
            <li className="project-item">
                <div>
                    <h1 className="highlight">{props.title}</h1>
                    <h2>{props.date}</h2>
                    <h2>{props.language}</h2>
                </div>
            </li>
        </>
    )
}

export default ProjectItem;