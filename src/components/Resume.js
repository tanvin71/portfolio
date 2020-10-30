import React from 'react';
import react from '../assets/icons/react.svg';
import python from '../assets/icons/python.svg'
import Bar from './Bar'
import {motion} from "framer-motion"


const languages = [ 
    {
        icon: react,
        name:'React',
        level: '80'
    },
    {
        icon: python,
        name:'Javascript',
        level: '70'
    },
    {
        icon: react,
        name:'Firebase',
        level: '70'
    },
    {
        icon: react,
        name:"Mongodb",
        level: '90'
    },
    {
        icon: react,
        name:"Bootstrap",
        level: '90'
    },
]

const tools = [
    {
        icon: react,
        name:'Chrome dev tool',
        level: '85'
    },
    {
        icon: react,
        name:'VScode',
        level: '90'
    },
    {
        icon: react,
        name:'Figma',
        level: '80'
    },
]
const resume_variant = {
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
const Resume = () => {
    return (
        <motion.div className="container resume"
            variants={resume_variant}
            initial="hidden"
            animate="visible"
            exit="exit"
        >
            <div className="row">
                <div className="col-lg-6 resume-languages">
                    <div className="resume-language-heading">
                        Language and Framework
                    </div>
                    <div className="resume-language-body mt-3">
                        {
                            languages.map(language => 
                                <Bar value={language}></Bar>)
                        }
                    </div>
                </div>
                <div className="col-lg-6 resume-languages">
                    <div className="resume-language-heading">
                        Tools and Software
                    </div>
                    <div className="resume-language-body mt-3">
                        {
                            tools.map(tool => <Bar value={tool}></Bar>)
                        }
                    </div>  

                </div>
            </div>
            <div className="row">
                <div className="col-lg-6 resume-card">
                    <h4 className="resume-card-heading">
                        Eduction
                    </h4>
                    <div className="resume-card-body">
                        <h5 className="resume-card-body">
                            Higher Secondary Certificate
                        </h5>
                        <p className="resume-card-name">
                           Noakhali goverment college
                        </p>
                        <p className="resume-card-details">
                            I am a lerner of web developer.
                        </p>
                    </div>

                </div>
                 <div className="col-lg-6 resume-card">
                    <h4 className="resume-card-heading">
                        Experience
                    </h4>
                    <div className="resume-card-body">
                        <h5 className="resume-card-title">
                            Course
                        </h5>
                        <p className="resume-card-name">
                            MERN  Stack web developer
                        </p>
                        <p className="resume-card-details">
                           I am a lerner of web developer.
                        </p>
                    </div>

                </div>
            </div>
        </motion.div>
    );
};

export default Resume;