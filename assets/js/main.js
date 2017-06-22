var destino = document.getElementById("destino");
var partida = document.getElementById("partida");

function initMap() {
    var iestp = {lat: -12.0520763, lng: -77.0439461};
    var map = new google.maps.Map(document.getElementById('mapa'), {
      zoom: 18,
      center: iestp
    });
    var marker = new google.maps.Marker({
      position: iestp,
      map: map
    });
    var info = new google.maps.InfoWindow({map: map});

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(function(position) {
        var pos = {
          lat: position.coords.latitude,
          lng: position.coords.longitude,
          marker:position
        };
        info.setPosition(pos);
        info.setContent('Location found.');
        map.setCenter(pos);
      }, function() {
        handleLocationError(true, info, map.getCenter());
      });
    } else {
      handleLocationError(false, info, map.getCenter());
    }
  }
  function handleLocationError(browserHasGeolocation, info, pos) {
    info.setPosition(pos);
    alert("No ha podido ser ubicado");
  }
