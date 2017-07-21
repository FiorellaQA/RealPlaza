'use strict';

const TiendaElegida = (update) => {
  const section     = $('<section></section>');
  const container   = $('<div class="container"></div>');
  const row         = $('<div class="row"></div>');
  const h1        = $('<h1 class="col-xs-12 text-center">Tienda Elegida </h1>');
  const divComercial= $('<div></div>');
  ListarLocales().then((response) => {
    $.each( state.data.locales, ( key, value ) =>  {
      // console.log(value);
      const comercial = $('<div><p>'+value.CLIENTE+'<span>&#187;</span></p></div>');
      const btnVerMapaGrande = $('<button type="button" class="btn btn-warning btn-informacion uppercase" name="button" id="localizar">Ver mapa grande</button>');
      divComercial.append(comercial,btnVerMapaGrande);
      btnVerMapaGrande.on('click',(e) => {
        state.page = 11;
        update();
      });
    });
  });
  const mapMall     = $('<div class="map-mall"><img src="assets/img/guardia_civil.png"></div>');
  const info_tienda     = $('<div class="info-tienda">Lorem hjhhghghkffau</div>');

  row.append(h1,mapMall,divComercial);

  container.append(row);
  section.append(HeaderAll('tienda elegida mapa e info',9,update));
  section.append(container);




  return section;
}
