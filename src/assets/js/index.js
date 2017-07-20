'use strict';
const  filtro= (array, destino) => {
  console.log(state.data);
  return state.data.coordenadas.filter((e,i)=>{
      if(e.DESTINO.indexOf(destino) !== -1){
        return e;
      }
  });
};

const render = (root) => {
  root.empty();
  const wrapper = $('<div class="wrapper">hjjhj</div>');

  if(state.page == null){
    wrapper.append(Header(_=>{ render(root) }));
  }

  root.append(wrapper);
}

const state = {
  page: null,
  data:{}
};

$( _ => {

  const cod_depa = 15;
  const cod_inmueble = 16;
  const cod_rubro = 17;

  ListarInmuebles();
  ListarDepartamentos();
  ListarInmueble(cod_depa);
  ListarRubro(cod_inmueble);
  ListarLocales(cod_inmueble,cod_rubro);
  ListarCoordenadas().then((response)=>{
    console.log(state.data.coordenadas);
    var arr = state.data.coordenadas;
    console.log(filtro(arr,'VACANCY'));
  });


  // const root = $("#root");
  // render(root);
});
