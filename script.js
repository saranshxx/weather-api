const apiKey = "a0a6ec0d4c6e4b9db5c133608251403"; // Your API key
const apiUrl = "http://api.weatherapi.com/v1/current.json";

function getWeather() {
    const location = document.getElementById("location").value.trim();
    if (!location) {
        alert("Please enter a location.");
        return;
    }

    const url = `${apiUrl}?key=${apiKey}&q=${location}&aqi=yes`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            if (data.error) {
                alert("Location not found. Please try again.");
                return;
            }

            // Show weather details
            document.getElementById("location-name").textContent = `${data.location.name}, ${data.location.country}`;
            document.getElementById("temperature").textContent = `Temperature: ${data.current.temp_c}°C`;
            document.getElementById("condition").textContent = `Condition: ${data.current.condition.text}`;
            document.getElementById("air-quality").textContent = `Air Quality Index: ${data.current.air_quality.us_epa_index}`;
        })
        .catch(error => {
            alert("Something went wrong. Please try again.");
            console.error(error);
        });
}
