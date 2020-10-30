import React from 'react';
import {motion} from 'framer-motion'
import img from '../images/image.jpg'
import facebook from '../assets/icons/facebook.svg';
import instagram from '../assets/icons/instagram.svg';
import github from '../assets/icons/github.svg';
import pin from '../assets/icons/pin.svg';
import tie from '../assets/icons/tie.svg';
import resume from '../assets/Resume of Fakrul islam _2.pdf'


const Sidebar = () => {
    const handleEmail = () => {
        window.open("mailto:fakrulislamtanvin1@gamil.com")
    }
    const sidebar_variant = {
        hidden: {
            x: '-20vh',
        },
        visible: {
            x: 0,
            transition: {
                delay: 0.1, duration: 0.5, type: 'spring'
            }
        }

    }
    const handleGithub = () => {
        window.open("https://github.com/tanvin71")
    }
    
    return (
        <motion.div className="sidebar"
            variants={sidebar_variant}
            initial="hidden"
            animate="visible"
        >
            <img src={img} alt="mine" className="sidebar-image"/>
            <div className="sidebar-name sidebar-item ">Fakrul <span>Islam</span> </div>
            <div className="sidebar-item sidebar-title">Web Developer</div>
            <a href={resume} download="resume.pdf">
                <div className="sidebar-item sidebar-resume">
                    <img src={tie} alt="resume" className="sidebar-icon"/>Download Resume
                </div>
            </a>
            <figure className="sidebar-icons my-2">
                <a href="https://www.linkedin.com/in/fakrul-tanvin/"><img src={facebook} alt="facebook" className="sidebar-icon mr-3"/></a>
                <a href=""><img src={instagram} alt="instagram" className="sidebar-icon"/></a>
            </figure>
            <div className="sidebar-contact">
                <div className="sidebar-item sidebar-github">
                    <a  onClick={handleGithub }href=""><img src={github} alt="github" className="sidebar-icon mr-3"/>Github</a>
                </div>
                <div className="sidebar-location">
                    <img src={pin} alt="location" className="sidebar-icon mr-3"/>
                    Noakhali,Bangladesh.
                </div>
                <div className="sidebar-item">fakrulislatanvin1@gmail.com</div>
                <div className="sidebar-item">+8801831297143</div>
            </div>
            <div className="sidebar-item sidebar-email" onClick={handleEmail}>Email me</div>
        </motion.div>
    );
};

export default Sidebar;