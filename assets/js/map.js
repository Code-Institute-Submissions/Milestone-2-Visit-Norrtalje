let map;
let infoObj = [];

// Array of accommodation
let accommodation = [
        {
            coords: {
                lat: 59.75463586161074,
                lng: 18.716471140214868,
            },
            title: "accommodation",
            content: "<h6>Granparken</h6> <br> <p>Gjuterivägen 10, 761 40 Norrtälje</p> <br> <p>+4617610354</p> <br> <p>http://granparken.com/</p>",
        },
        {
            coords: {
                lat: 59.746382872877014,
                lng: 18.6874437333132,
            },
            title: "accommodation",
            content: "<h6>Hotell Roslagen</h6> <br> <p>Stockholmsvägen 53, 761 43 Norrtälje</p> <br> <p>+4617617180</p> <br> <p>http://www.hotellroslagen.se/</p>",
        },
        {
            coords: {
                lat: 59.75798645227602,
                lng: 18.707302808908896,
            },
            title: "accommodation",
            content: "<h6>Åtellet Hotell</h6> <br> <p>Sjötullsgatan 10, 761 30 Norrtälje</p> <br> <p>+46176700450</p> <br> <p>http://www.atellet.se/</p>",
        },
        {
            coords: {
                lat: 59.758614954555966,
                lng: 18.699488863378857,
            },
            title: "accommodation",
            content: "<h6>Berlings B&B</h6> <br> <br> <p>Hantverkaregatan 19, 761 30 Norrtälje</p> <br> <p>+46704888786</p> <br> <p>http://www.berglingsbedandbreakfast.com/</p>",
        },
        {
            coords: {
                lat: 59.76107954182671,
                lng: 18.70144017043721,
            },
            title: "accommodation",
            content: "<h6>Sven Fredriksson B&B</h6> <br> <p>Vasagatan 4G, 761 31 Norrtälje</p> <br> <p>+46702094243</p> <br> <p>http://www.svenfredriksson.com/</p>",
        },
        {
            coords: {
                lat: 59.76304691004011,
                lng: 18.6714772427103,
            },
            title: "accommodation",
            content: "<h6>Norrtälje Camping</h6> <br> <p>Lommarvägen 42, 761 52 Norrtälje</p> <br> <p>+46176209210</p> <br> <p>http://www.norrtaljecamping.com/</p>",}
        ];
    
    // Array of restaurants
    let restaurant = [
        {
            coords: {
                lat: 59.75692732670315,
                lng: 18.69618371129288,
            },
            title: "restaurant",
            content: "<h6>ANTEP's</h6> <br> <p>Esplanaden 5, 761 45 Norrtälje</p> <br> <p>+4617610130</p> <br> <p>http://www.anteps.se/</p>",
        },
        {
            coords: {
                lat: 59.758203851800474,
                lng: 18.709756839272078,
            },
            title: "restaurant",
            content: "<h6>Salt & Sea</h6> <br> <p>Ångbåtsgatan 2, 761 32 Norrtälje</p> <br> <p>+4617655500</p> <br> <phttp://saltandsea.se/</p>",
        },
        {
            coords: {
                lat: 59.75792083803483,
                lng: 18.70894949435303,
            },
            title: "restaurant",
            content: "<h6>S/S Norrtelje</h6> <br> <p>Hamnpromenaden 2, 761 33 Norrtälje</p> <br> <p>+4617619140</p> <br> <p>https://www.ssnorrtelje.se/</p>",
        },
        {
            coords: {
                lat: 59.75811278272289,
                lng: 18.708442999033014,
            },
            title: "restaurant",
            content: "<h6>Den Gyllene Räven</h6> <br> <p>Hamnplan 1, 761 30 Norrtälje</p> <br> <p>+4617657771</p> <br> <p>https://dengylleneraven.se/</p>",
        },
        {
            coords: {
                lat: 59.75748731062395,
                lng: 18.705404056234435,
            },
            title: "restaurant",
            content: "<h6>Pinchos</h6> <br> <br> <p>Lilla Brogatan 4, 761 30 Norrtälje</p> <br> <p>+46709261694</p> <br> <p>http://www.pinchos.se/</p>",
        },
        {
            coords: {
                lat: 59.75730575857509,
                lng: 18.705408498652393,
            },
            title: "restaurant",
            content: "<h6>Harry's</h6> <br> <p>Lilla Brogatan 2, 761 30 Norrtälje</p> <br> <p>+4617619900</p> <br> <p>https://www.harrys.se/restauranger/norrtalje/</p>",
        },
        {
            coords: {
                lat: 59.75659091174056,
                lng: 18.705591453090186,
            },
            title: "restaurant",
            content: "<h6>Ed's Burgers's</h6> <br> <p>Tillfällegatan 4, 761 30 Norrtälje</p> <br> <p>+46176277792</p> <br> <p>http://www.edsburgers.se/</p>",
        },
        {
            coords: {
                lat: 59.75665339360885,
                lng: 18.70522600210995,
            },
            title: "restaurant",
            content: "<h6>Asian Hamn</h6> <br> <p>Posthusgatan 7, 761 30 Norrtälje</p> <br> <p>+46703737890</p> <br> <p>http://www.asianhamn.se/</p>",
        },
        {
            coords: {
                lat: 59.75687390092211,
                lng: 18.70414907577552,
            },
            title: "restaurant",
            content: "<h6>Poke Burger</h6> <br> <p>Posthusgatan 5, 761 30 Norrtälje</p> <br> <p>+468261103</p> <br> <p>http://www.pokeburger.se/</p>",
        },
        {
            coords: {
                lat: 59.757192111252735,
                lng: 18.700829967871435,
            },
            title: "restaurant",
            content: "<h6>Kwang Chow</h6> <br> <p>Tullportsgatan 12, 761 30 Norrtälje</p> <br> <p>+46176223950</p> <br> <p>http://kinarestaurang.se/</p>",
        },
        {
            coords: {
                lat: 59.75893086109899,
                lng: 18.703008708806884,
            },
            title: "restaurant",
            content: "<h6>På Grillen</h6> <br> <p>Stora Brogatan 7A, 761 30 Norrtälje</p> <br> <p>+4617610733</p> <br> <p>http://www.pagrillen.se/</p>",
        },
        {
            coords: {
                lat: 59.75706816262207,
                lng: 18.70329558849524,
            },
            title: "restaurant",
            content: "<h6>Taco Bar</h6> <br> <p>Posthusgatan 1, 761 30 Norrtälje</p> <br> <p>+46176206995</p> <br> <p>http://www.tacobar.se/</p>",
        },
        {
            coords: {
                lat: 59.7589454960521,
                lng: 18.70349960401706,
            },
            title: "restaurant",
            content: "<h6>Lilys Kök</h6> <br> <p>Kyrkogatan 8, 761 30 Norrtälje</p> <br> <p>+46176225444</p>",
        },
        {
            coords: {
                lat: 59.75610989844251,
                lng: 18.722778964056698,
            },
            title: "restaurant",
            content: "<h6>Havspiren</h6> <br> <p>Badstugatan 10, 761 40 Norrtälje</p> <br> <p>+4617616220</p> <br> <p>http://www.havspiren.se/</p>",
        },
    ];
    
    // Array of activities
    let activities = [
        {
            coords: {
                lat: 59.75716171517352,
                lng: 18.698004931226563,
            },
            title: "bar",
            content: "<h6>Kapellet</h6> <br> <p>Sports Bar</p> <br> <p>Tullportsgatan 24, 761 30 Norrtälje</p> <br> <p>+46176224244</p> <br> <p>http://www.kapelletnorrtalje.se/</p>",
        },
        {
            coords: {
                lat: 59.759090460443666,
                lng: 18.702219352212374,
            },
            title: "bar",
            content: "<h6>DG's Sportsbar</h6> <br> <p>Sprts Bar</p> <br> <p>Danskes gränd 6, 761 30 Norrtälje</p> <br> <p>+4617615908</p> <br> <p>https://www.dgssportbar.se/startsida</p>",
        },
        {
            coords: {
                lat: 59.75728682442034,
                lng: 18.702591382973594,
            },
            title: "bar",
            content: "<h6>Vinbaren</h6> <br> <p>Wine Bar</p> <br> <p>Stora Torget 1, 761 30 Norrtälje</p> <br> <p>+46739369274</p>",
        },
        {
            coords: {
                lat: 59.75666693066083,
                lng: 18.703888440526757,
            },
            title: "bar",
            content: "<h6>Little Dublin</h6> <br> <p>Pub</p> <br> <p>Posthusgatan 8, 761 30 Norrtälje</p> <br> <p>+4617610240</p> <br> <p>http://www.littledublin.se/</p>",
        },
        {
            coords: {
                lat: 59.756935432379045,
                lng: 18.712592123409696,
            },
            title: "park",
            content: "<h6>Societetsparken</h6> <br> <p>Park</p> <br> <p>Gjuterivägen 1, 761 40 Norrtälje</p>",
        },
        {
            coords: {
                lat: 59.75292287490571,
                lng: 18.729321035281842,
            },
            title: "beach",
            content: "<h6>Kärleksuddens</h6> <br> <p>Beach</p> <br> <p>Villagatan 2, 761 40 Norrtälje</p>",
        },
        {
            coords: {
                lat: 59.75840742497105,
                lng: 18.675355689333017,
            },
            title: "beach",
            content: "<h6>Lommarbadet</h6> <br> <p>Beach</p> <br> <p>Badvägen, 761 51 Norrtälje</p>",
        },
        {
            coords: {
                lat: 59.75467589772488,
                lng: 18.7264464046818,
            },
            title: "sailing",
            content: "<h6>Norrtälje Segelsällskap</h6> <br> <p>Sailing Club</p> <br> <p>Villagatan 2B, 761 40 Norrtälje</p> <br> <p>+4617615226</p> <br> <p>http://www.norrtaljess.se/</p>",
        },
        {
            coords: {
                lat: 59.75711375676702,
                lng: 18.700849413815916,
            },
            title: "shopping",
            content: "<h6>Norrtälje Town Center</h6> <br> <p>Town Center</p> <br> <p>Tullportsgatan 761 30 Norrtälje</p>",
        },
        {
            coords: {
                lat: 59.7463776363424,
                lng: 18.6788479242845,
            },
            title: "shopping",
            content: "<h6>Norrteljeporten</h6> <br> <p>Shopping Center</p> <br> <p>Astrid Lindgrens gata 1, 761 46 Norrtälje</p> <br> <p>https://norrteljeporten.com/</p>",
        },
        {
            coords: {
                lat: 59.751404198850956,
                lng: 18.69393803555879,
            },
            title: "shopping",
            content: "<h6>Flygfältet</h6> <br> <p>Shopping Center</p> <br> <p>Radarvägen, 761 30 Norrtälje</p> <br> <p>https://flygfaltetshandelsomrade.se/</p>",
        },
        {
            coords: {
                lat: 59.75509488579032,
                lng: 18.69629167046601,
            },
            title: "sport",
            content: "<h6>Norrtelje Billiards</h6> <br> <p>Pool Hall</p> <br> <p>Stockholmsvägen 17, 761 43 Norrtälje</p>",
        },
        {
            coords: {
                lat: 59.751897034758116,
                lng: 18.69764283293879,
            },
            title: "sport",
            content: "<h6>Norrtälje Sportcentrum</h6> <br> <p>Sport Center</p> <br> <p>Gustaf Adolfs väg 53, 761 42 Norrtälje</p> <br> <p>+4617671000</p>",
        },
        {
            coords: {
                lat: 59.7704989090446,
                lng: 18.69422957505761,
            },
            title: "sport",
            content: "<h6>Roslagsbowling</h6> <br> <p>Bowling Alley</p> <br> <p>Vårgatan 1, 761 50 Norrtälje</p> <br> <p>+4617655559</p> <br> <p>http://www.roslagsbowling.se/</p>",
        },
        {
            coords: {
                lat: 59.77555542921295,
                lng: 18.6891789760667,
            },
            title: "park",
            content: "<h6>Färsna Gård</h6> <br> <p>Open Farm</p> <br> <p>Färsna gård 1, 761 50 Norrtälje</p> <br> <p>+4617618402</p> <br> <p>http://www.farsnagard.se/</p>",
        },
        {
            coords: {
                lat: 59.75795270487724,
                lng: 18.702662441877123,
            },
            title: "cinema",
            content: "<h6>Royal Svenska Bio</h6> <br> <p>Cinema</p> <br> <p>Stora Brogatan 3, 761 30 Norrtälje</p> <br> <p>http://www.svenskabio.se/</p>",
        },
        {
            coords: {
                lat: 59.7548853079895,
                lng: 18.700931221384575,
            },
            title: "sport",
            content: "<h6>Norrtälje Bathhouse</h6> <br> <p>Swimming Center</p> <br> <p>Idrottsbacken 11, 761 42 Norrtälje</p> <br> <p>+4617674635</p>",
        },
    ];
    
    // Array of car parks
    
    let parking = [
        {
            coords: {
                lat: 59.7592425446848,
                lng: 18.701557662031693,
            },
            title: "parking",
            content: "<h6>Tor Parking Lot</h6> <br> <p>Danskes gränd 3, 761 30 Norrtälje</p>",
        },
        {
            coords: {
                lat: 59.7583820400463,
                lng: 18.70698108862644,
            },
            title: "parking",
            content: "<h6>Vulkanus Parking Lot</h6> <br> <p>Rögårdsgatan 9, 761 30 Norrtälje</p>",
        },
        {
            coords: {
                lat: 59.75693453203078,
                lng: 18.69852408373768,
            },
            title: "parking",
            content: "<h6>Jupiter Parking Lot</h6> <br> <p>Tullportsgatan 15, 761 30 Norrtälje</p>",
        },
    ];

// map render

function initMap(locations) {
    let LatLng = {
        lat: 59.75931547440855,
        lng: 18.703599005553162,
    };
    map = new google.maps.Map(document.getElementById("map"), {
        zoom: 13.5,
        center: LatLng,
        mapTypeId: "satellite",
    });

    labels = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

    // Iterate through the locations on the maps to place the markers on the map

    if (locations) {
        for (let i = 0; i < locations.length; i++) {
            marker = new google.maps.Marker({
                position: locations[i].coords,
                map,
                animation: google.maps.Animation.DROP,
            });

            const infowindow = new google.maps.InfoWindow({
                content: locations[i].content,
            });

            // Close previous info window when new info window opened

            google.maps.event.addListener(marker, "click", function () {
                if (currentInfoWindow != null) {
                    currentInfoWindow.close();
                }

                // open new info window

                infowindow.open(map, marker);
                currentInfoWindow = infowindow;
            });

            var currentInfoWindow = null;
        }
    }
}

// Event Listeners adding markers to the map and adding informational text

document.getElementById("accommodation-btn").addEventListener("click", function () {
    initMap(accommodation);
    document.getElementById("info-header").innerHTML = "Accomodation";
    document.getElementById("info-text").innerHTML =
        "There is a vairied number of accommodation types available in Norrtälje from the camp site Norrtälje Camping to a high quality hotel experience at Åtellet Hotell located by the harbour, and everything in between";
});
document.getElementById("restaurant-btn").addEventListener("click", function () {
    initMap(restaurant);
    document.getElementById("info-header").innerHTML = "Restaurants";
    document.getElementById("info-text").innerHTML =
        "There are a large number of restaurants of many different types located in Norrtälje ranging from traditional Swedish food to exotic Asian fare. Several of the restaurants are located in town or by the harbour";
});
document.getElementById("activities-btn").addEventListener("click", function () {
    initMap(activities);
    document.getElementById("info-header").innerHTML = "Activities";
    document.getElementById("info-text").innerHTML =
        "Norrtälje has many activities to keep you busy during your stay. There are several shopping locations around town, clubs and bars, sport centres and museums. As well as some truly beautiful parks and walkways";
});
document.getElementById("parking-btn").addEventListener("click", function () {
    initMap(parking);
    document.getElementById("info-header").innerHTML = "Parking";
    document.getElementById("info-text").innerHTML =
        "The parking in and around Norrtälje is virtually entirely free for shorter stays. Most areas have free parking from anywhere between 1 hour and 4 hours. The three main parking areas in town all have free parking for the first 2 hours using the EasyPark parking app, which can be downloaded from the Apple Store or Google Play";
});

