const apiKey ='f839c9b0824f4118bd793525251004'
const city ='Vitoria-Gasteiz'
const endPoint = `https://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${city}&aqi=no`

const weatherApp = document.querySelector(".weather-app")
const forestcast =document.querySelector(".forestcast")



const getWeather = async () => {
    try {
      const response = await fetch(endPoint);
      if (!response.ok) {
        throw new Error('Ha surgido un problema', response.status);
      }
      const data = await response.json();
      console.log(data.forecast.forecastday[0].hour);
      currentWeather(data)
      forecast(data)
      return data;
      

      
    } catch (error) {
      console.log('Error al obtener los datos', error);
    }
  };
getWeather()

function currentWeather(data) {
  
 
    weatherApp.innerHTML = `
     <div class="container">
            <h1 class="name">Vitoria-Gasteiz /España</h1>
            <p  class="currentWeather">${data.current.condition.text}</p>
            <h2 class="temp">${data.current.temp_c}</h2>
            <img class="weatherIcon" src="${data.current.condition.icon}" alt="" >
           
            <ul>
            <li>
                <span>Precipitaciones:</span> 
                <span class="Precipitation">${data.current.precip_mm}%</span>
                
            </li>
            
            <li> 
                <span>Humedad:</span>  
                <span class="Humidity">${data.current.humidity}%</span>
            
            </li>
            
            <li> 
                <span>Viento:</span>  
                <span class="wind">${data.current.wind_kph}km/h</span>
            
            </li>
            </ul>
            
            </div>
    `

}

function forecast(data) {
    const forecastArray = data.forecast.forecastday[0].hour;
    console.log(forecastArray)
    forecastArray.forEach (Element =>{
        
     const {condition:{icon},time,temp_c} = Element;
   console.log(time)
     const hour = time.split(" ")[1];
    
     forestcast.innerHTML +=`
     <ul>
     <li>
     <p>${hour}<p>
     <img class="wetherIco" src="http:${icon}" alt="">
     <p>${temp_c}ºc<p>
     </li>  
     </ul>   
     `
     



});

};


getWeather()













