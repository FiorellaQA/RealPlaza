'use strict';


const render = (root) => {
  root.empty();
  const wrapper = $('<div class="wrapper"></div>');

  if(state.page == 0){
    wrapper.append(Welcome(_=>{ render(root) }));
  }else if(state.page == 1){
    wrapper.append(InicioSesion(_=>{ render(root) }));
  }else if (state.page == 2){
    wrapper.append(ChoiceOption(_=>{ render(root) }));
  }else if (state.page == 3){
    wrapper.append(ChoiceRegion(_=>{ render(root) }));
  }else if (state.page == 4){
    wrapper.append(MapaLocation(_=>{ render(root) }));
    setTimeout(function(){
      initMap("map-location");
    },500);
  }else if (state.page == 5){
    wrapper.append(ChoiceMall(_=>{ render(root) }));
  }
  else if (state.page == 6){
    wrapper.append(ListaCentros(_=>{ render(root) }));
  }
  else if (state.page == 7){
    wrapper.append(DetalleMall(_=>{ render(root) }));
    setTimeout(function(){
      initMap('map-detail');
    },500);
  }else if (state.page == 8){
    wrapper.append(ComoLlegar(_=>{ render(root) }));
  }else if (state.page == 9){
    wrapper.append(ListTiendas(_=>{ render(root) }));
  }else if (state.page == 10){
    wrapper.append(TiendaElegida(_=>{ render(root) }));
  }else if (state.page == 11){
    wrapper.append(MapaGrande(_=>{ render(root) }));
  }else if (state.page == 12){
    wrapper.append(MapaSVG(state.selectTienda,_=>{ render(root) }));
  }

  root.append(wrapper);
};
const state = {
  page: 2,
  data:{},
  selectRegion:null,
  selectTienda:null
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

  // console.log(state.data);
  const root = $("#root");
  render(root);
});
