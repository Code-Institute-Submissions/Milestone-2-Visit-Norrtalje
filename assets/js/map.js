function initMap() {
  /* ------------------------------- map options ------------------------------ */
    let options = {
      zoom: 14,
      center: {lat: 59.76234722351998, lng: 18.698235602540187}
    }
  /* --------------------------------- new map -------------------------------- */
    let map = new google.maps.Map(document.getElementById('map'), options);
  /* ------------------------------- add marker ------------------------------- */
  // let marker = new google.maps.Marker({
  //   position: {lat: 59.76234722351998, lng: 18.698235602540187},
  //   map: map
  //   // icon: 'assets/images/ban.png'
  //   });
  // let infoWindow = new google.maps.InfoWindow({
  //   content: '<h1>Poop</h1>'
  //   });
  
  // marker.addListener('click', function(){
  //   infoWindow.open(map, marker);
  //   });

  /* ------------------------------- add markers ------------------------------ */
  addMarker({
    pinpoint:{lat: 59.76234722351998, lng: 18.698235602540187}
    // iconImage: 'assets/images/ban.png'
  });
  addMarker({pinpoint:{lat: 59.76134722351998, lng: 18.698435602540187}});
  addMarker({pinpoint:{lat: 59.76144772351998, lng: 18.698565602540187}});
  /* --------------------------- add marker function -------------------------- */
  function addMarker(prop){
    let marker = new google.maps.Marker({
      position: prop.pinpoint,
      animation: google.maps.Animation.DROP,
      map: map,
      icon: prop.iconImage
    });
  }
  }