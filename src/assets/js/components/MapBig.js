'use strict';

const MapaGrande = (update) => {
  const section     = $('<section></section>');
  const container   = $('<div class="container"></div>');
  const row         = $('<div class="row"></div>');
  const h1        = $('<h1 class="col-xs-12 text-center">Tienda Elegida </h1>');
  const input        = $('<h1 class="col-xs-12 text-center">Buscar </h1>');
  const mapMall     = $('<div class="map-mall">imagen</div>');
  const btnIrTienda = $('<button type="button" class="btn btn-warning btn-informacion uppercase" name="button" id="localizar">Ir a la Tienda</button>');

  row.append(h1,mapMall,btnIrTienda);

  container.append(row);
  section.append(HeaderAll('mapa grande ',10,update));
  section.append(container);

  btnIrTienda.on('click',(e) => {
    state.page = 12;
    update();
  });


  return section;
}
