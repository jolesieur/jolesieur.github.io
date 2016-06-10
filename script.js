
//<![CDATA[
var WU_API_KEY = 'e0dfea3e2fc1cc56';
var weather = new XMLHttpRequest();
weather.onreadystatechange = function () {
  if (weather.readyState == 4 && weather.status==200) {
    var data = JSON.parse(weather.responseText); 
    console.log(data);
    document.getElementById("current_city").innerHTML=data.current_observation.display_location.city;
    //document.getElementById("day").innerHTML=data.forecast.txt_forecast.forecastday[0].title;
    document.getElementById("current_weather").innerHTML=data.forecast.txt_forecast.forecastday[0].fcttext_metric;
    document.getElementById("temp").innerHTML=data.current_observation.temp_c;
    document.getElementById("weather").innerHTML=data.current_observation.weather;
    document.getElementById("icon").src=data.current_observation.icon_url;
      
    //var date = data.current_observation.observation_time;
    //  date = date.substring(16,date.indexOf(","));
     // document.getElementById("date").innerHTML=date;  
  }
}
weather.open("GET", "http://api.wunderground.com/api/e0dfea3e2fc1cc56/conditions/forecast/forecast10day/hourly/lang:FR/q/pws:IQCTROIS22.json", true);
weather.send();
//]]>

