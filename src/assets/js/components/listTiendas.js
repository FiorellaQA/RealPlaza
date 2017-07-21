'use strict';

const ListTiendas  = (update) => {
  const section     = $('<section id="cargarLista"></section>');
  const container   = $('<div class="container"></div>');
  const row         = $('<div class="row"></div>');
  const logo        = $('<div class="col-xs-12"><img src="assets/img/logo.png" alt="Logo de Real Plaza"></div>');
  const btnIr   = $('<div class="col-xs-12 col-md-6 text-center"><button type="button" class="btn btn-warning btn-informacion uppercase" name="button" id="localizar">Ir a Tienda Elegida</button></div>');

  row.append(logo);
  row.append(btnIr);

  container.append(row);
  section.append(HeaderAll('Listado de las tienda o rubros del mall',8,update));
  section.append(container);

  btnIr.on('click', (e) => {
    state.page = 10;
    update();
  });
  return section;
};
