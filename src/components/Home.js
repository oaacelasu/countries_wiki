import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import '@picocss/pico';

function Home() {
    const [countries, setCountries] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');
    const [continent, setContinent] = useState(null);
    const [continents, setContinents] = useState([
        'All', 'Africa', 'Americas', 'Asia', 'Europe', 'Oceania'
    ]);

    useEffect(() => {
        fetch('https://restcountries.com/v3.1/all')
            .then(response => response.json())
            .then(data => {
                setCountries(data);
            });
    }, []);

    const handleContinentClick = (continent) => {

        if (continent === 'All') {
            setContinent(null)
            fetch('https://restcountries.com/v3.1/all')
                .then(response => response.json())
                .then(data => {
                    setCountries(data);
                });
            return;
        }

        setContinent(continent);
        fetch('https://restcountries.com/v3.1/region/' + continent)
            .then(response => response.json())
            .then(data => {
                setCountries(data);
            });
    };

    const handleSearchChange = event => {
        setSearchQuery(event.target.value);
    };

    const filteredCountries = countries.filter(country =>
        country.name.common.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <div>
            <header className="container">
                <nav>
                    <ul>
                        <li><strong>Countries of the World!</strong></li>
                    </ul>
                    <ul>
                        <li><Link to={`/about`}>About</Link></li>
                        <li><Link to={`/contact`}>Contact</Link></li>
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
                    <summary aria-haspopup="listbox">{continent || 'Filter by Region'}</summary>
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
                {filteredCountries.map(country => (
                    <div key={country.cca3} className="article country-item">
                        <img src={country.flags.png} alt={`${country.name.common} Flag`} className="country-flag"/>
                        <h3>{country.name.common}</h3>
                        <p>Population: {country.population}</p>
                        <p>Region: {country.region}</p>
                        <p>Capital: {country.capital}</p>
                        <Link to={`/country/${country.cca3}`} className="btn btn-primary" role={"button"}>View
                            Details</Link>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Home;
