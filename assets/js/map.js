function initMap(){
      // Map options
      let options = {
        zoom:13,
        center:{lat: 59.76234722351998, lng: 18.698235602540187}
      }

      const map = new google.maps.Map(document.getElementById('map'), options);

      const placeSearch = (keyword) => {
        let request = {
          bounds: map.getBounds(),
          keyword: keyword,
        };
        service = new google.maps.places.PlacesService(map);
        service.nearbySearch(request, callBack);
      };

      const createMarkers = (places) => {
        removePreviousMarkers();
        places.forEach((place) => {
          let marker = new google.maps.Marker({
            position: place.geometry.location,
            map: map,
            title: place.name,
            // animation: google.maps.Animation.DROP,
          });
          google.maps.event.addListner(marker, "click", () => {
            let request = {
              placeId: place.place_id,
              fields: [
                "name",
                "formatted_address",
                "geometry",
                "rating",
                "photos",
              ],
            };
            service.getDetails(request, (placeResult, status) => {
              showDetails(placeResult, marker, status);
            });
          });
        });
      };

      const showDetails = (placeResult, marker, status) => {
        if (status == google.maps.places.PlacesServiceStatus.OK) {
          let placeInfoWindow = = new google.maps.InfoWindow();
          let rating = "None";
          if (placeResult.rating) {
            rating = placeResult.rating;
          }
          placeInfoWindow.setContent (
            // `<div class="window-text"><strong> ${placeResult.name} </strong><br> Rating:${rating}</div>`
          );
          placeInfoWindow.open(marker.map, marker);
          currentInfoWindow = placeInfoWindow;
          showPanel(placeResult);
        } else {
          console.log("showDetails Error");
        }
      };





    //   const iconBase = "assets/images";
    // const icons = {
    //     parking: {
    //     icon: iconBase + "parking_lot_maps.png",
    //     },
    //     library: {
    //     icon: iconBase + "library_maps.png",
    //     },
    //     info: {
    //     icon: iconBase + "info-i_maps.png",
    //     },
    // };

    //   let markers = [
    //     {
    //       coords:{lat: 59.76107531853645, lng: 18.701435108712065},
    //       iconImage:'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png',
    //       type: "accomodation",
    //       content:"<p>Sven Fredriksson Bed & Breakfast</p>"
    //     },
    //     {
    //       coords:{lat: 59.75861469011298, lng: 18.699487826084287},
    //       iconImage:'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png',
    //       type: "accomodation",
    //       content:"<p>Berglings Bed and Breakfast</p>"
    //     },
    //     {
    //       coords:{lat: 59.757993280129135, lng: 18.70731451183914},
    //       iconImage:'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png',
    //       type: "accomodation",
    //       content:"<p>Åtellet Hotell</p>"
    //     },
    //     {
    //       coords:{lat: 59.75355329760593, lng: 18.728811857252083},
    //       iconImage:'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png',
    //       type: "accomodation",
    //       content:"<p>Kärleksudden</p>"
    //     },
    //     {
    //       coords:{lat: 59.75452422893091, lng: 18.690091517118297},
    //       iconImage:'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png',
    //       type: "accomodation",
    //       content:"<p>Norrtälje Vandrarhem Hvilan</p>"
    //     },
    //     {
    //       coords:{lat: 59.754631662336074, lng: 18.716489319168335},
    //       iconImage:'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png',
    //       type: "accomodation",
    //       content:"<p>Pensionat Granparken</p>"
    //     },
    //     {
    //       coords:{lat: 59.74638169829759, lng: 18.68744956081739},
    //       iconImage:'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png',
    //       type: "accomodation",
    //       content:"<p>Hotell Roslagen</p>"
    //     },
    //     {
    //       coords:{lat: 59.76304385446466, lng: 18.671473859991263},
    //       iconImage:'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png',
    //       type: "accomodation",
    //       content:"<p>Norrtelje Camping</p>"
    //     },
    //     //============================= Accomodation Markers End =============================//
    //     //============================= Resturant Markers Start ==============================//
    //     {
    //       coords:{lat: 59.75943229659201, lng: 18.70335701719105},
    //       iconImage:'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png',
    //       type: "resturant",
    //       content:"<p>Ran Mae -Thai Roslagen</p>"
    //     },
    //     {
    //       coords:{lat: 59.75892825115053, lng: 18.703007695762093},
    //       iconImage:'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png',
    //       type: "resturant",
    //       content:"<p>På Grillen Steakhouse</p>"
    //     },
    //     {
    //       coords:{lat: 59.758944870264685, lng: 18.703499885906588},
    //       iconImage:'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png',
    //       type: "resturant",
    //       content:"<p>Lilys Kök & Bar</p>"
    //     },
    //     {
    //       coords:{lat: 59.75692100759757, lng: 18.696189398799874},
    //       iconImage:'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png',
    //       type: "resturant",
    //       content:"<p>ANTEP’s Restaurang & Pizzeria</p>"
    //     },
    //     {
    //       coords:{lat: 59.757162400393206, lng: 18.698003635582225},
    //       iconImage:'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png',
    //       type: "resturant",
    //       content:"<p>Kapellet Sportbar och Restaurang</p>"
    //     },
    //     {
    //       coords:{lat: 59.75687127670454, lng: 18.70415519739986},
    //       iconImage:'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png',
    //       type: "resturant",
    //       content:"<p>Poke Burger Norrtälje</p>"
    //     },
    //     {
    //       coords:{lat: 59.7574832510894, lng: 18.705407789014153},
    //       iconImage:'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png',
    //       type: "resturant",
    //       content:"<p>Pinchos</p>"
    //     },
    //     {
    //       coords:{lat: 59.75730627951774, lng: 18.70541047122304},
    //       iconImage:'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png',
    //       type: "resturant",
    //       content:"<p>Harrys</p>"
    //     },
    //     {
    //       coords:{lat: 59.75659364740685, lng: 18.705586226843856},
    //       iconImage:'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png',
    //       type: "resturant",
    //       content:"<p>Ed's Burgers</p>"
    //     },
    //     {
    //       coords:{lat: 59.76811130098933, lng: 18.68821624222493},
    //       iconImage:'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png',
    //       type: "resturant",
    //       content:"<p>Frasses Norrtälje</p>"
    //     },
    //     {
    //       coords:{lat: 59.75784979454555, lng: 18.7088248887365},
    //       iconImage:'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png',
    //       type: "resturant",
    //       content:"<p>s/s Norrtelje</p>"
    //     },
    //     {
    //       coords:{lat: 59.75820373099311, lng: 18.70975561523659},
    //       iconImage:'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png',
    //       type: "resturant",
    //       content:"<p>Salt & Sea</p>"
    //     },
    //     {
    //       coords:{lat: 59.75610877409147, lng: 18.722776887223162},
    //       iconImage:'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png',
    //       type: "resturant",
    //       content:"<p>Restaurang Havspiren AB</p>"
    //     },
    //     {
    //       coords:{lat: 59.75665173865468, lng: 18.70522681085294},
    //       iconImage:'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png',
    //       type: "resturant",
    //       content:"<p>Restaurang Asian Hamn</p>"
    //     },
    //     {
    //       coords:{lat: 59.758110176096736, lng: 18.70844082338632},
    //       iconImage:'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png',
    //       type: "resturant",
    //       content:"<p>Den Gyllene Räven</p>"
    //     },
    //     {
    //       coords:{lat: 59.756665617163954, lng: 18.703888328859875},
    //       iconImage:'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png',
    //       type: "resturant",
    //       content:"<p>Little Dublin Restaurang & Pub</p>"
    //     },
    //     {
    //       coords:{lat: 59.75706752461273, lng: 18.703296901781975},
    //       iconImage:'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png',
    //       type: "resturant",
    //       content:"<p>Taco Bar</p>"
    //     },
    //     {
    //       coords:{lat: 59.757183324531745, lng: 18.70083884787545},
    //       iconImage:'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png',
    //       type: "resturant",
    //       content:"<p>Kinarestaurang Kwang Chow</p>"
    //     },
    //     {
    //       coords:{lat: 59.75908900381886, lng: 18.702219126331975},
    //       iconImage:'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png',
    //       type: "resturant",
    //       content:"<p>DG's Bar&Kök</p>"
    //     },
    //     //============================= Resturant Markers End ================================//
    //     //============================= Entertainment Markers Start ==========================//
    //     {
    //       coords:{lat: 59.77049348235772, lng: 18.69422972052371},
    //       iconImage:'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png',
    //       type: "entertainment",
    //       content:"<p>Norrtälje Bowling Hall</p>"
    //     },
    //     {
    //       coords:{lat: 59.77554419129101, lng: 18.689168976579605},
    //       iconImage:'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png',
    //       type: "entertainment",
    //       content:"<p>Färsna Gård</p>"
    //     },
    //     {
    //       coords:{lat: 59.75189662323695, lng: 18.697639394030812},
    //       iconImage:'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png',
    //       type: "entertainment",
    //       content:"<p>Norrtälje Sportcentrum</p>"
    //     },
    //     {
    //       coords:{lat: 59.75338765813969, lng: 18.69838982791664},
    //       iconImage:'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png',
    //       type: "entertainment",
    //       content:"<p>Skatepark, Norrtälje</p>"
    //     },
    //     {
    //       coords:{lat: 59.75488328140967, lng: 18.70092987988062},
    //       iconImage:'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png',
    //       type: "entertainment",
    //       content:"<p>Norrtälje Bathhouse</p>"
    //     },
    //     {
    //       coords:{lat: 59.75509539239296, lng: 18.696281611732918},
    //       iconImage:'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png',
    //       type: "entertainment",
    //       content:"<p>Norrtelje Billiards Club</p>"
    //     },
    //     {
    //       coords:{lat: 59.75595463072056, lng: 18.699532449287744},
    //       iconImage:'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png',
    //       type: "entertainment",
    //       content:"<p>Norrtälje museum</p>"
    //     },
    //     {
    //       coords:{lat: 59.757105651228365, lng: 18.703823984060673},
    //       iconImage:'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png',
    //       type: "entertainment",
    //       content:"<p>Club Salt</p>"
    //     },
    //     {
    //       coords:{lat: 59.757952679702896, lng: 18.70265185814328},
    //       iconImage:'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png',
    //       type: "entertainment",
    //       content:"<p>Cinema Royal</p>"
    //     },
    //     {
    //       coords:{lat: 59.7580121194917, lng: 18.679882585628448},
    //       iconImage:'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png',
    //       type: "entertainment",
    //       content:"<p>Vargheden</p>"
    //     },
    //     {
    //       coords:{lat: 59.75840489225495, lng: 18.675345629267184},
    //       iconImage:'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png',
    //       type: "entertainment",
    //       content:"<p>Lommarbadet</p>"
    //     },
    //     {
    //       coords:{lat: 59.75140723912763, lng: 18.693949431087255},
    //       iconImage:'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png',
    //       type: "entertainment",
    //       content:"<p>Flygfältets Handelsområde</p>"
    //     },
    //     {
    //       coords:{lat: 59.756946577680715, lng: 18.712614923980833},
    //       iconImage:'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png',
    //       type: "entertainment",
    //       content:"<p>Societetsparken</p>"
    //     }
    //     //============================= Entertainment Markers End ============================//
    //   ];

    //   // Add markers
    //   for(let i = 0;i < markers.length;i++){
    //     addMarker(markers[i]);
    //   }

    //   // Add Marker Function
    //   function addMarker(props){
    //     let markers = new google.maps.Marker({
    //       position:props.coords,
    //       map:map,
    //       //icon:props.iconImage
    //       /*if (markers.type === "accomodation") {
    //           icon:props.iconImage
    //       } else if (type === "entertainment") {
    //           icon:props.iconImage
    //       } else if (type === "resturant") {
    //           icon:props.iconImage
    //       } else {
    //           default;
    //       }*/
    //     });

    //     // Check for customicon
    //     if(props.iconImage){
    //       // Set icon image
    //       markers.setIcon(props.iconImage);
    //     }

    //     // Check content
    //     if(props.content){
    //       var infoWindow = new google.maps.InfoWindow({
    //         content:props.content
    //       });

    //       markers.addListener('click', function(){
    //         infoWindow.open(map, markers);
    //       });
    //     }
    //   }
    }