import React from 'react';
import computer from'../assets/icons/computer.svg';
import repair from'../assets/icons/repair.svg';
import algo from '../assets/icons/algo.svg';
import backend from'../assets/icons/backend.svg';
import puzzle from'../assets/icons/puzzle.svg';
import api from '../assets/icons/api.svg'
import SkillCard from './SkillCard';
import {motion} from "framer-motion"

const skills =[
    {
        icon:computer,
        title: "Frontend Development",
        about:"I can build a beautiful and scalable SPA using React.js, Firebase, Mongodb"
    },
    {
        icon:repair,
        title: "Backend Development",
        about:" Handle database, server, api using and SQlite"
    },
    {
        icon:api,
        title: "API Development",
        about:"I can develop robust REST API using django-rest-api"
    },
    {
        icon:algo,
        title: "Computer Coder",
        about:"A daily problem solver in MackerRank and Leetcode"
    },
    {
        icon: puzzle,
        title: "UI/UX designer",
        about:"Minimalistic user interface designer using figma and framer"
    },
    {
        icon:computer,
        title: "Others ",
        about:" I am very passionate to do new thing by learning"
    },

]
const about_variant = {
    hidden: {
        opacity: 0
    },
    visible: {
        opacity: 1,
        transition: {
            delay: 0.2, duration: 0.6,
        }
    },
    exit: {
        opacity: 0,
        transition: {
            ease: 'easeInOut'
        }
    }
}

const About = () => {
    return (
        <div className="about"
            variants={about_variant}
            initial="hidden"
            animate="visible"
            exit="exit"
        >
            <h6 className="about-intro">I describe myself as someone who's persistance, a quick and loves problem solving by using simple and scalable solution  </h6>
            <div className="container about-container">
                <div className="about-heading">What I Offer</div>
                <div className="row">
                    {
                        skills.map(skill=> 
                           <SkillCard skill={skill}></SkillCard>
                            )
                    }
                </div>
            </div>
        </div>
    );
};

export default About;