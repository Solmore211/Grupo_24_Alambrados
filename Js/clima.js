let lon;
let lat;
let temperature = document.querySelector(".temp__clima");
let summary = document.querySelector(".summary__clima")
let loc = document.querySelector(".loc__clima")
let icon = document.querySelector(".icon__clima")
const kelvin = 273.15

window.addEventListener("load", () => {

  
    if (navigator.geolocation) {
        //Pide la ubicacion para acceder a la pagina
        navigator.geolocation.getCurrentPosition((position) => {

            //console.log(position);
            lon = position.coords.longitude;
            lat = position.coords.latitude;

            //ID API
            const API_KEY = "45723e8a884e384f4f1245bfdb2c87c0";
            const urlBase = (`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}`);

            fetch(urlBase)
            .then((response) => {

            return response.json();
            })
    
        .then ((data) => {
            //console.log("Esta es la data")
            //console.log(data);

            temperature.textContent =
                Math.floor(data.main.temp - kelvin) + "ºC"
            summary.textContent = data.weather[0].description;
            loc.textContent = data.name + "," + data.sys.country;
        });
        
    });
    };
})

/*fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}`)

/*https://api.openweathermap.org/data/2.5/weather?lat=lat&lon=lon&appid=45723e8a884e384f4f1245bfdb2c87c0*/