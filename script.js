

const apiKey1 = 'https://api.openweathermap.org/data/2.5/weather?q=siliguri&appid=8eb69fdfb360b74be2bbeff9290c5496&units=metric';
async function fetchWeather() {
    const apiKey = '8eb69fdfb360b74be2bbeff9290c5496';
    const state = document.getElementById('states').value;
    const weatherResultDiv = document.getElementById('weatherResult');

    if (!state) {
        alert('Please select a state from the list.');
        return;
    }

    try {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${state}&appid=${apiKey}&units=metric`);
        if (!response.ok) {
            throw new Error('State not found or OpenWeather API error');
        }
        const data = await response.json();

        weatherResultDiv.innerHTML = `
            <h3>Weather in ${data.name}</h3>
            <p>Temperature: ${data.main.temp} °C</p>
            <p>Weather: ${data.weather[0].description}</p>
            <p>Humidity: ${data.main.humidity}%</p>
            <p>Wind Speed: ${data.wind.speed} m/s</p>
            <p>Country: ${data.sys.country}</p>
            <p>Longitude: ${data.coord.lon}, Latitude: ${data.coord.lat}</p> 
        `;
    } catch (error) {
        weatherResultDiv.innerHTML = `<p>Error: ${error.message}</p>`;
    }
}

