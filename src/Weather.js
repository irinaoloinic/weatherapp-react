import React from "react";
import "./Weather.css";

function Weather(){
  return(
    <div className="container">
<div className="weather-app-wrapper">
        <div className="weather-app-boarder">
          <h1>Weather Forecast</h1>
          <form id="search-form" className="mb-5">
            <div className="row">
              <div className="col-9">
                <input
                  type="search"
                  placeholder="Search for city.."
                  className="form-control"
                  id="searchItem" 
                  autocomplete= "off"
                />
              </div>
              <div className="col-3">
                <input type="submit" className="btn btn-primary" value="SEARCH" />
              </div>
            </div>
          </form>

          <div className="row">
            <div className="col-6">
              <ul>
                <li><span id="city" className="city"> </span></li>
                <li>Last updated: <span id="date" className="last-update"> </span></li>
                <li id="description"></li>
                <li>Humidity: <span id="humidity"className="humidity" ></span>%</li>
                <li>Wind speed: <span id="wind"className="wind-speed" ></span>km/h</li>
              </ul>
            </div>

            <div className="col-6">
              <div className="d-flex weather-temperature">
                <img
                  id="icon"
                  src="http://shecodes-assets.s3.amazonaws.com/api/weather/icons/broken-clouds-day.png"
                  alt="weather-icon"
                />
                <span className="temperature" id="temperature"> </span>
                <span className="units">
                  ˚C
                </span>
              </div>
              </div>
              <div className="weather-forecast" id="forecast">
                <div className="row" >
                  <div className="col-2"> 
                    <div className="weather-forecast-date">
                  
                     <img alt="" width="20px"/>
                     <div className="weather-forecast-temperature" > <span className="weather-forecast-max-temperature" > </span>
                      <span className="weather-forecast-min-temperature" > </span>
                       </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
          </div>
        </div>
        <small className="signature" > This project was coded by Irina Oloinic and is an 
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
export default Weather;