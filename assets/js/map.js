function initMap(){
      // Map options
      let options = {
        zoom:13,
        center:{lat: 59.7578264143131, lng: 18.69815948466188}
      }

      let map = new google.maps.Map(document.getElementById('map'), options);

      let markers = [
        {
          coords:{lat: 59.76107531853645, lng: 18.701435108712065},
          iconImage:'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png',
          content:"<p>Sven Fredriksson Bed & Breakfast</p>"
        },
        {
          coords:{lat: 59.75861469011298, lng: 18.699487826084287},
          iconImage:'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png',
          content:"<p>Berglings Bed and Breakfast</p>"
        },
        {
          coords:{lat: 59.757993280129135, lng: 18.70731451183914},
          iconImage:'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png',
          content:"<p>Åtellet Hotell</p>"
        },
        {
          coords:{lat: 59.75355329760593, lng: 18.728811857252083},
          iconImage:'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png',
          content:"<p>Kärleksudden</p>"
        },
        {
          coords:{lat: 59.75452422893091, lng: 18.690091517118297},
          iconImage:'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png',
          content:"<p>Norrtälje Vandrarhem Hvilan</p>"
        },
        {
          coords:{lat: 59.754631662336074, lng: 18.716489319168335},
          iconImage:'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png',
          content:"<p>Pensionat Granparken</p>"
        },
        {
          coords:{lat: 59.74638169829759, lng: 18.68744956081739},
          iconImage:'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png',
          content:"<p>Hotell Roslagen</p>"
        },
        //============================= Accomodation Markers End =============================//
        //============================= Resturant Markers Start ==============================//
        {
          coords:{lat: 59.75943229659201, lng: 18.70335701719105},
          iconImage:'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png',
          content:"<p>Ran Mae -Thai Roslagen</p>"
        },
        {
          coords:{lat: 59.75892825115053, lng: 18.703007695762093},
          iconImage:'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png',
          content:"<p>På Grillen Steakhouse</p>"
        },
        {
          coords:{lat: 59.758944870264685, lng: 18.703499885906588},
          iconImage:'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png',
          content:"<p>Lilys Kök & Bar</p>"
        },
        {
          coords:{lat: 59.75692100759757, lng: 18.696189398799874},
          iconImage:'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png',
          content:"<p>ANTEP’s Restaurang & Pizzeria</p>"
        },
        {
          coords:{lat: 59.757162400393206, lng: 18.698003635582225},
          iconImage:'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png',
          content:"<p>Kapellet Sportbar och Restaurang</p>"
        },
        {
          coords:{lat: 59.75687127670454, lng: 18.70415519739986},
          iconImage:'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png',
          content:"<p>Poke Burger Norrtälje</p>"
        },
        {
          coords:{lat: 59.7574832510894, lng: 18.705407789014153},
          iconImage:'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png',
          content:"<p>Pinchos</p>"
        },
        {
          coords:{lat: 59.75730627951774, lng: 18.70541047122304},
          iconImage:'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png',
          content:"<p>Harrys</p>"
        },
        {
          coords:{lat: 59.75659364740685, lng: 18.705586226843856},
          iconImage:'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png',
          content:"<p>Ed's Burgers</p>"
        },
        {
          coords:{lat: 59.76811130098933, lng: 18.68821624222493},
          iconImage:'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png',
          content:"<p>Frasses Norrtälje</p>"
        },
        {
          coords:{lat: 59.75784979454555, lng: 18.7088248887365},
          iconImage:'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png',
          content:"<p>s/s Norrtelje</p>"
        },
        {
          coords:{lat: 59.75820373099311, lng: 18.70975561523659},
          iconImage:'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png',
          content:"<p>Salt & Sea</p>"
        },
        {
          coords:{lat: 59.75610877409147, lng: 18.722776887223162},
          iconImage:'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png',
          content:"<p>Restaurang Havspiren AB</p>"
        },
        {
          coords:{lat: 59.75665173865468, lng: 18.70522681085294},
          iconImage:'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png',
          content:"<p>Restaurang Asian Hamn</p>"
        },
        {
          coords:{lat: 59.758110176096736, lng: 18.70844082338632},
          iconImage:'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png',
          content:"<p>Den Gyllene Räven</p>"
        },
        {
          coords:{lat: 59.756665617163954, lng: 18.703888328859875},
          iconImage:'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png',
          content:"<p>Little Dublin Restaurang & Pub</p>"
        },
        {
          coords:{lat: 59.75706752461273, lng: 18.703296901781975},
          iconImage:'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png',
          content:"<p>Taco Bar</p>"
        },
        {
          coords:{lat: 59.757183324531745, lng: 18.70083884787545},
          iconImage:'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png',
          content:"<p>Kinarestaurang Kwang Chow</p>"
        },
        {
          coords:{lat: 59.75908900381886, lng: 18.702219126331975},
          iconImage:'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png',
          content:"<p>DG's Bar&Kök</p>"
        }
        //============================= Resturant Markers End ================================//
      ];

      // Loop through markers
      for(let i = 0;i < markers.length;i++){
        // Add marker
        addMarker(markers[i]);
      }

      // Add Marker Function
      function addMarker(props){
        let markers = new google.maps.Marker({
          position:props.coords,
          map:map,
          //icon:props.iconImage
        });

        // Check for customicon
        if(props.iconImage){
          // Set icon image
          markers.setIcon(props.iconImage);
        }

        // Check content
        if(props.content){
          var infoWindow = new google.maps.InfoWindow({
            content:props.content
          });

          markers.addListener('click', function(){
            infoWindow.open(map, markers);
          });
        }
      }
    }