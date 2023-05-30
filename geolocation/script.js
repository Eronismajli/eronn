function goFindMe() {
    const status = document.querySelector("#status")
    const mapLink = document.querySelector("#map-link")

    mapLink.href = '';
    status.textContent = ""

    function success(position){
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;  // deri ketu punuam oren e kaluar

        status.textContent = ""
        mapLink.href = `https://www.openstreetmap.org/#map=8/${latitude}/${longitude}`
        mapLink.textContent = `Latitude: ${latitude}°, Longitude: ${longitude}°`
    }
    function error(){
        status.textContent = "Unable to retrieve your location!";
    }
    if(!navigator.geolocation){
        status.textContent = "Geolocation is not supported by your browser.";
    } else {
        status.textContent = "Loading...";
        navigator.geolocation.getCurrentPosition(success, error);
    }
}
document.querySelector("#find-me").addEventListener("click", goFindMe);
