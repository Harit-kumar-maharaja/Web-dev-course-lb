const usertab = document.querySelector("[data-userweather]");
const searchtab = document.querySelector("[data-searchweather]");
const usercontainer = document.querySelector(".weather-container");
const grantaccesscontainer = document.querySelector(".grant-location-container");
const loadingscreen = document.querySelector(".loading-container");
const searchform = document.querySelector("[data-searchform]");
const userinfocontainer = document.querySelector(".user-info-container");

// Initially needed variables
let currenttab = usertab;
const API_KEY = "d1845658f92b31c64bd94f06f7188c9c";
currenttab.classList.add("current-tab");
getfromsessionstorage();

function switchtabs(clickedtab) {
    if (clickedtab !== currenttab) {
        currenttab.classList.remove("current-tab");
        currenttab = clickedtab;
        currenttab.classList.add("current-tab");

        if (!searchform.classList.contains("active")) {
            // If search form container is invisible, make it visible
            userinfocontainer.classList.remove("active");
            grantaccesscontainer.classList.remove("active");
            searchform.classList.add("active");
        } else {
            // If we were on the search tab, switch to "your weather" tab
            searchform.classList.remove("active");
            userinfocontainer.classList.remove("active");
            // We need to display weather, so check local storage for coordinates
            getfromsessionstorage();
        }
    }
}

usertab.addEventListener("click", () => {
    switchtabs(usertab);
});
searchtab.addEventListener("click", () => {
    switchtabs(searchtab);
});

function getfromsessionstorage() {
    const localcoordinates = sessionStorage.getItem("user-coordinates");
    if (!localcoordinates) {
        // If local coordinates are not found
        grantaccesscontainer.classList.add("active");
    } else {
        const coordinates = JSON.parse(localcoordinates);
        fetchuserweatherinfobycoordinates(coordinates);
    }
}

async function fetchuserweatherinfobycoordinates(coordinates) {
    const { lat, lon } = coordinates;
    // Make grant access container invisible
    grantaccesscontainer.classList.remove("active");
    // Make loader visible
    loadingscreen.classList.add("active");
    // API call
    try {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`);
        const data = await response.json();
        loadingscreen.classList.remove("active");
        userinfocontainer.classList.add("active");
        renderweatherinfo(data);
    } catch (err) {
        loadingscreen.classList.remove("active");
        console.error(err);
    }
}

async function fetchsearchweatherinfo(city) {
    loadingscreen.classList.add("active");
    userinfocontainer.classList.remove("active");
    grantaccesscontainer.classList.remove("active");
    const errorContainer = document.querySelector("[data-error='error-container']");
    const errorMessage = document.querySelector("[data-error-message='error-message']");

    try {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`);
        
        // Check for 404 response
        if (response.status === 404) {
            loadingscreen.classList.remove("active");
            errorMessage.innerHTML = "City not found. Please try again.";
            errorContainer.classList.add("active");
            return;
        }

        const data = await response.json();
        loadingscreen.classList.remove("active");
        userinfocontainer.classList.add("active");
        errorContainer.classList.remove("active"); // Hide error message if any
        renderweatherinfo(data);
    } catch (err) {
        loadingscreen.classList.remove("active");
        errorMessage.innerHTML = "An error occurred. Please try again.";
        errorContainer.classList.add("active");
        console.error(err);
    }
}


function renderweatherinfo(weatherinfo) {
    // Fetch elements
    const cityname = document.querySelector("[data-cityname]");
    const countryicon = document.querySelector("[data-countryicon]");
    const desc = document.querySelector("[data-weatherdesc]");
    const weathericon = document.querySelector("[data-weathericon]");
    const temp = document.querySelector("[data-temp]");
    const windspeed = document.querySelector("[data-windspeed]");
    const humidity = document.querySelector("[data-humidity]");
    const cloudiness = document.querySelector("[data-cloudiness]");

    // Check if elements exist before setting properties
    if (cityname) cityname.innerHTML = weatherinfo?.name;
    if (countryicon) countryicon.src = `https://flagcdn.com/144x108/${weatherinfo?.sys?.country.toLowerCase()}.png`;
    if (desc) desc.innerHTML = weatherinfo?.weather?.[0]?.description;
    if (weathericon) weathericon.src = `http://openweathermap.org/img/w/${weatherinfo?.weather?.[0]?.icon}.png`;
    if (temp) temp.innerHTML = `${weatherinfo?.main?.temp} °C`;
    if (windspeed) windspeed.innerHTML = `${weatherinfo?.wind?.speed} m/s`;
    if (humidity) humidity.innerHTML = `${weatherinfo?.main?.humidity}%`;
    if (cloudiness) cloudiness.innerHTML = `${weatherinfo?.clouds?.all}%`;
}

function getlocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showposition);
    } else {
        alert("Geolocation is not supported by this browser.");
    }
}

function showposition(position) {
    const usercoordinates = {
        lat: position.coords.latitude,
        lon: position.coords.longitude,
    };
    sessionStorage.setItem("user-coordinates", JSON.stringify(usercoordinates));
    fetchuserweatherinfobycoordinates(usercoordinates);
}

const grantaccessbutton = document.querySelector("[data-grantaccess]");
grantaccessbutton.addEventListener("click", getlocation);

const searchinput = document.querySelector("[data-searchinput]");

searchform.addEventListener("submit", (e) => {
    e.preventDefault();
    let cityname = searchinput.value.trim();
    const errorContainer = document.querySelector("[data-error='error-container']");
    errorContainer.classList.remove("active"); // Hide error message before new search
    if (cityname === "") {
        return;
    } else {
        fetchsearchweatherinfo(cityname);
    }
});

