'use strict';
const MapaLocation = (update) => {
  const section   = $('<section></section>');
  const container = $('<div class="container"></div>');
  const row       = $('<div class="row"></div>');
  const h1        = $('<h1>Mapa de Location con Maps y lista de los real placa cerca</h1>');
  const divMap    = $('<div id="map"></div>');
  const btnNext   = $('<div class="col-xs-12 col-md-6 text-center"><button type="button" class="btn btn-warning btn-connect uppercase" name="button">log in</button></div>');

  row.append(h1,divMap,btnNext);

  container.append(row);
  section.append(HeaderAll('mi ubicacion y lista de todos los Real Plaza en mapa y marcadores',2,update));
  section.append(container);


  btnNext.on('click',() => {
    state.page = 5;
    update();
  });

  $(() => {
    const map = new GMaps({
      div: '#map',
      lat: -12.172645,
      lng: -76.992717,
      zoom: 12
    });
/*
    /!*map.addMarker({
      lat: -12.172645,
      lng: -76.992717,
      //title: state.selectedStation.name,
      infoWindow: {
        content: 'Grifo '
      }
    });*!/

    var latitud, longitud;

    GMaps.geolocate({
      success: function(position) {
        latitud = position.coords.latitude;
        longitud = position.coords.longitude;

        map.addMarker({
          lat: latitud,
          lng: longitud,
          title: 'Mi ubicación',
          infoWindow: {
            content: 'Mi ubicación',
          }
        });
        map.drawRoute({
          origin: [latitud, longitud],
          //destination: [state.selectedStation.lat, state.selectedStation.long],
          travelMode: 'driving',
          strokeColor: '#131540',
          strokeOpacity: 0.6,
          strokeWeight: 6
        });
      },
      error: function(error) {
        alert('Tenemos un problema con encontrar su ubicación');
      }
    });*/


  });
  return section;

};

