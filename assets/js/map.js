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
          coords: { lat: 59.75610989844251, lng: 18.722778964056698 },
          iconImage: "assets/images/restaurant-pin.png",
          content: "<h1>Havspiren</h1> <br> <p>Rating:4.0</p>"
      },
      {
          coords: { lat: 59.758203851800474, lng: 18.709756839272078 },
          iconImage: "assets/images/restaurant-pin.png",
          content: "<h1>Salt & Sea</h1> <br> <p>Rating:4.2</p>"
      },
      {
        coords: { lat: 59.75792083803483, lng: 18.70894949435303},
        iconImage: "assets/images/restaurant-pin.png",
        content: "<h1>S/S Norrtelje</h1> <br> <p>Rating:4.0</p>"
      },
      {
        coords: { lat: 59.75811278272289, lng: 18.708442999033014},
        iconImage: "assets/images/restaurant-pin.png",
        content: "<h1>Den Gyllene Räven</h1> <br> <p>Rating:4.1</p>"
      },
      {
        coords: { lat: 59.75748731062395, lng: 18.705404056234435},
        iconImage: "assets/images/restaurant-pin.png",
        content: "<h1>Pinchos</h1> <br> <p>Rating:4.0</p>"
      },
      {
        coords: { lat: 59.75730575857509, lng: 18.705408498652393},
        iconImage: "assets/images/restaurant-pin.png",
        content: "<h1>Harry's</h1> <br> <p>Rating:4.0</p>"
      },
      {
        coords: { lat: 59.75659091174056, lng: 18.705591453090186},
        iconImage: "assets/images/restaurant-pin.png",
        content: "<h1>Ed's Burgers's</h1> <br> <p>Rating:4.3</p>"
      },
      {
        coords: { lat: 59.75665339360885, lng: 18.70522600210995},
        iconImage: "assets/images/restaurant-pin.png",
        content: "<h1>Asien Hamn</h1> <br> <p>Rating:4.1</p>"
      },
      {
        coords: { lat: 59.75687390092211, lng: 18.70414907577552},
        iconImage: "assets/images/restaurant-pin.png",
        content: "<h1>Poke Burger</h1> <br> <p>Rating:4.5</p>"
      },
      {
        coords: { lat: 59.75666671956848, lng: 18.703888272860844},
        iconImage: "assets/images/restaurant-pin.png",
        content: "<h1>Little Dublin</h1> <br> <p>Rating:3.7</p>"
      },
      {
        coords: { lat: 59.757192111252735, lng: 18.700829967871435},
        iconImage: "assets/images/restaurant-pin.png",
        content: "<h1>Kwang Chow</h1> <br> <p>Rating:3.8</p>"
      },
      {
        coords: { lat: 59.757192111252735, lng: 18.700829967871435},
        iconImage: "assets/images/restaurant-pin.png",
        content: "<h1>Kwang Chow</h1> <br> <p>Rating:3.8</p>"
      },
      {
        coords: { lat: 59.75706816262207, lng: 18.70329558849524},
        iconImage: "assets/images/restaurant-pin.png",
        content: "<h1>Taco Bar</h1> <br> <p>Rating:3.5</p>"
      },
      {
        coords: { lat: 59.7589454960521, lng: 18.70349960401706},
        iconImage: "assets/images/restaurant-pin.png",
        content: "<h1>Lilys Kök</h1> <br> <p>Rating:3.5</p>"
      },
      {
        coords: { lat: 59.75716171517352, lng: 18.698004931226563},
        iconImage: "assets/images/restaurant-pin.png",
        content: "<h1>Kapellet</h1> <br> <p>Rating:4.4</p>"
      },
      {
        coords: { lat: 59.75692732670315, lng: 18.69618371129288},
        iconImage: "assets/images/restaurant-pin.png",
        content: "<h1>ANTEP's</h1> <br> <p>Rating:4.2</p>"
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

