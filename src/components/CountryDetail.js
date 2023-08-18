/**
 * File: CountryDetail.js
 * Created by: Oscar Acelas (@oacelasupegui4062@conestogac.on.ca) on August 16, 2023
 * Contributors:
 *   - Oscar Acelas (@oacelasupegui4062@conestogac.on.ca) - Added CountryDetail component, fetch country details from API, fetch weather from API, fetch images from API, display country details, weather and images
 *   - Deepika Koti(dkoti3355@conestogac.on.ca) - Added Map component and lodaing progress bar
 * Last Modified: August 16, 2023
 */

import React, {useState, useEffect} from 'react';
import {Link, useParams} from 'react-router-dom';
import {Carousel} from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import BoldLabel from './BoldLabel';
import LeafletMap from './LeafletMap';
import { GiThermometerCold, GiThermometerHot, GiWaterDrop, GiSpeedometer } from 'react-icons/gi';

import '../css/pico.css';

const OPENWEATHER_API_KEY = process.env.REACT_APP_OPENWEATHER_API_KEY;
const UNSPLASH_ACCESS_KEY = process.env.REACT_APP_UNSPLASH_ACCESS_KEY;


function CountryDetail() {
    const {countryCode} = useParams();
    const [countryData, setCountryData] = useState(null);
    const [weather, setWeather] = useState(null);
    const [images, setImages] = useState(null);
    const [borderCountryData, setBorderCountryData] = useState({});
    

    useEffect(() => {
        // Fetch country details using REST Countries API
        fetch(`https://restcountries.com/v3.1/alpha/${countryCode}`)
            .then(response => response.json())
            .then(data => {
                console.log(data);
                setCountryData(data[0]);
            })
            .catch(error => console.error('Error fetching country data:', error));
    }, [countryCode]);


    useEffect(() => {
        if (countryData) {
            // Fetch weather data using OpenWeatherMap API
            fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${countryData.latlng[0]}&lon=${countryData.latlng[1]}&appid=${OPENWEATHER_API_KEY}`)
                .then(response => response.json())
                .then(data => {
                    console.log(data);
                    setWeather(data);
                })
                .catch(error => console.error('Error fetching weather data:', error));

            if (!countryData.borders) return; // No border countries

            // Fetch border country data using REST Countries API
            countryData.borders.forEach(border => {
                fetch(`https://restcountries.com/v3.1/alpha/${border}`)
                    .then(response => response.json())
                    .then(data => {
                        setBorderCountryData(prevData => ({
                            ...prevData,
                            [border]: data[0]
                        }));
                    })
                    .catch(error => console.error(`Error fetching border country data for ${border}:`, error));
            });
        }
    }, [countryData]);


    useEffect(() => {
        if (countryData) {
            // Fetch images from Unsplash API
            fetch(`https://api.unsplash.com/photos/random?query=${countryData.name.common}&count=20&client_id=${UNSPLASH_ACCESS_KEY}`)
                .then(response => response.json())
                .then(data => {
                    console.log(data);
                    setImages(data);
                })
                .catch(error => {
                    console.error('Error fetching images:', error);
                    setImages([]);
                });
        }
    }, [countryData]);

   
    if (!countryData || !weather || !images) {
        return (
          <div className="loading">
            <div>Loading...</div>
            <div className="loading-bar">
              <progress value="50" max="100"></progress>
            </div>
          </div>
        );
    }

    return (
        <div className="container">
            <header className="container">
                <nav>
                    <ul>
                        <li><strong>Country Details</strong></li>
                    </ul>
                    <ul>
                        <li><Link to={`/`}>Home</Link></li>
                        <li><Link to={`/about`}>About</Link></li>
                        <li><Link to={`/contact`}>Contact</Link></li>
                    </ul>
                </nav>
            </header>

            <h2 className="text-center">{countryData.name.common}</h2>
            <div className="flex justify-between">
                <div className="flex flex-wrap">
                    {countryData.flags.svg && (
                        <img
                            src={countryData.flags.svg}
                            alt={countryData.name.common}
                            className="w-1/2"
                        />
                    )}
                </div>
                <article className="w-1/2">
                    <h3>{countryData.name.common}</h3>
                    <h4>Capital: {countryData.capital}</h4>
                    <div className="capital-image">
                        {countryData.capital && (
                            <img src={`https://source.unsplash.com/1600x900/?${countryData.capital}`}
                                 alt={`Image of ${countryData.capital}`}/>
                        )}
                    </div>
                    <BoldLabel label="Region" value={countryData.region}/>
                    <BoldLabel label="Population" value={countryData.population}/>
                    <BoldLabel label="Area" value={`${countryData.area} km²`}/>
                    <BoldLabel label="Timezone" value={countryData.timezones[0]}/>
                    <BoldLabel label="Currency" value={Object.keys(countryData.currencies)[0]}/>
                    <BoldLabel label="Language" value={Object.values(countryData.languages)[0]}/>


                    {countryData.borders && (
                        <details>
                            <summary>Borders</summary>
                            <div className="border-countries">
                                {countryData.borders.length > 0 ? (
                                    countryData.borders.map(border => (
                                        <div key={border} className="border-country">
                                            {borderCountryData[border] ? (
                                                <div className="border-info">
                                                    <img src={borderCountryData[border].flags.png}
                                                         alt={`${border} Flag`} className="border-flag"/>
                                                    <h4>{border}</h4>
                                                    <p>Population: {borderCountryData[border].population}</p>
                                                    <p>Region: {borderCountryData[border].region}</p>
                                                    <p>Capital: {borderCountryData[border].capital}</p>
                                                    <Link to={`/country/${border}`} className="btn btn-primary"
                                                          role={"button"}>View Details</Link>
                                                </div>
                                            ) : (
                                                <p>Loading...</p>
                                            )}
                                        </div>
                                    ))
                                ) : (
                                    <p>No bordering countries</p>
                                )}
                            </div>
                        </details>
                    )}


                </article>
                <article className="mt-4">
                    <h3>Weather in {countryData.name.common}</h3>
                    <div className="card">
                        <div className="card-content">
                            <div className="flex justify-between grid">
                                <div className="w-1/2">
                                    <h4>Main Weather: {weather.weather[0].main}</h4>
                                    <BoldLabel label="Description" value={`${weather.weather[0].description}`}/>
                                    <BoldLabel 
                                        label="Temperature" 
                                        value={`${weather.main.temp} K`} 
                                        weatherIcon={<GiThermometerCold className="icon-cold" />}
                                    />
                                    <BoldLabel 
                                        label="Humidity" 
                                        value={`${weather.main.humidity} %`}
                                        weatherIcon={<GiWaterDrop className="icon-rain" />}
                                    />
                                    <BoldLabel 
                                        label="Feels Like" 
                                        value={`${weather.main.feels_like} K`}
                                        weatherIcon={<GiThermometerHot className="icon-hot" />}
                                    />
                                </div>
                                <div className="w-1/2">
                                    <h4>Wind</h4>
                                    <BoldLabel 
                                        label="Speed" 
                                        value={`${weather.wind.speed} m/s`}
                                        weatherIcon={<GiSpeedometer className="icon-hot" />}
                                    />
                                    <BoldLabel label="Degrees" value={`${weather.wind.deg}°`}/>
                                    <BoldLabel label="Gust" value={`${weather.wind.gust} m/s`}/>
                                </div>
                            </div>
                        </div>
                    </div>
                </article>
            </div>

            <div className="mt-4">
                <h3>Country Map</h3>
                <LeafletMap countryData={countryData} />
            </div>

            {images.length > 0 && (
                <div className="mt-4">
                    <h3>Images from {countryData.name.common}</h3>
                    <Carousel>
                        {images.map(image => (
                            <div key={image.id} className="carousel-image-container">
                                <img src={image.urls.regular} alt={image.description} className="carousel-image"/>
                            </div>
                        ))}
                    </Carousel>
                </div>
            )}
        </div>
    );
}

export default CountryDetail;
