# Countries Wiki App

The Countries Wiki App is a web application built using React that allows users to explore information about different countries, including their details, weather, and images.

## Table of Contents

- [Getting Started](#getting-started)
- [Features](#features)
- [APIs Used](#apis-used)
- [Contributing](#contributing)
- [License](#license)

## Getting Started

To get started with the Travel Explorer App, follow these steps:

1. Clone the repository:

    git clone https://github.com/oaacelasu/countries_wiki.git

2. Navigate to the project directory:

    cd countries-wiki

3. Install dependencies:

    npm install

4. Start the development server:

    npm start

5. Open the application in your browser at `http://localhost:3000`.

## Features

The Countries Wiki App provides the following features:

- Home Page with a list of countries categorized by continents.
- Country Detail Page with information about a specific country, including its details, weather, and images.
- Search functionality to filter countries by name.
- Sidebar for selecting continents to filter countries by region.
- Styling using the Pico CSS library for a clean and responsive design.

## APIs Used

The Countries Wiki App utilizes the following APIs to provide information and enhance the user experience:

### Unsplash API

The Unsplash API is used to fetch high-quality images related to countries. Images are displayed on the Country Detail Page to provide visual context for the selected country.

For more information, visit the [Unsplash API Documentation](https://unsplash.com/documentation).

### Restcountries API

The Restcountries API is used to retrieve information about countries, including details such as population, area, currencies, and languages. The API is used to populate the country list on the Home Page and provide additional information on the Country Detail Page.

For more information, visit the [Restcountries API Documentation](https://restcountries.com/#api-endpoints).

### OpenWeather API

The OpenWeather API is used to fetch current weather data for countries. Weather information is displayed on the Country Detail Page, providing users with insights into the climate of the selected country.

For more information, visit the [OpenWeather API Documentation](https://openweathermap.org/api).

## Contributing

This project is open for contributions. If you'd like to contribute, please follow these steps:

1. Fork the repository.
2. Create a new branch for your feature or bug fix.
3. Make your changes and commit them.
4. Push your changes to your forked repository.
5. Submit a pull request to the main repository.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

