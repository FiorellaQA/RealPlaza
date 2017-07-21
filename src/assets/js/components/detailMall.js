'use strict';
const DetalleMall = (update) => {
    console.log(state.selectTienda);
    const section = $('<section id="cargarLista"></section>');
    const container = $('<div id="" class="container-fluid"></div>');
    const row = $('<div class="row"></div>');
    // const col  =$('<div class="col-xs-12 col-lg-12"></div>');
    const mapa = $('<div id="map-detail" class="map"></div>');
    const col1 = $('<div class="col-xs-12 col-lg-offset-3 col-lg-6"></div>');
    const detalle = $('<div class="info"></div>');
    const name = $('<h2 class="title-tienda text-center" >' + state.selectTienda.NOM_INMUEBLE + '</h2>');
    const direccion = $('<div class="subtitle-tienda" ><h3 class="text-center">' + state.selectTienda.DIRECCION + '</h3><p class="texto-tienda text-justify" style="padding:0 15px">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p</div>');
    const col2 = $('<div class="col-xs-12 col-lg-12 text-center"></div>');
    const btnIr = $('<button type="button" class="btn btn-lg btn-map uppercase text-center" name="button" id="localizar"><a href="https://www.waze.com/ul?preview_venue_id=185468558.1854751119.2213539" target="_blank">IR CON WAZE</a></button>');


    detalle.append(name, direccion);
    row.append(mapa);
    // row.append(col);
    col1.append(detalle);
    row.append(col1);
    col2.append(btnIr);
    row.append(col2);
    container.append(row);
    section.append(HeaderAll('', 6, update));
    section.append(container);

    btnIr.on('click', (e) => {
        state.page = 8;
        update();
    });

    return section;
};
