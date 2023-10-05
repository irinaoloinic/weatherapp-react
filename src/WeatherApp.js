import React from "react";
import "./WeatherApp.css";

function WeatherApp(){
  return(
    <div className="container">
<div class="weather-app-wrapper">
        <div class="weather-app-boarder">
          <h1>Weather Forecast</h1>
          <form id="search-form" class="mb-5">
            <div class="row">
              <div class="col-9">
                <input
                  type="search"
                  placeholder="Search for city.."
                  class="form-control"
                  id="searchItem" 
                  autocomplete= "off"
                />
              </div>
              <div class="col-3">
                <input type="submit" class="btn btn-primary" value="SEARCH"> </input>
              </div>
            </div>
          </form>

          <div class="row">
            <div class="col-6">
              <ul>
                <li><span id="city" class="city"> </span></li>
                <li>Last updated: <span id="date" class="last-update"> </span></li>
                <li id="description"></li>
                <li>Humidity: <span id="humidity"class="humidity" ></span>%</li>
                <li>Wind speed: <span id="wind"class="wind-speed" ></span>km/h</li>
              </ul>
            </div>

            <div class="col-6">
              <div class="d-flex weather-temperature">
                <img
                  id="icon"
                  src="http://shecodes-assets.s3.amazonaws.com/api/weather/icons/broken-clouds-day.png"
                  alt="weather-icon"
                />
                <span class="temperature" id="temperature"> </span>
                <span class="units">
                  ˚C
                </span>
              </div>
              </div>
              <div class="weather-forecast" id="forecast">
                <div class="row" >
                  <div class="col-2"> 
                    <div class="weather-forecast-date">
                  
                     <img alt="" width="20px"/>
                     <div class="weather-forecast-temperature" > <span class="weather-forecast-max-temperature" > </span>
                      <span class="weather-forecast-min-temperature" > </span>
                       </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
          </div>
        </div>
        <small class="signature" > This project was coded by Irina Oloinic and is an 
          <a
            href="https://github.com/irinaoloinic/vanilla-weather-app"
            target="blank"
          >
             open-sourced on GitHub 
          </a>
          and <a href="https://cosmic-meerkat-0e71e4.netlify.app/"> hosted on Netlify</a>
        </small>

  
    </div>
  )
}
export default WeatherApp;