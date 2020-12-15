function initMap() {

  /* ------------------------------- map options ------------------------------ */
  let options = {
      zoom: 14,
      center: { lat: 59.75942851128388, lng: 18.71178679288917 },
  };

  /* ------------------------------ generate map ------------------------------ */
  let map = new google.maps.Map(document.getElementById("map"), options);

  /* ------------------------------ markers array ----------------------------- */
  let markers = [
      {
          coords: { lat: 59.75610989844251, lng: 18.722778964056698 },
          type: "Restaurant",
          iconImage: "assets/images/restaurant-pin.png",
          content: "<h1>Havspiren</h1> <br> <p>Rating:4.0</p>"
      },
      {
          coords: { lat: 59.758203851800474, lng: 18.709756839272078 },
          type: "Restaurant",
          iconImage: "assets/images/restaurant-pin.png",
          content: "<h1>Salt & Sea</h1> <br> <p>Rating:4.2</p>"
      },
      {
        coords: { lat: 59.75792083803483, lng: 18.70894949435303},
        type: "Restaurant",
        iconImage: "assets/images/restaurant-pin.png",
        content: "<h1>S/S Norrtelje</h1> <br> <p>Rating:4.0</p>"
      },
      {
        coords: { lat: 59.75811278272289, lng: 18.708442999033014},
        type: "Restaurant",
        iconImage: "assets/images/restaurant-pin.png",
        content: "<h1>Den Gyllene Räven</h1> <br> <p>Rating:4.1</p>"
      },
      {
        coords: { lat: 59.75748731062395, lng: 18.705404056234435},
        type: "Restaurant",
        iconImage: "assets/images/restaurant-pin.png",
        content: "<h1>Pinchos</h1> <br> <p>Rating:4.0</p>"
      },
      {
        coords: { lat: 59.75730575857509, lng: 18.705408498652393},
        type: "Restaurant",
        iconImage: "assets/images/restaurant-pin.png",
        content: "<h1>Harry's</h1> <br> <p>Rating:4.0</p>"
      },
      {
        coords: { lat: 59.75659091174056, lng: 18.705591453090186},
        type: "Restaurant",
        iconImage: "assets/images/restaurant-pin.png",
        content: "<h1>Ed's Burgers's</h1> <br> <p>Rating:4.3</p>"
      },
      {
        coords: { lat: 59.75665339360885, lng: 18.70522600210995},
        type: "Restaurant",
        iconImage: "assets/images/restaurant-pin.png",
        content: "<h1>Asien Hamn</h1> <br> <p>Rating:4.1</p>"
      },
      {
        coords: { lat: 59.75687390092211, lng: 18.70414907577552},
        type: "Restaurant",
        iconImage: "assets/images/restaurant-pin.png",
        content: "<h1>Poke Burger</h1> <br> <p>Rating:4.5</p>"
      },
      {
        coords: { lat: 59.75666671956848, lng: 18.703888272860844},
        type: "Restaurant",
        iconImage: "assets/images/restaurant-pin.png",
        content: "<h1>Little Dublin</h1> <br> <p>Rating:3.7</p>"
      },
      {
        coords: { lat: 59.757192111252735, lng: 18.700829967871435},
        type: "Restaurant",
        iconImage: "assets/images/restaurant-pin.png",
        content: "<h1>Kwang Chow</h1> <br> <p>Rating:3.8</p>"
      },
      {
        coords: { lat: 59.757192111252735, lng: 18.700829967871435},
        type: "Restaurant",
        iconImage: "assets/images/restaurant-pin.png",
        content: "<h1>Kwang Chow</h1> <br> <p>Rating:3.8</p>"
      },
      {
        coords: { lat: 59.75706816262207, lng: 18.70329558849524},
        type: "Restaurant",
        iconImage: "assets/images/restaurant-pin.png",
        content: "<h1>Taco Bar</h1> <br> <p>Rating:3.5</p>"
      },
      {
        coords: { lat: 59.7589454960521, lng: 18.70349960401706},
        type: "Restaurant",
        iconImage: "assets/images/restaurant-pin.png",
        content: "<h1>Lilys Kök</h1> <br> <p>Rating:3.5</p>"
      },
      {
        coords: { lat: 59.75716171517352, lng: 18.698004931226563},
        type: "Restaurant",
        iconImage: "assets/images/restaurant-pin.png",
        content: "<h1>Kapellet</h1> <br> <p>Rating:4.4</p>"
      },
      {
        coords: { lat: 59.75692732670315, lng: 18.69618371129288},
        type: "Restaurant",
        iconImage: "assets/images/restaurant-pin.png",
        content: "<h1>ANTEP's</h1> <br> <p>Rating:4.2</p>"
      },
      {
        coords: { lat: 59.75692732670315, lng: 18.69618371129288},
        type: "Restaurant",
        iconImage: "assets/images/restaurant-pin.png",
        content: "<h1>ANTEP's</h1> <br> <p>Rating:4.2</p>"
      },
      {
        coords: { lat: 59.75463586161074, lng: 18.716471140214868},
        type: "Accomodation",
        iconImage: "assets/images/hotel-pin.png",
        content: "<h1>Granparken</h1> <br> <p>Rating:4.3</p>"
      },
      {
        coords: { lat: 59.746382872877014, lng: 18.6874437333132},
        type: "Accomodation",
        iconImage: "assets/images/hotel-pin.png",
        content: "<h1>Hotell Roslagen</h1> <br> <p>Rating:3.7</p>"
      },
      {
        coords: { lat: 59.75798645227602, lng: 18.707302808908896},
        type: "Accomodation",
        iconImage: "assets/images/hotel-pin.png",
        content: "<h1>Hotell Roslagen</h1> <br> <p>Rating:3.7</p>"
      },
      {
        coords: { lat: 59.758614954555966, lng: 18.699488863378857},
        type: "Accomodation",
        iconImage: "assets/images/hotel-pin.png",
        content: "<h1>Berlings B&B</h1> <br> <p>Rating:4.9</p>"
      },
      {
        coords: { lat: 59.76107954182671, lng: 18.70144017043721},
        type: "Accomodation",
        iconImage: "assets/images/hotel-pin.png",
        content: "<h1>Sven Fredriksson B&B</h1> <br> <p>Rating:4.4</p>"
      },
      {
        coords: { lat: 59.76304691004011, lng: 18.6714772427103},
        type: "Accomodation",
        iconImage: "assets/images/camping-pin.png",
        content: "<h1>Norrtälje Camping</h1> <br> <p>Rating:4.4</p>"
      },
      {
        coords: { lat: 59.756935432379045, lng: 18.712592123409696},
        type: "Activities",
        iconImage: "assets/images/park-pin.png",
        content: "<h1>Societetsparken</h1> <br> <p>Rating:4.2</p> <br> <p>Park</p>"
      },
      {
        coords: { lat: 59.75292287490571, lng: 18.729321035281842},
        type: "Activities",
        iconImage: "assets/images/beach-pin.png",
        content: "<h1>Kärleksuddens Beach</h1> <br> <p>Rating:3.7</p> <br> <p>Park</p>"
      },
      {
        coords: { lat: 59.75292287490571, lng: 18.729321035281842},
        type: "Activities",
        iconImage: "assets/images/beach-pin.png",
        content: "<h1>Lommarbadet</h1> <br> <p>Rating:3.9</p> <br> <p>Beach</p>"
      },
      {
        coords: { lat: 59.75467589772488, lng: 18.7264464046818},
        type: "Activities",
        iconImage: "assets/images/boat-pin.png",
        content: "<h1>Norrtälje Sailing Club</h1> <br> <p>Rating:4.5</p> <br> <p>Park</p>"
      },
    //   {
    //     coords: { lat: 59.75711375676702, lng: 18.700849413815916},
    //     type: "Activities",
    //     iconImage: "assets/images/boat-pin.png",
    //     content: "<h1>Norrtälje Town Center</h1> <br> <p>Shopping Area</p>"
    //   },
    //   {
    //     coords: { lat: 59.75467589772488, lng: 18.7264464046818},
    //     type: "Activities",
    //     iconImage: "assets/images/boat-pin.png",
    //     content: "<h1>Norrteljeporten</h1> <br> <p>Shopping Mall</p>"
    //   },
      {
        coords: { lat: 59.75467589772488, lng: 18.7264464046818},
        type: "Activities",
        iconImage: "assets/images/sport-pin.png",
        content: "<h1>Norrtelje Billiards</h1> <br> <p>Rating:4.7</p> <br> <p>Pool Hall</p>"
      },
      {
        coords: { lat: 59.751897034758116, lng: 18.69764283293879},
        type: "Activities",
        iconImage: "assets/images/sport-pin.png",
        content: "<h1>Norrtälje Sportcentrum</h1> <br> <p>Rating:4.0</p> <br> <p>Sports Complex</p>"
      },
      {
        coords: { lat: 59.7704989090446, lng: 18.69422957505761},
        type: "Activities",
        iconImage: "assets/images/sport-pin.png",
        content: "<h1>Roslagsbowling</h1> <br> <p>Rating:4.4</p> <br> <p>Bowling Alley</p>"
      },
    //   {
    //     coords: { lat: 59.77555542921295, lng: 18.6891789760667},
    //     type: "Activities",
    //     iconImage: "assets/images/park-pin.png",
    //     content: "<h1>Färsna Gård</h1> <br> <p>Rating:3.9</p> <br> <p>Farm and Play Area</p>"
    //   },
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

