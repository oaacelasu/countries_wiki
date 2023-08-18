/**
 * File: Home.js
 * Created by: Oscar Acelas (@oacelasupegui4062@conestogac.on.ca) on August 16, 2023
 * Contributors:
 *   - Oscar Acelas (@oacelasupegui4062@conestogac.on.ca) - Added Home component, fetch countries from API, filter countries by continent and search, and display countries
 * Last Modified: August 16, 2023
 */
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Footer from "./Footer";
import "@picocss/pico";

function Home() {
  const [countries, setCountries] = useState([]); // Array of countries
  const [searchQuery, setSearchQuery] = useState(""); // Search query
  const [continent, setContinent] = useState(null); // Continent filter
  const [continents, setContinents] = useState([
    // Continents
    "All",
    "Africa",
    "Americas",
    "Asia",
    "Europe",
    "Oceania",
  ]);

  useEffect(() => {
    // Fetch countries using REST Countries API
    fetch("https://restcountries.com/v3.1/all")
      .then((response) => response.json())
      .then((data) => {
        setCountries(data);
      });
  }, []);

  const handleContinentClick = (continent) => {
    // If the user clicks on all, fetch all countries
    if (continent === "All") {
      setContinent(null);
      fetch("https://restcountries.com/v3.1/all")
        .then((response) => response.json())
        .then((data) => {
          setCountries(data);
        });
      return;
    }

    // Otherwise, fetch countries by continent
    setContinent(continent);
    fetch("https://restcountries.com/v3.1/region/" + continent)
      .then((response) => response.json())
      .then((data) => {
        setCountries(data);
      });
  };

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const filteredCountries = countries.filter((country) =>
    country.name.common.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div>
      <div className="container">
        <header className="header">
          <nav>
            <ul>
              <li>
                <strong>Countries of the World!</strong>
              </li>
            </ul>
            <ul>
              <li>
                <Link to={`/about`}>About</Link>
              </li>
              <li>
                <Link to={`/contact`}>Contact</Link>
              </li>
            </ul>
          </nav>
        </header>
        <article className="grid mb-4">
          <div className="flex justify-center mb-4">
            <input
              type="text"
              placeholder="Search countries..."
              value={searchQuery}
              onChange={handleSearchChange}
              className="input w-full p-2"
            />
          </div>
          <details role="list">
            <summary aria-haspopup="listbox">
              {continent || "Filter by Region"}
            </summary>
            <ul role="listbox">
              {continents.map((continent, index) => (
                <li key={index} onClick={() => handleContinentClick(continent)}>
                  <span>{continent}</span>
                </li>
              ))}
            </ul>
          </details>
        </article>

        <div className="country-list">
          {filteredCountries.map((country) => (
            <div key={country.cca3} className="article country-item">
              <img
                src={country.flags.png}
                alt={`${country.name.common} Flag`}
                className="country-flag"
              />
              <h3>{country.name.common}</h3>
              <p>Population: {country.population}</p>
              <p>Region: {country.region}</p>
              <p>Capital: {country.capital}</p>
              <Link
                to={`/country/${country.cca3}`}
                className="btn btn-primary"
                role={"button"}
              >
                View Details
              </Link>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Home;

// TODO: Improve the styling of the application  and display other information about the countries
// TODO: Refactor the code to use components -> ej: Header, Footer, CountryItem, CountryList, etc.
// TODO: We could add other features to the application, like a map to display the location of the country, or a weather forecast for the country
