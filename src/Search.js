import React from "react";
import axios from "axios";

function Search(){
  return(
<form>
  <input type="text"></input>
  <input type="button"> </input>
</form>
  )
function showTemperature(response){

  
}

  let apiKey="37f6a94ba46fa4c11df96b5390cdt21o";
  let apiURL = `https://api.shecodes.io/weather/v1/forecast?lon=${coordinates.longitude}&lat=${coordinates.latitude}&key=${apiKey}&units=metric`;
  axios.get(apiUrl).then(showTemperature);


}
export default Search;
