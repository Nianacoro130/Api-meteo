
let meteoInfos = {
    "Rain": "wi wi-day-rain",
    "Clouds": "wi wi-day-cloudy",
    "Clear": "wi wi-day-sunny ",
    "Snow" : "wi wi-day-snow",
    "mist": " wi wi-day-fog",
    "Drizzle" : "wi wi-day-sleet",
    "Haze": "wi wi-day-haze"
}


let callBackSuccess = function(data){
//    console.log("mes donnees api", data);

   const kmh = 1.60;
   const conditions = data.weather[0].main;

   const temp = document.getElementById("degres");
   temp.innerHTML =  "<p>"+data.main.temp.toFixed(1)+"</p>";

   const wind = document.getElementById("vent");
  
   wind.innerHTML = "<li>"+(data.wind.speed*kmh).toFixed(2)+"</li>";

   const pres = document.getElementById("pression");
   pres.innerHTML = "<li>"+data.main.pressure+"</li>";

   const description = document.getElementById("description");
   description.innerHTML = "<p>"+data.weather[0].description+ "</p>";

   document.querySelector('i.wi').className = meteoInfos[conditions];

}


function getApiMeteo() {  

    let localite = document.getElementById("mylocality").value;

    const url = `https://api.openweathermap.org/data/2.5/weather?q=+${localite}+&appid=c21a75b667d6f7abb81f118dcf8d4611&units=metric`


    $.get(url, callBackSuccess).done(function() {
        //alert( "second success" );
      })

      .fail(function() {
        alert( "Erreur veuillez ecrire une ville ou un Pays existant !");
      })

      .always(function() {
        //alert( "finished" );
      });
}


