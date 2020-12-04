function initMap(){
      // Map options
      let options = {
        zoom:13,
        center:{lat: 59.7578264143131, lng: 18.69815948466188}
      }

      let map = new google.maps.Map(document.getElementById('map'), options);

      let markers = [
        {
          coords:{lat: 59.76166893065758, lng: 18.701249380868678},
          iconImage:'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png',
          content:'<p>Sven Fredriksson Bed & Breakfast</p>'
        },
        {
          coords:{lat: 59.75929151695028, lng: 18.69927527502008},
          iconImage:'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png',
          content:'<p>Berglings Bed and Breakfast</p>'
        },
        {
          coords:{lat: 59.75847018923395, lng: 18.707257529011045},
          iconImage:'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png',
          content:'<p>Åtellet Hotell</p>'
        },
        {
          coords:{lat: 59.75601689282998, lng: 18.72249247627313},
          iconImage:'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png',
          content:'<p>Kärleksudden</p>'
        },
        {
          coords:{lat: 59.755227909002485, lng: 18.69043471395346},
          iconImage:'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png',
          content:'<p>Norrtälje Vandrarhem Hvilan</p>'
        },
        {
          coords:{lat: 59.75514144388841, lng: 18.71652724343053},
          iconImage:'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png',
          content:'<p>Pensionat Granparken</p>'
        },
        {
          coords:{lat: 59.74709921003163, lng: 18.68682982501255},
          iconImage:'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png',
          content:'<p>Hotell Roslagen</p>'
        },
        // Accomodation Markers End //
        {
          coords:{lat: 59.74709921003163, lng: 18.68682982501255},
          iconImage:'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png',
          content:'<p>Hotel</p>'
        }
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