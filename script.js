const apiKey = "3456228e1cade9f9566376514c921bf9";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?&units=metric&q="

const searchBoxes = document.querySelector(".search input");
const searchButton = document.querySelector(".search button");
let logoChange = document.getElementById("logo");

async function checkWeather(city) {
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
    

    if(response.status == 404){
     document.querySelector(".bodyDetail").style.display = "none"; //jb error show kre tb body details na dikhao
     document.querySelector("#endImg").style.display = "block";  //jb error show kre tb error image  dikhao
     document.querySelector(".startingSearch").style.display = "none";  //jb error show kre tb stating search image  na dikhao

    }else{
        var data = await response.json();

     console.log(data);

     document.querySelector("#city").innerHTML = data.name; // city ko data ke name ke sath jod do
     document.querySelector("#temp").innerHTML = Math.round(data.main.temp) + "°C" ; // temperature ko data ke main or main ke subparts temp ke sath jod do .. roundoff krdo taki integer value de or last me string jod do units.
     document.querySelector("#humidityPercent").innerHTML = data.main.humidity + " %";
     document.querySelector("#windSpeed").innerHTML = data.wind.speed + " Km/h";
     document.querySelector("#pressurePercent").innerHTML = data.main.pressure + " hPa";
     document.querySelector("#time").innerHTML ="UTC+ " + data.timezone/3600;

     if(data.weather[0].main == "Clouds"){
        logoChange.src = "cloud.png";
     }else if(data.weather[0].main == "Clear"){
        logoChange.src = "clear.png";
     }else if(data.weather[0].main == "Rain"){
        logoChange.src = "rain.png";
     }else if(data.weather[0].main == "Snow"){
        logoChange.src = "snow.png";
     }

     document.querySelector(".bodyDetail").style.display = "block";
     document.querySelector("#endImg").style.display = "none";
     document.querySelector(".startingSearch").style.display = "none";
    }
    
}
 searchBtn.addEventListener("click" , ()=>{
    checkWeather(searchBoxes.value);

});

