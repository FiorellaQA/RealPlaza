'use strict';

const Rubros = (update) => {
  const section     = $('<section></section>');
  const container   = $('<div class="container"></div>');
  const row         = $('<div class="row"></div>');

  container.append(row);
  section.append(container);

  $.each(state.data,(index,json) => {
    let rubro = createRubro(json);
    container.append(rubro);
  });

  return section;
}

const createRubro = (json) => {
  const row       = $('<div class="content-history row"></div>');
  const texto     = $('<div class="col-xs-12"><label class="texto">'+ +'</label></div>');
  const tiendas   = $('<div class="col-xs-12"><a href="" class="pull-right comentar" data-id="">Ver tiendas</a></div>');

  row.append(texto);
  row.append(comentar);

  return row;

  $('.comentar').on('click',() => {
    state.page = 12;
  });

}
