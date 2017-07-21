function initMap() {
  var mall = {
    lat: -12.172645,
    lng: -76.992717
  };

  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 18,
    center: mall
  });

 /* var markadorMall = new google.maps.Marker({
    position: mall,
    map: map
  });*/
 var marker;


  var latitud, longitud, myLocation;
  var funcionExito = function(posicion) {
    latitud = posicion.coords.latitude;
    longitud = posicion.coords.longitude;

    myLocation = new google.maps.Marker({
      position: { lat: latitud, lng: longitud},
      map: map
    });

    map.setZoom(18);
    map.setCenter({lat: latitud, lng: longitud});
  };

  var funcionError = function(error) {
    alert("Tenemos un problema con encontrar tu ubicación");
  };


  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(funcionExito, funcionError);
  }

 //encuentra mi ubicación
  //document.getElementById('findMe').addEventListener('click', searchMe);


}