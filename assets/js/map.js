function initMap() {

  /* ------------------------------- map options ------------------------------ */
  let options = {
      zoom: 14,
      center: { lat: 59.76234722351998, lng: 18.698235602540187 },
  };

  /* ------------------------------ generate map ------------------------------ */
  let map = new google.maps.Map(document.getElementById("map"), options);

  /* ------------------------------ markers array ----------------------------- */
  let markers = [
      {
          coords: { lat: 59.76234722351998, lng: 18.698435602540187 },
          iconImage: "assets/images/restaurant-pin.png",
          content: "<h1>Poop</h1>",
      },
      {
          coords: { lat: 59.76734722351998, lng: 18.698235602540187 },
          content: "<h1>Poop</h1>",
      },
      {
          coords: { lat: 59.76664722351998, lng: 18.698235602540187 },
      },
  ];

  /* --------------------------- loop through array --------------------------- */
  for (let i = 0; i < markers.length; i++) {
      addMarker(markers[i]);
  }

  /* --------------------------- add marker function -------------------------- */
  function addMarker(props) {
      let marker = new google.maps.Marker({
          position: props.coords,
          map: map,
      });

      /* ------------------------ check and set custom icon ----------------------- */
      if (props.iconImage) {
          marker.setIcon(props.iconImage);
      }

      /* ------------------------ check for content window ------------------------ */
      if (props.content) {
          let infoWindow = new google.maps.InfoWindow({
              content: props.content,
          });

          marker.addListener("click", function () {
              infoWindow.open(map, marker);
          });
      }
  }
}

