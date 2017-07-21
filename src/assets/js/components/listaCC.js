'use strict';

const ListaCC  = () => {
  const section     = $('<section id="cargarLista"></section>');
  const container   = $('<div class="container"></div>');
  const row         = $('<div class="row"></div>');
  const logo        = $('<div class="col-xs-12"><img src="assets/img/logo.png" alt="Logo de Real Plaza"></div>');
  const btnElegirCC = $('<div class="col-xs-12 col-md-6 text-center"><button type="button" class="btn btn-warning btn-tienda uppercase" name="button" id="elegirCC">tiendas</button></div>');
  const btnLocate   = $('<div class="col-xs-12 col-md-6 text-center"><button type="button" class="btn btn-warning btn-informacion uppercase" name="button" id="localizar">información</button></div>');

  row.append(logo);
  row.append(btnLocate);
  row.append(btnElegirCC);

  container.append(row);
  section.append(container);

  $('.btn-tienda').on('click', () => {
    state.page = 10;
  });

  $('.btn-informacion').on('click', () => {
    state.page = 8;
  });

  return section;
}
