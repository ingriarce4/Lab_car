function initMap(){
  var map = new google.maps.Map(document.getElementById("mapa"),{
    zoom: 5,
    center: {lat: -33.4724712, lng: -70.9107133},
    mapTypeControl: false,
    zoomControl: false,
    streetViewControl: false
  });


  function buscar(){
    if(navigator.geolocation){
      navigator.geolocation.getCurrentPosition(funcionExito, funcionError);
    }
  }

  var latitud, longitud;

  var funcionExito = function(posicion){
    latitud = posicion.coords.latitude;
    longitud = posicion.coords.longitude;

    var miUbicacion = new google.maps.Marker({
      position : {lat: latitud, lng: longitud},
      animation: google.maps.Animation.DROP,
      map: map,
    });

    map.setZoom(17);
    map.setCenter({lat: latitud, lng: longitud});
  }

  var funcionError = function(error){
    alert("Tenemos problemas encontrando tu ubicación");
  }  

  buscar();

//autocompletado y luego declaro las dos variables que son funciones de google.
  var start = document.getElementById("start");
  var autocomplete = new google.maps.places.Autocomplete(start);
  autocomplete.bindTo('bounds', map);

  var end = document.getElementById("end");
  var autocomplete = new google.maps.places.Autocomplete(end);
  autocomplete.bindTo('bounds', map);


  var directionsDisplay = new google.maps.DirectionsRenderer();
  var directionsService = new google.maps.DirectionsService();

   
       /*ejemplo extraído de google donde me cambian dos direcciones*/

  function calculateAndDisplayRoute(directionsService, directionsDisplay) {
    directionsService.route({
      origin: document.getElementById('start').value,
      destination: document.getElementById('end').value,
      travelMode: 'DRIVING'
    }, function(response, status) {
      if (status === 'OK') {
        directionsDisplay.setDirections(response);
      } else {
        window.alert('Fallo debido a ' + status);
      }
    });
  }
    }

    
 /*var directionsService = new google.maps.DirectionsService();

var request = {
  origin      : 'Melbourne VIC', // a city, full address, landmark etc
  destination : 'Sydney NSW',
  travelMode  : google.maps.DirectionsTravelMode.DRIVING
};

directionsService.route(request, function(response, status) {
  if ( status == google.maps.DirectionsStatus.OK ) {
    alert( response.routes[0].legs[0].distance.value ); // the distance in metres
}*/