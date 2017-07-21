'use strict';

const ListaCentros  = (update) => {
  const section     = $('<section id="cargarLista"></section>');
  const container   = $('<div class="container"></div>');
  const row         = $('<div class="row"></div>');
  const logo        = $('<div class="col-xs-12"><img src="assets/img/logo.png" alt="Logo de Real Plaza"></div>');
  const btnElegirCC = $('<div class="col-xs-12 col-md-6 text-center"><button type="button" class="btn btn-warning btn-tienda uppercase" name="button" id="elegirCC">tiendas</button></div>');
  const btnInfo   = $('<div class="col-xs-12 col-md-6 text-center"><button type="button" class="btn btn-warning btn-informacion uppercase" name="button" id="localizar">información</button></div>');

  row.append(logo);
  row.append(btnInfo);
  row.append(btnElegirCC);

  container.append(row);

  section.append(HeaderAll('Mall elegirdo: infoy tiendas(rubros)',5,update));
  section.append(container);

  btnElegirCC.on('click', (e) => {
    state.page = 9;
    update();
  });

  btnInfo.on('click', (e) => {
    state.page = 7;
    update();
  });

  return section;
}
