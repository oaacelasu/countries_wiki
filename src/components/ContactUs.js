/**
 ** File: ContactUs.js
 * Created by: Priyanka Bhosle on August 16, 2023
 * Contributors:
 *   - Priyanka Bhosle (#Pbhole6396@conestogac.on.ca)
 *
 * Last Modified: August 17, 2023
 */

 import React from "react";
 import { Link } from "react-router-dom";
 import Footer from "./Footer";
 
 function ContactUs() {
   return (
     <div className="container">
       <header className="header">
         <nav>
           <ul>
             <li>
               <strong>Contact Us</strong>
             </li>
           </ul>
           <ul>
             <li>
               <Link to={`/`}>Home</Link>
             </li>
             <li>
               <Link to={`/about`}>About</Link>
             </li>
           </ul>
         </nav>
       </header>
 
       <h2 className="text-center">Contact Us</h2>
       <p>
         Please feel free to reach out to us if you have any questions, feedback,
         or inquiries. We'd love to hear from you!
       </p>
 
       <div className="contact-form">
         <form>
           <div className="form-group">
             <label htmlFor="name">Name</label>
             <input type="text" id="name" name="name" required />
           </div>
           <div className="form-group">
             <label htmlFor="email">Email</label>
             <input type="email" id="email" name="email" required />
           </div>
           <div className="form-group">
             <label htmlFor="message">Message</label>
             <textarea id="message" name="message" rows="4" required />
           </div>
           <button type="submit" className="btn btn-primary">
             Submit
           </button>
         </form>
       </div>
       <Footer />
     </div>
   );
 }
 
 export default ContactUs;
 