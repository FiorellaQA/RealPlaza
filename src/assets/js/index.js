'use strict';

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
  getJSON('http://190.81.175.52:9797/middleware/api/middleware/1?method=metodLabListarDepartamento&json={}').then((response) => {
    state.data.departamentos = response.metodLabListarDepartamentoResult["diffgr:diffgram"]['DsLabListarDepartamento']['DtLabListarDepartamento'];
  });
  getJSON('http://190.81.175.52:9797/middleware/api/middleware/1?method=metodLabListarInmueble&json={"ps_cod_departamento":""}').then((response) => {
    state.data.inmuebles = response.metodLabListarInmuebleResult["diffgr:diffgram"]['DsLabListarInmueble']['DtLabListarInmueble'];
  });
  const cod_depa = 15;
  const cod_inmueble = 16;
  const cod_rubro = 17;

  ListarInmueble(cod_depa);
  ListarRubro(cod_inmueble);
  ListarLocales(cod_inmueble,cod_rubro);

  // console.log(state.data);
  // const root = $("#root");
  // render(root);
});
