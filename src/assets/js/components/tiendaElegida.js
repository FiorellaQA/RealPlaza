'use strict';

const TiendaElegida = (update) => {
  const section     = $('<section></section>');
  const container   = $('<div class="container"></div>');
  const row         = $('<div class="row"></div>');
  const h1        = $('<h1 class="col-xs-12 text-center">Tienda Elegida </h1>');
  const mapMall     = $('<div class="map-mall"></div>');
  const info_tienda     = $('<div class="info-tienda">hgjhjgkg</div>');
  const btnVerMapaGrande = $('<button type="button" class="btn btn-warning btn-informacion uppercase" name="button" id="localizar">Ver mapa grande</button>');

  row.append(h1,mapMall,info_tienda,btnVerMapaGrande);

  container.append(row);
  section.append(HeaderAll('tienda elegida mapa e info',9,update));
  section.append(container);

  btnVerMapaGrande.on('click',(e) => {
    state.page = 11;
    update();
  });


  return section;
}
