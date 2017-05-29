function initMap() {
    var labCoords = { lat: -12.1191427, lng: -77.0349046 };
    var map = new google.maps.Map(document.getElementById("map"), {
        center: labCoords,
        zoom: 19
    });
    var marker = new google.maps.Marker({
        position: labCoords,
        map: map
    });

}