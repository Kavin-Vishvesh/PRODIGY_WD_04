document.getElementById('getWeatherButton').addEventListener('click', () => {
    const location = document.getElementById('locationInput').value;
    if (location) {
        fetchWeatherData(location);
    }
});

async function fetchWeatherData(location) {
    const apiKey = 'YOUR_API_KEY'; // Replace with your actual API key
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}&units=metric`;

    try {
        const response = await fetch(apiUrl);
        if (!response.ok) throw new Error('City not found');
        
        const data = await response.json();
        displayWeatherData(data);
    } catch (error) {
        alert(error.message);
    }
}

function displayWeatherData(data) {
    const location = document.getElementById('location');
    const temperature = document.getElementById('temperature');
    const conditions = document.getElementById('conditions');

    location.textContent = `Location: ${data.name}, ${data.sys.country}`;
    temperature.textContent = `Temperature: ${data.main.temp} °C`;
    conditions.textContent = `Conditions: ${data.weather[0].description}`;
}
