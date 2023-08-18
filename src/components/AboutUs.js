/**
 * File: AboutUs.js
 * Created by: Priyanka Bhosle on August 16, 2023
 * Contributors:
 *   - Priyanka Bhosle (#Pbhole6396@conestogac.on.ca)
 *
 * Last Modified: August 17, 2023
 */
import React from "react";
import { Link } from "react-router-dom";
import "../css/About.css";
import Footer from "../components/Footer";
import image1 from "../images/simplistic-user-icon-3.png";
import image2 from "../images/willoy-purple-user-icon.png";
import image3 from "../images/casual-life-3d-profile-picture-of-blonde-woman-in-blue-shirt.png";
import image4 from "../images/casual-life-3d-profile-picture-of-woman-in-black-hat-and-pink-shirt.png";

function AboutUs() {
  return (
    <div className="container">
      <header className="container">
        <nav>
          <ul>
            <li>
              <strong>About Us</strong>
            </li>
          </ul>
          <ul>
            <li>
              <Link to={`/`}>Home</Link>
            </li>
            <li>
              <Link to={`/contact`}>Contact</Link>
            </li>
          </ul>
        </nav>
      </header>

      <section className="about-us-content">
        <h2 className="about-us-title">Discover the World with Us</h2>
        <div className="about-us-description">
          <p>
            Welcome to our vibrant community dedicated to exploring the wonders
            of the world! Our mission is to connect people through the beauty
            and diversity of different countries.
          </p>
          <p>
            Whether you're an armchair traveler or a globe-trotting adventurer,
            our website offers a window into the cultures, landscapes, and
            stories that shape each nation's identity.
          </p>
          <p>
            Join us on this exciting journey of discovery as we showcase
            stunning images, share fascinating facts, and encourage cultural
            exchange. Let's embark on a virtual exploration of the globe
            together!
          </p>
        </div>
      </section>

      <section>
        <div className="about-us-team">
          <h3>Meet Our Team</h3>
          <div className="team-members">
            <div className="team-member">
              <img src={image1} alt="Team Member 1" />
              <h3>Oscar</h3>
              <p>Android Developer</p>
            </div>
            <div className="team-member">
              <img src={image2} alt="Team Member 2" />
              <h3>Senthil Nathan Kathiresan</h3>
              <p>Java Developer</p>
            </div>
            <div className="team-member">
              <img src={image3} alt="Team Member 3" />
              <h3>Deepika Koti</h3>
              <p>Web Developer</p>
            </div>
            <div className="team-member">
              <img src={image4} alt="Team Member 4" />
              <h3>Priyanka Bhosle</h3>
              <p>Marketing Specialist</p>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default AboutUs;
