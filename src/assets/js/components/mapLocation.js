'use strict';
const MapaLocation = (update) => {
  const section     = $('<section></section>');
  const container   = $('<div class="container"></div>');
  const row         = $('<div class="row"></div>');
  const h1          = $('<h1>Mapa de Location con Maps y lista de los real placa cerca</h1>');
  const btnNext    = $('<div class="col-xs-12 col-md-6 text-center"><button type="button" class="btn btn-warning btn-connect uppercase" name="button">log in</button></div>');

  row.append(h1,btnNext);

  container.append(row);
  section.append(HeaderAll('mi ubicacion y lista de todos los Real Plaza en mapa y marcadores',2,update));
  section.append(container);

  btnNext.on('click',() => {
    state.page = 5;
    update();
  });


  return section;

};
