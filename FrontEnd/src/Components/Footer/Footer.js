import React from "react";

import "./Footer.css"

const Footer = () => {
    return (
        <div className="footer">
            <div>
                <h2>NASA Official Website</h2>
                <p>
                    The National Aeronautics and Space Administration is America’s civil space
                    program and the global leader in space exploration.<br></br>
                    NASA.gov brings you the latest news, images and videos from America's space agency, pioneering the
                    future in space exploration, scientific
                    discovery and aeronautics research
                </p>
                <a href="https://www.nasa.gov/" target="_blank">
                    <p className="tag">NASA</p>
                </a>
                <a href="https://www.nasa.gov/about/highlights/HP_Privacy.html" target="_blank" >
                    <p className="tag">Privacy & Policy</p>
                </a>
            </div>
        </div>
    );
};

export default Footer;