'use strict';

const ChoiceRegion = (update) => {
  const section = $('<section></section>');
  const divChoice = $('<div></div>');

  ListarDepartamentos().then((response) => {
    console.log(state.data.departamentos);
    $.each( state.data.departamentos, ( key, value ) =>  {
      const region = $('<div><p>'+value.NOMBRE_DEPARTAMENTO+'<span>&#187;</span></p></div>');
      divChoice.append(region);
      region.on('click', (e) => {
        e.preventDefault();
        state.page = 5;
        update();
      });
    });
  });

  section.append(HeaderAll('Elige tu tu departamento',2,update));

  section.append(divChoice);

  return section;

};
