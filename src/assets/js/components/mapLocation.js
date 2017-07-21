'use strict';
const MapaLocation = (update) => {
  const section    = $('<section></section>');
  const container  = $('<div class="container"></div>');
  const row        = $('<div class="row"></div>');
  const divMap     = $('<div id="map-location" class="map"></div>');

  ListarInmueble().then((response) => {
    console.log(state.data.inm_departamento);
    $.each(state.data.inm_departamento, ( key, value ) =>  {
      const divMall   = $('<div class="col-xs-12"></div>');
      const name      = $('<div><h2>'+value.NOM_INMUEBLE+'</h2></div>');
      const direccion = $('<div><h2>'+value.DIRECCION+'</h2></div>');
      const btnNext = $('<button class="push-right">Ver Detalle</button>');
      btnNext.on('click',(e)=>{
        state.selectTienda = value;
        e.preventDefault();
        state.page = 6;
        update();
      });
      divMall.append(name,direccion,btnNext);
    });
  });

  const irRP      = $('<a href="https://www.waze.com/ul?preview_venue_id=185468558.1854751119.2213539" target="_blank"><button>Usar Waze</button></a>');
  row.append(divMap,divMall,irRP);

  container.append(row);
  section.append(HeaderAll('',2,update));
  section.append(container);

  return section;

};
