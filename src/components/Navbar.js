import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import {motion} from 'framer-motion';

const Navbar = () => {
    const [active, setActive] = useState('');

    useEffect(() => {
        let currentURL = window.location.href;
        console.log(currentURL);
        if(currentURL.endsWith('/'))
        setActive('About');
        else if(currentURL.endsWith('/projects'))
        setActive('Projects')
        else if(currentURL.endsWith('/resume'))
        setActive('Resume')
        else if(currentURL.endsWith('/contact'))
        setActive('Contact')
    },[active])
    const navbar_variant = {
        hidden : {
            y:'-30vh',
            opacity: 0
        },
        visible: {
            y: 0,
            opacity: 1,

        }
    }
    const handleBlog = () => {
        window.open("https://medium.com/@fakrultanvin320/the-most-important-things-of-javascript-for-a-new-learner-490d7ddf8f72")
    }

    return (
        <motion.div className="navbar"
            variants = {navbar_variant}
            initial = 'hidden'
            animate="visible"
        >
            <div className="navbar-active">
                {active}
            </div>
            <div className="navbar-items">
                {active !== 'About' &&
                  <Link to="/">
                    <div className="navbar-item" onClick={() => setActive('About')}>About</div>
                  </Link>
                }

                {active !== 'Resume' ?
                    <Link to="resume">
                       <div className="navbar-item" onClick={() => setActive('Resume')}>Resume</div> 
                     </Link>: null
                }
                {active !== 'Projects'  &&
                <Link to="/projects">
                    <div className="navbar-item" onClick={() => setActive('Projects')}>Projects</div>
                </Link>
                 }
                 {active !== 'Contact' ?
                <Link to="/contact">
                    <div className="navbar-item" onClick={() => setActive('Contact')}>Projects</div>
                </Link>: null
                 }
                 <button onClick={handleBlog} className="btn btn-primary">My blogs</button>
                
                
            </div>
            
        </motion.div>
    );
};

export default Navbar;