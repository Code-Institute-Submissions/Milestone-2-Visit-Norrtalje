let map;
let infoObj = [];

let icons = {
    accommodation: {
        icon: "assets/images/hotel-pin.png",
    },
    restaurant: {
        icon: "assets/images/restaurant-pin.png",
    },
    parking: {
        icon: "assets/images/parking-pin.png",
    },
    beach: {
        icon: "assets/images/beach-pin.png",
    },
    sailing: {
        icon: "assets/images/boat-pin.png",
    },
    camping: {
        icon: "assets/images/camping-pin.png",
    },
    park: {
        icon: "assets/images/park-pin.png",
    },
    shopping: {
        icon: "assets/images/shopping-bag-pin.png",
    },
    sport: {
        icon: "assets/images/sport-pin.png",
    },
    cinema: {
        icon: "assets/images/video-pin.png",
    },
    bar: {
        icon: "assets/images/bar-pin.png",
    },
};

let accommodation = [
        {
            coords: {
                lat: 59.75463586161074,
                lng: 18.716471140214868
            },
            type: "accommodation",
            content: "<h6>Granparken</h6> <br> <p>Rating:4.3</p>"
        },
        {
            coords: {
                lat: 59.746382872877014,
                lng: 18.6874437333132
            },
            type: "accommodation",
            content: "<h6>Hotell Roslagen</h6> <br> <p>Rating:3.7</p>"
        },
        {
            coords: {
                lat: 59.75798645227602,
                lng: 18.707302808908896
            },
            type: "accommodation",
            content: "<h6>Åtellet Hotell</h6> <br> <p>Rating:3.7</p>"
        },
        {
            coords: {
                lat: 59.758614954555966,
                lng: 18.699488863378857
            },
            type: "accommodation",
            content: "<h6>Berlings B&B</h6> <br> <p>Rating:4.9</p>",
        },
        {
            coords: {
                lat: 59.76107954182671,
                lng: 18.70144017043721
            },
            type: "accommodation",
            content: "<h6>Sven Fredriksson B&B</h6> <br> <p>Rating:4.4</p>",
        },
        {
            coords: {
                lat: 59.76304691004011,
                lng: 18.6714772427103
            },
            type: "accommodation",
            content: "<h6>Norrtälje Camping</h6> <br> <p>Rating:4.4</p>",
        }]

    

/**Places to Eat */
let restaurant = [
        {
            coords: {
                lat: 59.75692732670315,
                lng: 18.69618371129288
            },
            type: "restaurant",
            content: "<h6>ANTEP's</h6> <br> <p>Rating:4.2</p>",
        },
        {
            coords: {
                lat: 59.758203851800474,
                lng: 18.709756839272078
            },
            type: "restaurant",
            content: "<h6>Salt & Sea</h6> <br> <p>Rating:4.2</p>",
        },
        {
            coords: {
                lat: 59.75792083803483,
                lng: 18.70894949435303
            },
            type: "restaurant",
            content: "<h6>S/S Norrtelje</h6> <br> <p>Rating:4.0</p>",
        },
        {
            coords: {
                lat: 59.75811278272289,
                lng: 18.708442999033014
            },
            type: "restaurant",
            content: "<h6>Den Gyllene Räven</h6> <br> <p>Rating:4.1</p>",
        },
        {
            coords: {
                lat: 59.75748731062395,
                lng: 18.705404056234435
            },
            type: "restaurant",
            content: "<h6>Pinchos</h6> <br> <p>Rating:4.0</p>",
        },
        {
            coords: {
                lat: 59.75730575857509, lng: 18.705408498652393
            },
            type: "restaurant",
            content: "<h6>Harry's</h6> <br> <p>Rating:4.0</p>",
        },
        {
            coords: {
                lat: 59.75659091174056,
                lng: 18.705591453090186
            },
            type: "restaurant",
            content: "<h6>Ed's Burgers's</h6> <br> <p>Rating:4.3</p>",
        },
        {
            coords: {
                lat: 59.75665339360885,
                lng: 18.70522600210995
            },
            type: "restaurant",
            content: "<h6>Asien Hamn</h6> <br> <p>Rating:4.1</p>",
        },
        {
            coords: {
                lat: 59.75687390092211,
                lng: 18.70414907577552
            },
            type: "restaurant",
            content: "<h6>Poke Burger</h6> <br> <p>Rating:4.5</p>",
        },
        {
            coords: {
                lat: 59.757192111252735,
                lng: 18.700829967871435
            },
            type: "restaurant",
            content: "<h6>Kwang Chow</h6> <br> <p>Rating:3.8</p>",
        },
        {
            coords: {
                lat: 59.75893086109899,
                lng: 18.703008708806884
            },
            type: "restaurant",
            content: "<h6>På Grillen</h6> <br> <p>Rating:4.0</p>",
        },
        {
            coords: {
                lat: 59.75706816262207,
                lng: 18.70329558849524
            },
            type: "restaurant",
            content: "<h6>Taco Bar</h6> <br> <p>Rating:3.5</p>",
        },
        {
            coords: {
                lat: 59.7589454960521,
                lng: 18.70349960401706
            },
            type: "restaurant",
            content: "<h6>Lilys Kök</h6> <br> <p>Rating:3.5</p>",
        },
        {
            coords: {
                lat: 59.75692732670315,
                lng: 18.69618371129288
            },
            type: "restaurant",
            content: "<h6>ANTEP's</h6> <br> <p>Rating:4.2</p>",
        },
        {
            coords: {
                lat: 59.75610989844251,
                lng: 18.722778964056698
            },
            type: "restaurant",
            content: "<h6>Havspiren</h6> <br> <p>Rating:4.0</p>",
        }];

let activities = [
    {
        coords: {
            lat: 59.75716171517352,
            lng: 18.698004931226563
        },
        type: "bar",
        content: "<h6>Kapellet</h6> <br> <p>Rating:4.4</p>",
    },
    {
        coords: {
            lat: 59.759090460443666,
            lng: 18.702219352212374
        },
        type: "bar",
        content: "<h6>DG's Sportsbar</h6> <br> <p>Rating:4.0</p>",
    },
    {
        coords: {
            lat: 59.75728682442034,
            lng: 18.702591382973594
        },
        type: "bar",
        content: "<h6>Vinbaren</h6> <br> <p>Rating:4.2</p>",
    },
    {
        coords: {
            lat: 59.75666693066083,
            lng: 18.703888440526757
        },
        type: "bar",
        content: "<h6>Little Dublin</h6> <br> <p>Rating:3.7</p>",
    },
    {
        coords: {
            lat: 59.756935432379045,
            lng: 18.712592123409696
        },
        type: "park",
        content: "<h6>Societetsparken</h6> <br> <p>Rating:4.2</p>",
    },
    {
        coords: {
            lat: 59.75292287490571,
            lng: 18.729321035281842
        },
        type: "beach",
        content: "<h6>Kärleksuddens Beach</h6> <br> <p>Rating:3.7</p>",
    },
    {
        coords: {
            lat: 59.75840742497105,
            lng: 18.675355689333017
        },
        type: "beach",
        content: "<h6>Lommarbadet</h6> <br> <p>Rating:3.9</p>",
    },
    {
        coords: {
            lat: 59.75467589772488,
            lng: 18.7264464046818
        },
        type: "sailing",
        content: "<h6>Norrtälje Sailing Club</h6> <br> <p>Rating:4.5</p>",
    },
    {
        coords: {
            lat: 59.75711375676702,
            lng: 18.700849413815916
        },
        type: "shopping",
        content: "<h6>Norrtälje Town Center</h6>",
    },
    {
        coords: {
            lat: 59.7463776363424,
            lng: 18.6788479242845
        },
        type: "shopping",
        content: "<h6>Norrteljeporten</h6>",
    },
    {
        coords: {
            lat: 59.751404198850956,
            lng: 18.69393803555879
        },
        type: "shopping",
        content: "<h6>Flygfältet</h6>",
    },
    {
        coords: {
            lat: 59.75509488579032,
            lng: 18.69629167046601
        },
        type: "sport",
        content: "<h6>Norrtelje Billiards</h6> <br> <p>Rating:4.7</p> <br>",
    },
    {
        coords: {
            lat: 59.751897034758116,
            lng: 18.69764283293879
        },
        type: "sport",
        content: "<h6>Norrtälje Sportcentrum</h6> <br> <p>Rating:4.0</p>>",
    },
    {
        coords: {
            lat: 59.7704989090446,
            lng: 18.69422957505761
        },
        type: "sport",
        content: "<h6>Roslagsbowling</h6> <br> <p>Rating:4.4</p>",
    },
    {
        coords: {
            lat: 59.77555542921295,
            lng: 18.6891789760667
        },
        type: "park",
        content: "<h6>Färsna Gård</h6> <br> <p>Rating:3.9</p>",
    },
    {
        coords: {
            lat: 59.75795270487724,
            lng: 18.702662441877123
        },
        type: "cinema",
        content: "<h6>Royal Svenska Bio</h6> <br> <p>Rating:4.1</p>",
    },
    {
        coords: {
            lat: 59.7548853079895,
            lng: 18.700931221384575
        },
        type: "sport",
        content: "<h6>Norrtälje Bathhouse</h6> <br> <p>Rating:4.4</p>",
    }];

let parking = [
        {
            coords: {
                lat: 59.7592425446848,
                lng: 18.701557662031693
            },
            type: "parking",
            content: "<h6>Tor Parking Lot</h6>",
        },
        {
            coords: {
                lat: 59.7583820400463,
                lng: 18.70698108862644
            },
            type: "parking",
            content: "<h6>Vulkanus Parking Lot</h6>",
        },
        {
            coords: {
                lat: 59.75693453203078,
                lng: 18.69852408373768 },
            type: "parking",
            content: "<h6>Jupiter Parking Lot</h6>",
        }];

function initMap(locations) {
    let LatLng = {
        lat: 59.75821547440827,
        lng: 18.703599005553162
    };
    map = new google.maps.Map(document.getElementById("map"), {
        zoom: 13.5,
        center: LatLng,
        mapTypeId: 'satellite'
    });

    //Adjust Zoom Level for devices with smaller screens

    // if (window.screen.width < 768) {
    //     var Latlng = {
    //         lat: 59.75821547440827,
    //         lng: 18.703599005553162
    //     },
    //     map = new google.maps.Map(document.getElementById("map"), {
    //         zoom: 13.2,
    //         center: Latlng,
    //         mapTypeId: "satellite"
    //     })
    // }



    labels = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

    // Iterate through the locations on the maps to place the markers on the map


    if (locations) {
        for (let i = 0; i < locations.length; i++) {
            // console.log(`with coords: ${locations[i].coords} and just the location: ${locations[i]}`)
            marker = new google.maps.Marker({
                position: locations[i].coords,
                map,
                animation: google.maps.Animation.DROP
            });

            

            const infowindow = new google.maps.InfoWindow({
                content: locations[i].content,
            });

            // Close previous info window when new info window opened

            google.maps.event.addListener(marker, 'click', function() {
                if (currentInfoWindow != null) {
                    currentInfoWindow.close();
                }

                infowindow.open(map, marker);
                currentInfoWindow = infowindow;
            });

            var currentInfoWindow = null;
        }
    }
}



// Event Listeners for Map and Markers

document.getElementById("accommodation-btn").addEventListener("click", function() {
    initMap(accommodation);
});
document.getElementById("restaurant-btn").addEventListener("click", function() {
    initMap(restaurant);
});
document.getElementById("activities-btn").addEventListener("click", function() {
    initMap(activities);
});
document.getElementById("parking-btn").addEventListener("click", function() {
    initMap(parking);
});


// Initialize the Map
initMap();
