'use strict';

const InicioSesion = (update) => {
  const section     = $('<section></section>');
  const container   = $('<div class="container"></div>');
  const row         = $('<div class="row"></div>');
  const h1          = $('<h1>Inicio de Seccion con Facebook y Gmail</h1>');
  const btnNext    = $('<div class="col-xs-12 col-md-6 text-center"><button type="button" class="btn btn-warning btn-connect uppercase" name="button">log in</button></div>');

  row.append(h1,btnNext);

  container.append(row);
  section.append(HeaderAll('Logeate',0,update));
  section.append(container);

  btnNext.on('click',(e) => {
    state.page = 2;
    update();
  });

  return section;
}
