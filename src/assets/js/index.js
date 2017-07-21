'use strict';
const  filtro= (array, destino) => {
  return state.data.coordenadas.filter((e,i)=>{
      if(e.DESTINO.indexOf(destino) !== -1){
        return e;
      }
  });
};

const render = (root) => {
  root.empty();
  const wrapper = $('<div class="wrapper">hjjhj</div>');

  if(state.page == 0){
    wrapper.append(ChoiceOption(_=>{ render(root) }));
  } else if (state.page == 1){
    wrapper.append(ChoiceProv(_=>{ render(root) }));
  } else if (state.page == 2){
    wrapper.append(ChoiceMall(_=>{ render(root) }));
  } else if (state.page == 3){
    wrapper.append(ListMall(_=>{ render(root) }));
  }else if (state.page == 4){
    wrapper.append(MapaLocation(_=>{ render(root) }));
  }else if (state.page == 5){
    wrapper.append(MapaMall(_=>{ render(root) }));
  }else if (state.page == 6){
    wrapper.append(MapaMall(_=>{ render(root) }));
  }

  root.append(wrapper);
};
const state = {
  page: 0,
  data:{}
};

$( _ => {

  const cod_depa = 15;
  const cod_inmueble = 16;
  const cod_rubro = 17;

  ListarInmuebles();
  ListarDepartamentos().then((response) => {
    $.each( state.data.departamentos, ( key, value ) =>  {

      // alert( key + ": " + value );
    });
  });
  ListarInmueble(cod_depa);
  ListarRubro(cod_inmueble);
  ListarLocales(cod_inmueble,cod_rubro);
  ListarCoordenadas().then((response)=>{
    var arr = state.data.coordenadas;
    // console.log(filtro(arr,'VACANCY'));
  });

  const root = $("#root");
  render(root);
});
