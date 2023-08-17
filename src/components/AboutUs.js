/**
 * File: FileName.js
 * Created by: John Doe (@johndoe) on August 16, 2023
 * Contributors:
 *   - Jane Smith (@janesmith) - Added search functionality
 *   - Robert Johnson (@robertjohnson) - Implemented weather display
 * Last Modified: August 20, 2023
 */
import React from 'react';
import {Link} from "react-router-dom";

function AboutUs() {
    return (
        <div>
            <nav>
                <ul>
                    <li><strong>About Us</strong></li>
                </ul>
                <ul>
                    <li><Link to={`/`}>Home</Link></li>
                    <li><Link to={`/contact`}>Contact</Link></li>
                </ul>
            </nav>
        </div>
    );
}

export default AboutUs;

// TODO: Implement ContactUs component -> check https://picocss.com/#examples for inspiration
