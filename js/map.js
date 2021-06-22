   // When the window has finished loading create our google map below
   google.maps.event.addDomListener(window, 'load', init);
        
   function init() {
       // Basic options for a simple Google Map
       // For more options see: https://developers.google.com/maps/documentation/javascript/reference#MapOptions
       var mapOptions = {
           // How zoomed in you want the map to start at (always required)
           zoom: 16,
           disableDefaultUI: true,
           // The latitude and longitude to center the map (always required)
           center: new google.maps.LatLng(17.0134649,54.0939679),  // Salalah Time

           // How you would like to style the map. 
           // This is where you would paste any style found on Snazzy Maps.
            styles: [
                {
                    "featureType": "administrative",
                    "elementType": "labels.text.fill",
                    "stylers": [
                        {
                            "color": "#6195a0"
                        }
                    ]
                },
                {
                    "featureType": "landscape",
                    "elementType": "all",
                    "stylers": [
                        {
                            "color": "#f2f2f2"
                        }
                    ]
                },
                {
                    "featureType": "landscape",
                    "elementType": "geometry.fill",
                    "stylers": [
                        {
                            "color": "#ffffff"
                        }
                    ]
                },
                {
                    "featureType": "poi",
                    "elementType": "all",
                    "stylers": [
                        {
                            "visibility": "off"
                        }
                    ]
                },
                {
                    "featureType": "poi.park",
                    "elementType": "geometry.fill",
                    "stylers": [
                        {
                            "color": "#e6f3d6"
                        },
                        {
                            "visibility": "on"
                        }
                    ]
                },
                {
                    "featureType": "road",
                    "elementType": "all",
                    "stylers": [
                        {
                            "saturation": -100
                        },
                        {
                            "lightness": 45
                        },
                        {
                            "visibility": "simplified"
                        }
                    ]
                },
                {
                    "featureType": "road.highway",
                    "elementType": "all",
                    "stylers": [
                        {
                            "visibility": "simplified"
                        }
                    ]
                },
                {
                    "featureType": "road.highway",
                    "elementType": "geometry.fill",
                    "stylers": [
                        {
                            "color": "#f4d2c5"
                        },
                        {
                            "visibility": "simplified"
                        }
                    ]
                },
                {
                    "featureType": "road.highway",
                    "elementType": "labels.text",
                    "stylers": [
                        {
                            "color": "#4e4e4e"
                        }
                    ]
                },
                {
                    "featureType": "road.arterial",
                    "elementType": "geometry.fill",
                    "stylers": [
                        {
                            "color": "#f4f4f4"
                        }
                    ]
                },
                {
                    "featureType": "road.arterial",
                    "elementType": "labels.text.fill",
                    "stylers": [
                        {
                            "color": "#787878"
                        }
                    ]
                },
                {
                    "featureType": "road.arterial",
                    "elementType": "labels.icon",
                    "stylers": [
                        {
                            "visibility": "off"
                        }
                    ]
                },
                {
                    "featureType": "transit",
                    "elementType": "all",
                    "stylers": [
                        {
                            "visibility": "off"
                        }
                    ]
                },
                {
                    "featureType": "water",
                    "elementType": "all",
                    "stylers": [
                        {
                            "color": "#eaf6f8"
                        },
                        {
                            "visibility": "on"
                        }
                    ]
                },
                {
                    "featureType": "water",
                    "elementType": "geometry.fill",
                    "stylers": [
                        {
                            "color": "#eaf6f8"
                        }
                    ]
                }
            ]

       };

       // Get the HTML DOM element that will contain your map 
       // We are using a div with id="map" seen below in the <body>
       var mapElement = document.getElementById('map');

       // Create the Google Map using our element and options defined above
       var map = new google.maps.Map(mapElement, mapOptions);

       // Let's also add a marker while we're at it

       var marker = new google.maps.Marker({
           position: new google.maps.LatLng(17.0134649,54.0939679), 
           
           url:'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3815.207991624754!2d54.093967915367685!3d17.013464917958274!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3dd3df5a95dee0c1%3A0xd6efed428d1239f6!2sSalalah%20Time%20Travels!5e0!3m2!1sen!2sin!4v1573799931944!5m2!1sen!2sin',
           map: map,
             icon: 'images/map_icon.png',
           title: 'MES Public School Orka!'
       });
       
       google.maps.event.addListener(marker, 'click', function() {
         window.open(marker.url, '_blank');
       });
   }