const apikey = "65309afcdbbcd46417f052a3931e7438";
const apiurl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchbox = document.querySelector(".search input");
const searchbtn = document.querySelector(".search button")

//  Changing Images as per Climate //

const weatherIcon = document.querySelector(".w-png");

async function checkweather(city) {
    const response = await fetch(apiurl + city + `&appid=${apikey}`);
    var data = await response.json();

    if(response.status == 404){
        document.querySelector(".error").style.display = "block";
        document.querySelector(".weather").style.display = "none";
    }
    else{

        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°c";
        document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
        document.querySelector(".wind").innerHTML = data.wind.speed + "Km/h";
    
        //  Changing Images as per Climate //
    
        if(data.weather[0].main = "Clouds"){
            weatherIcon.src = "/images/clouds.png";
        }
        else if(data.weather[0].main = "Haze"){
            weatherIcon.src = "/images/drizzle.png";
        }
        else if(data.weather[0].main = "Rain"){
            weatherIcon.src = "/images/rain.png";
        }
        else if(data.weather[0].main = "Snow"){
            weatherIcon.src = "/images/snow.png";
        }
        else if(data.weather[0].main = "Clear"){
            weatherIcon.src = "/images/clear.png";
        }
        else if(data.weather[0].main = "Mist"){
            weatherIcon.src = "/images/mist.png";
        }
    
        document.querySelector(".weather").style.display = "block";
        document.querySelector(".error").style.display = "none";
    }
   
}

searchbtn.addEventListener("click",() => {
    checkweather(searchbox.value);
})
