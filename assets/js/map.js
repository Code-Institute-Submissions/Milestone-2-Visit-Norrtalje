function initMap() {

  /* ------------------------------- map options ------------------------------ */
  let options = {
      zoom: 13,
      center: { lat: 59.76193085929391, lng: 18.6962071851466 },
  };

  /* ------------------------------ generate map ------------------------------ */
  let map = new google.maps.Map(document.getElementById("map"), options);

  /* ------------------------------ markers array ----------------------------- */
  let markers = [
      {
          coords: { lat: 59.75610989844251, lng: 18.722778964056698 },
          type: "Restaurant",
          iconImage: "assets/images/restaurant-pin.png",
          content: "<h6>Havspiren</h6> <br> <p>Rating:4.0</p> <br> <p>Restaurant</p>"
      },
      {
          coords: { lat: 59.758203851800474, lng: 18.709756839272078 },
          type: "Restaurant",
          iconImage: "assets/images/restaurant-pin.png",
          content: "<h6>Salt & Sea</h6> <br> <p>Rating:4.2</p> <br> <p>Restaurant</p>"
      },
      {
        coords: { lat: 59.75792083803483, lng: 18.70894949435303},
        type: "Restaurant",
        iconImage: "assets/images/restaurant-pin.png",
        content: "<h6>S/S Norrtelje</h6> <br> <p>Rating:4.0</p> <br> <p>Restaurant</p>"
      },
      {
        coords: { lat: 59.75811278272289, lng: 18.708442999033014},
        type: "Restaurant",
        iconImage: "assets/images/restaurant-pin.png",
        content: "<h6>Den Gyllene Räven</h6> <br> <p>Rating:4.1</p> <br> <p>Restaurant</p>"
      },
      {
        coords: { lat: 59.75748731062395, lng: 18.705404056234435},
        type: "Restaurant",
        iconImage: "assets/images/restaurant-pin.png",
        content: "<h6>Pinchos</h6> <br> <p>Rating:4.0</p> <br> <p>Restaurant</p>"
      },
      {
        coords: { lat: 59.75730575857509, lng: 18.705408498652393},
        type: "Restaurant",
        iconImage: "assets/images/restaurant-pin.png",
        content: "<h6>Harry's</h6> <br> <p>Rating:4.0</p> <br> <p>Restaurant</p>"
      },
      {
        coords: { lat: 59.75659091174056, lng: 18.705591453090186},
        type: "Restaurant",
        iconImage: "assets/images/restaurant-pin.png",
        content: "<h6>Ed's Burgers's</h6> <br> <p>Rating:4.3</p> <br> <p>Restaurant</p>"
      },
      {
        coords: { lat: 59.75665339360885, lng: 18.70522600210995},
        type: "Restaurant",
        iconImage: "assets/images/restaurant-pin.png",
        content: "<h6>Asien Hamn</h6> <br> <p>Rating:4.1</p> <br> <p>Restaurant</p>"
      },
      {
        coords: { lat: 59.75687390092211, lng: 18.70414907577552},
        type: "Restaurant",
        iconImage: "assets/images/restaurant-pin.png",
        content: "<h6>Poke Burger</h6> <br> <p>Rating:4.5</p> <br> <p>Restaurant</p>"
      },
      {
        coords: { lat: 59.75666671956848, lng: 18.703888272860844},
        type: "Restaurant",
        iconImage: "assets/images/restaurant-pin.png",
        content: "<h6>Little Dublin</h6> <br> <p>Rating:3.7</p> <br> <p>Restaurant</p>"
      },
      {
        coords: { lat: 59.757192111252735, lng: 18.700829967871435},
        type: "Restaurant",
        iconImage: "assets/images/restaurant-pin.png",
        content: "<h6>Kwang Chow</h6> <br> <p>Rating:3.8</p> <br> <p>Restaurant</p>"
      },
      {
        coords: { lat: 59.757192111252735, lng: 18.700829967871435},
        type: "Restaurant",
        iconImage: "assets/images/restaurant-pin.png",
        content: "<h6>Kwang Chow</h6> <br> <p>Rating:3.8</p> <br> <p>Restaurant</p>"
      },
      {
        coords: { lat: 59.75706816262207, lng: 18.70329558849524},
        type: "Restaurant",
        iconImage: "assets/images/restaurant-pin.png",
        content: "<h6>Taco Bar</h6> <br> <p>Rating:3.5</p> <br> <p>Restaurant</p>"
      },
      {
        coords: { lat: 59.7589454960521, lng: 18.70349960401706},
        type: "Restaurant",
        iconImage: "assets/images/restaurant-pin.png",
        content: "<h6>Lilys Kök</h6> <br> <p>Rating:3.5</p> <br> <p>Restaurant</p>"
      },
      {
        coords: { lat: 59.75716171517352, lng: 18.698004931226563},
        type: "Restaurant",
        iconImage: "assets/images/restaurant-pin.png",
        content: "<h6>Kapellet</h6> <br> <p>Rating:4.4</p> <br> <p>Restaurant</p>"
      },
      {
        coords: { lat: 59.75692732670315, lng: 18.69618371129288},
        type: "Restaurant",
        iconImage: "assets/images/restaurant-pin.png",
        content: "<h6>ANTEP's</h6><p>Rating:4.2</p><p>Restaurant</p>"
      },
      {
        coords: { lat: 59.75692732670315, lng: 18.69618371129288},
        type: "Restaurant",
        iconImage: "assets/images/restaurant-pin.png",
        content: "<h6>ANTEP's</h6> <br> <p>Rating:4.2</p> <br> <p>Restaurant</p>"
      },
      {
        coords: { lat: 59.75463586161074, lng: 18.716471140214868},
        type: "Accomodation",
        iconImage: "assets/images/hotel-pin.png",
        content: "<h6>Granparken</h6> <br> <p>Rating:4.3</p> <br> <p>Accomodation</p>"
      },
      {
        coords: { lat: 59.746382872877014, lng: 18.6874437333132},
        type: "Accomodation",
        iconImage: "assets/images/hotel-pin.png",
        content: "<h6>Hotell Roslagen</h6> <br> <p>Rating:3.7</p> <br> <p>Accomodation</p>"
      },
      {
        coords: { lat: 59.75798645227602, lng: 18.707302808908896},
        type: "Accomodation",
        iconImage: "assets/images/hotel-pin.png",
        content: "<h6>Hotell Roslagen</h6> <br> <p>Rating:3.7</p> <br> <p>Accomodation</p>"
      },
      {
        coords: { lat: 59.758614954555966, lng: 18.699488863378857},
        type: "Accomodation",
        iconImage: "assets/images/hotel-pin.png",
        content: "<h6>Berlings B&B</h6> <br> <p>Rating:4.9</p> <br> <p>Accomodation</p>"
      },
      {
        coords: { lat: 59.76107954182671, lng: 18.70144017043721},
        type: "Accomodation",
        iconImage: "assets/images/hotel-pin.png",
        content: "<h6>Sven Fredriksson B&B</h6> <br> <p>Rating:4.4</p> <br> <p>Accomodation</p>"
      },
      {
        coords: { lat: 59.76304691004011, lng: 18.6714772427103},
        type: "Accomodation",
        iconImage: "assets/images/camping-pin.png",
        content: "<h6>Norrtälje Camping</h6> <br> <p>Rating:4.4</p> <br> <p>Accomodation</p>"
      },
      {
        coords: { lat: 59.756935432379045, lng: 18.712592123409696},
        type: "Activities",
        iconImage: "assets/images/park-pin.png",
        content: "<h6>Societetsparken</h6> <br> <p>Rating:4.2</p> <br> <p>Park</p>"
      },
      {
        coords: { lat: 59.75292287490571, lng: 18.729321035281842},
        type: "Activities",
        iconImage: "assets/images/beach-pin.png",
        content: "<h6>Kärleksuddens Beach</h6> <br> <p>Rating:3.7</p> <br> <p>Beach</p>"
      },
      {
        coords: { lat: 59.75840742497105, lng: 18.675355689333017},
        type: "Activities",
        iconImage: "assets/images/beach-pin.png",
        content: "<h6>Lommarbadet</h6> <br> <p>Rating:3.9</p> <br> <p>Beach</p>"
      },
      {
        coords: { lat: 59.75467589772488, lng: 18.7264464046818},
        type: "Activities",
        iconImage: "assets/images/boat-pin.png",
        content: "<h6>Norrtälje Sailing Club</h6> <br> <p>Rating:4.5</p> <br> <p>Leisure Club</p>"
      },
      {
        coords: { lat: 59.75711375676702, lng: 18.700849413815916},
        type: "Activities",
        iconImage: "assets/images/shopping-bag-pin.png",
        content: "<h6>Norrtälje Town Center</h6> <br> <p>Shopping Area</p>"
      },
      {
        coords: { lat: 59.7463776363424, lng: 18.6788479242845},
        type: "Activities",
        iconImage: "assets/images/shopping-bag-pin.png",
        content: "<h6>Norrteljeporten</h6> <br> <p>Shopping Mall</p>"
      },
    {
            coords: { lat: 59.751404198850956, lng: 18.69393803555879},
            type: "Activities",
            iconImage: "assets/images/shopping-bag-pin.png",
            content: "<h6>Flygfältet</h6> <br> <p>Shopping Mall</p>"
          },
      {
        coords: { lat: 59.75509488579032, lng: 18.69629167046601},
        type: "Activities",
        iconImage: "assets/images/sport-pin.png",
        content: "<h6>Norrtelje Billiards</h6> <br> <p>Rating:4.7</p> <br> <p>Pool Hall</p>"
      },
      {
        coords: { lat: 59.751897034758116, lng: 18.69764283293879},
        type: "Activities",
        iconImage: "assets/images/sport-pin.png",
        content: "<h6>Norrtälje Sportcentrum</h6> <br> <p>Rating:4.0</p> <br> <p>Sports Complex</p>"
      },
      {
        coords: { lat: 59.7704989090446, lng: 18.69422957505761},
        type: "Activities",
        iconImage: "assets/images/sport-pin.png",
        content: "<h6>Roslagsbowling</h6> <br> <p>Rating:4.4</p> <br> <p>Bowling Alley</p>"
      },
      {
        coords: { lat: 59.77555542921295, lng: 18.6891789760667},
        type: "Activities",
        iconImage: "assets/images/park-pin.png",
        content: "<h6>Färsna Gård</h6> <br> <p>Rating:3.9</p> <br> <p>Farm and Play Area</p>"
      },
      {
        coords: { lat: 59.75795270487724, lng: 18.702662441877123},
        type: "Activities",
        iconImage: "assets/images/video-pin.png",
        content: "<h6>Royal Svenska Bio</h6> <br> <p>Rating:4.1</p> <br> <p>Cinema</p>"
      },
      {
        coords: { lat: 59.7548853079895, lng: 18.700931221384575},
        type: "Activities",
        iconImage: "assets/images/sport-pin.png",
        content: "<h6>Norrtälje Bathhouse</h6> <br> <p>Rating:4.4</p> <br> <p>Swimming facility</p>"
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

