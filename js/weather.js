export function updateWeather(city){

    const mykey = "eca2e7203a10b67fdba7623d59464749";

    const apiURL = `https://api.openweathermap.org/data/2.5/weather?id=${city}&appid=${mykey}&units=imperial`;

    fetch(apiURL)
        .then((response) => response.json())
        .then((jsObject) => {
            console.log(jsObject);
            const city = jsObject.name;
            const temp = jsObject.main.temp;
            const iconsrc = `https://openweathermap.org/img/wn/${jsObject.weather[0].icon}@4x.png`
            console.log(iconsrc);
            const des = jsObject.weather[0].description.toUpperCase();
            const feel = jsObject.main.feels_like;
            const tempHigh = jsObject.main.temp_max;
            const tempLow = jsObject.main.temp_min;
            const humidity = jsObject.main.humidity;

            document.querySelector('#city').textContent = city;
            document.querySelector('#current-temp').textContent = temp.toFixed(1);
            document.querySelector('#weathericon').setAttribute('src', iconsrc);
            document.querySelector('#weathericon').setAttribute('alt', des);
            document.querySelector('#current-weather').textContent = des.toUpperCase();
            document.querySelector('#temp-high').textContent = tempHigh.toFixed(1);
            document.querySelector('#temp-low').textContent = tempLow.toFixed(1);
            document.querySelector('#humidity').textContent = humidity;
            document.querySelector('#feels-like').textContent = feel.toFixed(1);

            
        });
    };
