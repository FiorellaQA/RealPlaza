'use strict';
const ChoiceMall = (update) => {
  // console.log(state.selectRegion);
  const divMall = $('<div></div>');
  ListarInmueble().then((response) => {
    // console.log(state.data.inm_departamento);
    $.each(state.data.inm_departamento, ( key, value ) =>  {
      const name = $('<div><h2>'+value.NOM_INMUEBLE+'</h2></div>');
      const direccion = $('<div><h2>'+value.DIRECCION+'</h2></div>');
      const btnNext = $('<button>Ir</button>');
      btnNext.on('click',(e)=>{
        state.selectTienda = value;
        e.preventDefault();
        state.page = 6;
        update();
      });
      divMall.append(name,direccion,btnNext);
    });
  });
  const section = $('<section></section>');

  section.append(HeaderAll('',3,update));

  section.append(divMall);

  return section;

};