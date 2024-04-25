const mapContainer = document.getElementById("map");
function initMap() {
  const location = { lat: -25, lng: 130 };

  map = new google.maps.Map(mapContainer, {
    center: location,
    zoom: 8,
  });
}

// const libraryAddress = "SMK Negeri 4 Kota TangerangKyi";
//   const libraryGeocoder = new google.maps.Geocoder();
//   let location;
//   libraryGeocoder.geocode({ address: libraryAddress }, (result, status) => {
//     if (status === "OK" && result.length) {
//       console.log(result[0].geometry.location);
//       location = result[0].geometry.location;
//     }
//   });
