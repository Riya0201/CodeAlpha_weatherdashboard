const inputbox = document.querySelector('.input-box');
const searchbutton = document.getElementById('searchbutton');
const Weather_image = document.querySelector('.Weather-image');
const temperature = document.querySelector('.temperature');
const description = document.querySelector('.description');
const humidity = document.getElementById('humidity');
const windspeed = document.getElementById('wind speed');
const notfound = document.querySelector('.not-found');
const weather_body = document.querySelector('.weather-body')

 async function checkweather(city){ 
    const api_key = "32caf1f5865eb3ba8c89f0cda1896931" ;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}`;

    const weather_data = await fetch(`${url}`).then(response => response.json());

    if(weather_data.cod == `404`){
        notfound.style.display = "flex";
        weather_body.style.display = "none";
        console.log("error");
        return;
    }

    console.log("run");
    notfound.style.display = "none";
    weather_body.style.display = "flex";
    temperature.innerHTML = `${Math.round(weather_data.main.temp - 273.15)}°C`;
    description.innerHTML = `${weather_data.weather[0].description}`;
    humidity.innerHTML = `${weather_data.main.humidity}%`;
    windspeed.innerHTML = `${weather_data.wind.speed}km/H`;
    
    switch(weather_data.weather[0].main){
        case 'Clouds':
            Weather_image.src = "images/clouds.png";
            break;
        case 'Clear':
            Weather_image.src = "images/sunny.png";
            break;
        case 'Thunderstorm' : 
            Weather_image.src = "images/thunderstorm.png";
            break;
        case 'Haze': 
            Weather_image.src = "images/haze.png";
            break;
        case 'Rain':
            Weather_image.src = "images/rain.png";
            break;
        case 'Snow':
            Weather_image.src = "images/snow.png";
            break;      
        case 'Wind':
            Weather_image.src = "images/wind.png";
            break;

    }

    console.log(weather_data);

}

searchbutton.addEventListener('click', ()=>{
    checkweather(inputbox.value);
    
});
