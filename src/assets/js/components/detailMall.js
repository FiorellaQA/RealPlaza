'use strict';
const DetalleMall  = (update) => {
  console.log(state.selectTienda);
  const section     = $('<section id="cargarLista"></section>');
  const container   = $('<div class="container"></div>');
  const row         = $('<div class="row"></div>');

  const mapa        = $('<div id="map-detail" class="map"></div>');
  const div         = $('<div class="info-">Detalle Mall y mapa info</div>');
  const name        = $('<h2>'+state.selectTienda.NOM_INMUEBLE+'</h2>');
  const direccion   = $('<div><h3>'+state.selectTienda.DIRECCION+'</h3><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p</div>');
  const btnIr       = $('<button type="button" class="btn btn-warning btn-informacion uppercase" name="button" id="localizar"><a href="https://www.waze.com/ul?preview_venue_id=185468558.1854751119.2213539" target="_blank">Ir con Waze</a></button>');

  row.append(mapa);
  div.append(name,direccion);
  row.append(div);
  row.append(btnIr);

  container.append(row);

  section.append(HeaderAll('',6,update));
  section.append(container);

  btnIr.on('click', (e) => {
    state.page = 8;
    update();
  });

  return section;
};
