async function fetchWeather() {
  try {
      const response = await fetch('/get_current_weather');

      // Check if the response is OK
      if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      console.log("Weather data:", data);
      const currentWeather = data.current_weather;
      const forecast = data.forecast;



      var weth_id = currentWeather.weather_id;
      console.log(weth_id);
      var time = currentWeather.timestamp;
      var date = new Date(time);
      var hours = date.getHours();
      
      var minutes = date.getMinutes();
      let currentDate = new Date();
      

      let day = currentDate.toLocaleDateString('en-GB', { 
        timeZone: 'Europe/London', 
        day: '2-digit', 
        
    });
    let month = currentDate.toLocaleDateString('en-GB', { 
      timeZone: 'Europe/London', 
        month: '2-digit', 
      
  });

  if(minutes<10){
    document.getElementById("minute").textContent = "0"+minutes;
  }
  else{
    document.getElementById("minute").textContent = minutes;
  }

  if(hours<10){
    document.getElementById("ura_2").textContent = "0"+hours;
  }
  else{
    document.getElementById("ura_2").textContent = hours;
  }

  if(day<10){
    document.getElementById("datum").textContent = "0"+day + "." + month+".";
  }
  else{
    document.getElementById("datum").textContent = day + "." + month+".";
  }
  if(month<10){
    document.getElementById("datum").textContent = day + "." +month+".";
  }
  else{
    document.getElementById("datum").textContent = day + "." + month+".";
  }
  var icon="icon"
  setIcon2("vrsta", weth_id, hours, icon);




  const firstDay = forecast[0];
  let fullDateTime = firstDay.datetime;
  var weth_id1 = firstDay.weather_id; 
  var temp_1= firstDay.max_temp+"°C / "+ firstDay.min_temp+"°C";
  var d = getDayName(fullDateTime, "sl-SI");
  document.getElementById("day1").textContent = getFirstThreeLetters(d);
  setIcon("vrsta1", weth_id1, hours, "icon1" );
  document.getElementById("temp1").textContent = temp_1;



  const secondDay = forecast[1];
  let fullDateTime2 = secondDay.datetime;
  var weth_id2 = secondDay.weather_id; 
  var temp_2= secondDay.max_temp+"°C / "+ secondDay.min_temp+"°C";
  var d = getDayName(fullDateTime2, "sl-SI");
  document.getElementById("day2").textContent = getFirstThreeLetters(d);
  setIcon("vrsta2", weth_id2, hours, "icon2" );
  document.getElementById("temp2").textContent = temp_2;


  const thirdDay = forecast[2];
  let fullDateTime3 = thirdDay.datetime;
  var weth_id3 = thirdDay.weather_id; 
  var temp_3= thirdDay.max_temp+"°C / "+ thirdDay.min_temp+"°C";
  var d = getDayName(fullDateTime3, "sl-SI");
  document.getElementById("day3").textContent = getFirstThreeLetters(d);
  setIcon("vrsta3", weth_id3, hours, "icon3" );
  document.getElementById("temp3").textContent = temp_3;


  const forthDay = forecast[3];
  let fullDateTime4 = forthDay.datetime;
  var weth_id4 = forthDay.weather_id; 
  var temp_4= forthDay.max_temp+"°C / "+ forthDay.min_temp+"°C";
  var d = getDayName(fullDateTime4, "sl-SI");
  document.getElementById("day4").textContent = getFirstThreeLetters(d);
  setIcon("vrsta4", weth_id4, hours, "icon4" );
  document.getElementById("temp4").textContent = temp_4;


  const fifthDay = forecast[4];
  let fullDateTime5 = fifthDay.datetime;
  var weth_id5 = forthDay.weather_id; 
  var temp_5= fifthDay.max_temp+"°C / "+ fifthDay.min_temp+"°C";
  var d = getDayName(fullDateTime5, "sl-SI");
  document.getElementById("day5").textContent = getFirstThreeLetters(d);
  setIcon("vrsta5", weth_id5, hours, "icon5" );
  document.getElementById("temp5").textContent = temp_5;    document.getElementById("icon").addEventListener("click", function () {
    document.getElementById("osnova").style.display = "none";
    document.getElementById("spodnji").style.display = "none";

    document.getElementById("napoved").style.display="block"; // Show content2


  });

  } catch (error) {
      console.error('Error fetching data:', error);

  }
}

function fetchInfo2() {
  fetch('/get_info', {
      method: 'POST'
  })
  .then(response => response.json())  // Parse JSON response
  .then(data => {
      document.getElementById("info");
      const roundedInfo = Math.round(data.info);
      const gaugeValue = roundedInfo; 

        updateGaugeValue(0);

      updateGaugeValue(gaugeValue); // Update the chart

  })

  .catch(error => {
      console.error('Error fetching month:', error);
  });
}
setInterval(fetchInfo2, 1000);
fetchInfo2();

async function fetchClimateData() {

  // Make a request to the backend API
  const response = await fetch('/get_temp', {
    method: 'POST'
})
.then(response => response.json())  // Parse JSON response
.then(data => {





  console.log(data.temperature);
  console.log(data.humidity);
  console.log(data.temperature_2);
  console.log(data.humidity_2);
  document.getElementById("temp").textContent = `${data.temperature} °C` || "N/A";
  document.getElementById("hum").textContent = `${data.humidity}%` || "N/A";
  document.getElementById("temp_2").textContent = `${data.temperature_2} °C` || "N/A";
  document.getElementById("hum_2").textContent = `${data.humidity_2} %` || "N/A";
})

}


setInterval(fetchClimateData, 5000);
fetchClimateData();


function updateGaugeValue(newValue) {
  // Update the value property in options
  options.value = newValue;

  // Apply the changes to the chart
  chart.update(options);
}


const { AgCharts } = agCharts;
function getResponsiveFontSize() {
if (window.innerWidth < 600) return 10; // Smaller screens
if (window.innerWidth < 900) return 14; // Medium screens
return 20; // Default font size for larger screens
}

const options = {
type: "radial-gauge",
container: document.getElementById("myChart"),
value: 85,
scale: {
  min: -10,
  max: 20,
  label: {
    fontSize: getResponsiveFontSize(), // Set font size for labels (e.g., 16px)
    color: "white", // Optional: Set the color of the labels
  },
  secondaryLabel:{
    fontSize: 5,
    color: "white",
  },

},
label: {

  // Font size for the gauge value
  color: "white", // Set the color of the gauge value
},

segmentation: {
  enabled: true,
  interval: {
    count: 4,
  },
  spacing: 2,
},

background: {
  visible: false, // Makes the background transparent
}
};

const chart = AgCharts.createGauge(options);



function setSegmentationInterval(interval) {
options.segmentation.interval = interval;
chart.update(options);
}

function clearContent() {
  const contentSections = document.querySelectorAll('.content');
  contentSections.forEach(section => {
      section.style.display = 'none'; // Hide all sections
  });
}

// Function to load an external website and clear existing content
function loadPage(url) {
// Hide all visible content
document.querySelectorAll('#osnova, #myChart, #side, #spodnji, #ura, #napoved').forEach(element => {
    element.style.display = 'none';
});

// Show the iframe and load the website into it
var iframe = document.getElementById('contentFrame');
iframe.style.display = 'block';  // Make iframe visible
iframe.src = url;  // Set the iframe's source to the clicked link
}








































function setWeatherIcon(iconClass, icon) {
  const iconElement = document.getElementById(icon);
  // Clear previous classes and set the new one
  iconElement.className = `fas ${iconClass}`; 
}

function setIcon(Id, weth_id, hours, icon ){


  if(weth_id>199&& weth_id<250) {
    document.getElementById(Id).textContent = "Nevihte";
    setWeatherIcon("fa-solid fa-cloud-bolt", icon);

  } 
  else if(weth_id>299 && weth_id<350){
    document.getElementById(Id).textContent = "Rahel dež";
    setWeatherIcon("fa-solid fa-cloud-sun-rain", icon);
  }
  else if( weth_id>499 && weth_id<550){
    document.getElementById(Id).textContent = "Dež";
    setWeatherIcon("fa-solid fa-cloud-showers-heavy", icon);
    
  } 
  else if(weth_id>599 && weth_id<650 ){
    document.getElementById(Id).textContent = "Sneženje";
    setWeatherIcon("fa-regular fa-snowflake", icon);
  }
  else if(weth_id==800 && hours<18 && hours>=5){
    document.getElementById(Id).textContent = "Sončno";
    setWeatherIcon("fa-solid fa-sun", icon);
  }
  else if(weth_id==800  && hours>=18){
    document.getElementById(Id).textContent = "Jasno";
    setWeatherIcon("fa-solid fa-moon", icon);
  }
  else if(weth_id>800 && weth_id<820 && hours<18 && hours>=5){
    document.getElementById(Id).textContent = "Oblačno";
    setWeatherIcon("fa-solid fa-cloud", icon);
  }
  else if(weth_id>800 && weth_id<820 &&  hours>=18){
    document.getElementById(Id).textContent = "Oblačno";
    setWeatherIcon("fa-solid fa-cloud-moon", icon);
  }
  else{
    document.getElementById(Id).textContent = "Oblačno";
    setWeatherIcon("fa-solid fa-cloud-moon", icon);
  }

}
function setIcon2(Id, weth_id, hours, icon ){


  if(weth_id>199&& weth_id<250) {
    document.getElementById(Id).textContent = "Nevihta";
    setWeatherIcon("fa-solid fa-cloud-bolt", icon);

  } 
  else if(weth_id>299 && weth_id<350){
    document.getElementById(Id).textContent = "Rahlo dežuje";
    setWeatherIcon("fa-solid fa-cloud-showers-heavy", icon);
  }
  else if( weth_id>499 && weth_id<550){
    document.getElementById(Id).textContent = "Dežuje";
    setWeatherIcon("fa-solid fa-cloud-sun-rain", icon);

  } 
  else if(weth_id>599 && weth_id<650 ){
    document.getElementById(Id).textContent = "Sneži";
    setWeatherIcon("fa-regular fa-snowflake", icon);
  }
  else if(weth_id==800 && hours<18 && hours>=5){
    document.getElementById(Id).textContent = "Jasno";
    setWeatherIcon("fa-solid fa-sun", icon);
  }
  else if(weth_id==800  && hours>=18){
    document.getElementById(Id).textContent = "Jasno";
    setWeatherIcon("fa-solid fa-moon", icon);
  }
  else if(weth_id>800 && weth_id<820 && hours<18 && hours>=5){
    document.getElementById(Id).textContent = "Oblačno";
    setWeatherIcon("fa-solid fa-cloud", icon);
  }
  else if(weth_id>800 && weth_id<820 &&  hours>=18){
    document.getElementById(Id).textContent = "Oblačno";
    setWeatherIcon("fa-solid fa-cloud-moon", icon);
  }
  else{
    document.getElementById(Id).textContent = "Oblačno";
    setWeatherIcon("fa-solid fa-cloud-moon", icon);
  }

}
function getFirstThreeLetters(word) {
  const firstLetter = word.charAt(0).toUpperCase();
  const nextTwoLetters = word.slice(1, 3).toLowerCase();
  return firstLetter + nextTwoLetters;
}

function getDayName(dateStr, locale)
  {
      var date = new Date(dateStr);
      return date.toLocaleDateString(locale, { weekday: 'long' });        
  }
  function reloadPage() {
    window.location.reload(); // This will reload the current page
  }


















  










// Refresh every second
setInterval(fetchWeather, 1000);
fetchWeather(); // Initial call


