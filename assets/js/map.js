let pos;
    let map;
    function initMap() {
        // Set the default location and initialize all variables
        pos = {lat: 59.76234722351998, lng: 18.698235602540187};
        map = new google.maps.Map(document.getElementById('map'), {
            center: pos,
            zoom: 13
        });
    }

// function initMap() {
//       // Map options
//       let options = {
//         center:{lat: 59.76234722351998, lng: 18.698235602540187},
//         zoom: 13,
//       //   styles: [
//       //     {featureType: 'poi.attraction',
//       //     elementType: 'icon',
//       //   stylers: [{color: '#0DA51F'}]
//       // }]
//       };

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


//   getNearbyPlaces(pos);
  
//   function getNearbyPlaces(position) {
//     let request = {
//     location: position,
//     keyword: 'pizza'
//     };

//     service = new google.maps.places.PlacesService(map);
//     service.nearbySearch(request, nearbyCallback);
// }

// // Handle the results (up to 20) of the Nearby Search
// function nearbyCallback(results, status) {
//     if (status == google.maps.places.PlacesServiceStatus.OK) {
//     createMarkers(results);
//     }
// }

// }