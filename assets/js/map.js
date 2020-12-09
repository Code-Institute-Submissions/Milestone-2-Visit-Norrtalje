function initMap() {
      // Map options
      let options = {
        center:{lat: 59.76234722351998, lng: 18.698235602540187},
        zoom: 13,
      //   styles: [
      //     {featureType: 'poi.attraction',
      //     elementType: 'icon',
      //   stylers: [{color: '#0DA51F'}]
      // }]
      };

      const map = new google.maps.Map(document.getElementById('map'), options);
    }