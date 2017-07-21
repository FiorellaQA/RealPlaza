'use strict';

const TiendaElegida = (update) => {
    const section = $('<section class="tienda-elegida"></section>');
    const container = $('<div class="container"></div>');
    const row = $('<div class="row"></div>');
    const col = $('<div class="col-xs-12 col-lg-12"></div>');
    const mapMall = $('<div class="map-mall"><img class="map-mall" src="assets/img/guardia_civil.png"></div>');
    const info_tienda = $('<div class="info-tienda"></div>');
    const divComercial = $('<div class="col-xs-12 col-lg-12"></div>');
    col.append(mapMall);
    row.append(col, divComercial);

    ListarLocales().then((response) => {
        $.each(state.data.locales, (key, value) => {
            const comercial = $('<div><p>' + value.CLIENTE + '<span>&#187;</span></p></div>');
            const btnVerMapaGrande = $('<button type="button" class="btn btn-warning btn-informacion uppercase" name="button" id="localizar">Ver mapa grande</button>');
            divComercial.append(comercial, btnVerMapaGrande);
            btnVerMapaGrande.on('click', (e) => {
                state.page = 11;
                update();
            });
        });
    });

    container.append(row);
    section.append(HeaderAll('', 9, update));
    section.append(container);


    return section;
}
