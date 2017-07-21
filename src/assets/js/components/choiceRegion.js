'use strict';

const ChoiceRegion = (update) => {
  const section = $('<section class="region"></section>');
  const divChoice = $('<div class="container"></div>');

  ListarDepartamentos().then((response) => {
    // console.log(state.data.departamentos);
    $.each( state.data.departamentos, ( key, value ) =>  {
      const region = $('<div class="col-xs-12"><p>'+value.NOMBRE_DEPARTAMENTO+'<span class="glyphicon glyphicon-tags pull-right"></span></p></div>');
      divChoice.append(region);
      region.on('click', (e) => {
        // console.log(value.COD_DEPARTAMENTO);
        state.selectRegion = "15";
        e.preventDefault();
        state.page = 5;
        update();
      });
    });
  });

  section.append(HeaderAll('',2,update));

  section.append(divChoice);

  return section;

};
