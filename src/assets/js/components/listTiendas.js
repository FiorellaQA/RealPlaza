'use strict';

const ListTiendas = (update) => {
  // console.log(state.selectTienda.COD_INMUEBLE);;
  const divRubros = $('<div></div>');
  ListarRubro().then((response) => {
    $.each(state.data.rubros_inmueble, (key, value) => {
      // console.log(value);

      const contenRubro = $('<div class="contenRubro contDiv col-xs-12 col-lg-12" style="display:flex ;padding:20px 0px ; justify-content:space-between;"></div>');
      const rubro = $('<p>' + value.NOM_RUBRO + '</p>');
      const img = $('<span class="glyphicon glyphicon-tags pull-right"></span>');
      // const btnIr   = $('<button type="button" class="btn btn-warning btn-informacion uppercase" name="button" id="localizar">Ver tiendas de Rubro</button>');

      contenRubro.append(rubro)
      contenRubro.append(img)
      divRubros.append(contenRubro);
      contenRubro.on('click', (e) => {
        // console.log(value.COD_RUBRO);
        state.selectRubro = value.COD_RUBRO;
        state.selectRubro = "7";
        e.preventDefault();
        state.page = 10;
        update();
      });
    });


  });
  const section = $('<section id="cargarLista"></section>');
  const container = $('<div class="container"></div>');
  const row = $('<div class="row"></div>');
  const logo = $('<div class="col-xs-5 col-xs-offset-3 col-lg-3 col-sm-offset-4 text-center"><img class="img-responsive" src="assets/img/logo.png" alt="Logo de Real Plaza"></div>');

  row.append(logo, divRubros);
  container.append(row);
  section.append(HeaderAll('', 8, update));
  section.append(container);
  return section;
};