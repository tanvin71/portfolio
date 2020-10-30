import React from 'react';
import github from '../assets/icons/github.svg'

const ProjectCard = ({project:{name, image,deployed_url,github_url}}) => {
    return (
        <div className="projectCard col-md-6 col-lg-4 my-2">
            <figure className="projectCard-wrapper">
                <a href={deployed_url} target="_blank">
                    <img src={image} alt={name}className="projectCard-image"/>
                </a>
                <div className="projectCard-title">
                    <a href={github_url} target="_blank">
                        <img src={github} alt="github-link" className="projectCard-icon mr-2"/>
                    </a>
                    {name}
                </div>
            </figure>
        </div>
    );
};

export default ProjectCard;