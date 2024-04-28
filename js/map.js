function initMap() {
  const location = { lat: -25, lng: 130 };
  const mapSelector = document.getElementById("map");
  map = new google.maps.Map(mapSelector, {
    zoom: 4,
    center: location,
  });

  const marker = new google.maps.Marker({
    position: location,
    map: map,
  });
}
