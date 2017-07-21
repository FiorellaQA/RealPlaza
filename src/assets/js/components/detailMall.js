'use strict';

const DetalleMall  = (update) => {
  const section     = $('<section id="cargarLista"></section>');
  const container   = $('<div class="container"></div>');
  const row         = $('<div class="row"></div>');
  const mapa        = $('<div class="map"></div>');
  const div         = $('<div class="info-">Detalle Mall y mapa info</div>');
  const btnIr   = $('<button type="button" class="btn btn-warning btn-informacion uppercase" name="button" id="localizar">información</button>');

  row.append(mapa);
  row.append(div);
  row.append(btnIr);

  container.append(row);

  section.append(HeaderAll('Mapa e Info',6,update));
  section.append(container);

  btnIr.on('click', (e) => {
    state.page = 8;
    update();
  });
  return section;
}
