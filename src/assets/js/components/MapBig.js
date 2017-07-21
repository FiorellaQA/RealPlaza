'use strict';

const MapaGrande = (update) => {
  console.log(state.selectTienda.COD_INMUEBLE);


  const section     = $('<section></section>');
  const container   = $('<div class="container"></div>');
  const row         = $('<div class="row"></div>');
  const h1        = $('<h1 class="col-xs-12 text-center">Tienda Elegida </h1>');
  const input        = $('<input type ="text" id="buscar_comercial" placeholder="Ingrese tienda a buscar"/>');
  const mapMall     = $('<div class="map-mall"><img src="assets/img/guardia_civil.png"></div>');
  const result = $('<div class="result"></div>');

  ListarCoordenadas().then((response) => {
    input.on('keyup',(e) => {
        const filteredComercial = filterByName(state.data.coordenadas,input.val());
        reRender(result,filteredComercial,update);
      });
      // filterByName(state.data.coordenadas,input.val());
      reRender(result,state.data.coordenadas,update);


  });


  row.append(h1,input,mapMall);

  container.append(row);
  section.append(HeaderAll('mapa grande ',10,update));
  section.append(container,result);



  return section;
}

const ComercialItem = (tienda,update) => {
  const item = $('<div class="item col s7 offset-s2 l2 m3 blue-grey lighten-5 section" id=""><p>'+tienda.DESTINO+'</p></div>');
  const btnIrTienda = $('<button type="button" class="btn btn-warning btn-informacion uppercase" name="button" id="localizar">Ir a la Tienda</button>');

  btnIrTienda.on('click',(e) => {
    state.codigoInmueble = "5";
    state.page = 12;
    state.nombreDestino = tienda.DESTINO;
    update();
  });

  item.append(btnIrTienda);

  return item;
};

const reRender = (container,filteredComercial,update) => {
  container.empty();
  if (filteredComercial.length > 0) {
    $.each(filteredComercial,(index,tienda) => {
      container.append(ComercialItem(tienda,update));
    });
  } else {
    container.append($('<p>Tienda no encontrada</p>'));
  }
}
