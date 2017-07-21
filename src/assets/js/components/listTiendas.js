'use strict';

const ListTiendas  = (update) => {
  // console.log(state.selectTienda.COD_INMUEBLE);;
  const divRubros = $('<div></div>');
  ListarRubro().then((response) => {
    $.each( state.data.rubros_inmueble, ( key, value ) =>  {
      // console.log(value);
      const rubro = $('<div><p>'+value.NOM_RUBRO+'<span>&#187;</span></p></div>');
      const btnIr   = $('<div class="col-xs-12 col-md-6 text-center"><button type="button" class="btn btn-warning btn-informacion uppercase" name="button" id="localizar">Ver tiendas de Rubro</button></div>');
      divRubros.append(rubro,btnIr);
      btnIr.on('click', (e) => {
        // console.log(value.COD_RUBRO);
        state.selectRubro = value.COD_RUBRO;
        state.selectRubro = "7";
        e.preventDefault();
        state.page = 10;
        update();
      });
    });
  });
  const section     = $('<section id="cargarLista"></section>');
  const container   = $('<div class="container"></div>');
  const row         = $('<div class="row"></div>');
  const logo        = $('<div class="col-xs-12"><img src="assets/img/logo.png" alt="Logo de Real Plaza"></div>');

  row.append(logo,divRubros);

  container.append(row);
  section.append(HeaderAll('',8,update));
  section.append(container);
  return section;
};
