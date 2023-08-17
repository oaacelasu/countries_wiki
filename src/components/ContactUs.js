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

function ContactUs() {
    return (
        <div>
            <header className="container">
                <nav>
                    <ul>
                        <li><strong>Contact Us</strong></li>
                    </ul>
                    <ul>
                        <li><Link to={`/`}>Home</Link></li>
                        <li><Link to={`/about`}>About</Link></li>
                    </ul>
                </nav>
            </header>
        </div>
    );
}

export default ContactUs;


// TODO: Implement ContactUs component -> check https://picocss.com/#examples for inspiration,

