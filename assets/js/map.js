var map;
var infowindow;

function initMap() {
  var norrtalje = {lat: 59.76234722351998, lng: 18.698235602540187};

  map = new google.maps.Map(document.getElementById('map'), {
    center: norrtalje,
    zoom: 14
  });

  infowindow = new google.maps.InfoWindow();

  var service = new google.maps.places.PlacesService(map);
  service.nearbySearch({
    location: norrtalje,
    radius: 2000,
    keyword: 'restaurant'
  }, callback);
}

function callback(results, status) {
  if (status === google.maps.places.PlacesServiceStatus.OK) {
    console.log(results);
    for (var i = 0; i < results.length; i++) {
      
      createMarker(results[i]);
    }
  }
}

function createMarker(place) {
  var placeLoc = place.geometry.location;
  var marker = new google.maps.Marker({
    map: map,
    position: place.geometry.location
  });

  google.maps.event.addListener(marker, 'click', function() {
    infowindow.setContent(place.name);
    infowindow.open(map, this);
 });
}



// function callback(results, status) {
//   if (status == google.maps.places.PlacesServiceStatus.OK) {
//     for (var i = 0; i < results.length; i++) {
//       createMarker(results[i]);
//     }
//   }
// }
    
    
    // let pos;
    // let map;
    // function initMap() {
    //     // Set the default location and initialize all variables
    //     pos = {lat: 59.76234722351998, lng: 18.698235602540187};
    //     map = new google.maps.Map(document.getElementById('map'), {
    //         center: pos,
    //         zoom: 13
    //     });
    // }

//       map = new google.maps.Map(document.getElementById('map'), options);

//   let input = document.getElementById('search');
//   let searchBox = new google.maps.places.SearchBox(input);

//   map.addListener('bounds_changed', function() {
//     searchBox.setBounds(map.getBounds());
//   });

//   let markers = [];
  
//   searchBox.addListener('places_changed', function () {
//     let places = searchBox.getPlaces();

//     if (places.length == 0)
//       return;

//     markers.forEach(function (m) { m.setMap(null); });
//     markers = [];

//     let bounds = new google.maps.LatLngBounds();
//     places.forEach(function(p) {
//       if (!p.geometry)
//         return;

//       markers.push(new google.maps.Marker({
//         map: map,
//         title: p.name,
//         position: p.geometry.location
//       }));

//       if (p.geometry.viewport)
//         bounds.union(p.geometry.viewport);
//       else
//         bounds.extend(p.geometry.location);
//     });
    
//     map.fitBounds(bounds);
//   });

  
// Perform a Places Nearby Search Request
// const placesSearch = (keyword) => {
//   let request = {
//     bounds: map.getBounds(),
//     keyword: keyword,
//   };
//   service = new google.maps.places.PlacesService(map);
//   service.nearbySearch(request, callBack);
// };

// const callBack = (results, status) => {
//   /*first remove previous clusters */
//   removePreviousCluster();
//   if (status == google.maps.places.PlacesServiceStatus.OK) {
//     createMarkers(results);
//     markerCluster = new MarkerClusterer(map, markers, {
//       imagePath:
//         "https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m",
//     });
//   } else {
//     alert(
//       "Something went wrong. Please contact us so we can look into this issue."
//     );
//   }
// };

// const createMarkers = (places) => {
//   /* first remove previous markers*/
//   // removePreviousMarkers();
//   places.forEach((place) => {
//     let marker = new google.maps.Marker({
//       position: place.geometry.location,
//       map: map,
//       title: place.name,
//       animation: google.maps.Animation.DROP,
//     });
//     /* From stack overflow push markers into an array to be used in the markerClusterer function */
//     markers.push(marker);
//     /* adds and event listener for each marker to show its details */
//     google.maps.event.addListener(marker, "click", () => {
//       let request = {
//         placeId: place.place_id,
//         fields: [
//           "name",
//           "formatted_address",
//           "geometry",
//           "rating",
//           "website",
//           "photos",
//         ],
//       };
//       service.getDetails(request, (placeResult, status) => {
//         showDetails(placeResult, marker, status);
//       });
//     });
//   });
// };

// /* Event listeners for each button to make the search */
// document.getElementById("shopping-btn").addEventListener("click", () => {
//   placesSearch("shopping");
// });
// document.getElementById("parks-btn").addEventListener("click", () => {
//   placesSearch("parks");
// });
// document.getElementById("restaurant-btn").addEventListener("click", () => {
//   placesSearch("restaurant");
// });
// // },