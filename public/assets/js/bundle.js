(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
const getJSON = (url) => {
  return new Promise((resolve,reject) => {
    $.get(url,(res,req,error) => {
      if (error.status !== 200){
        reject(new Error('Error loading JSON from ' + url + '(' + xhr.status + ')'));
      }else{
        resolve(res);
      }
    });
  });
}
const getJSONID = (url,obj) => {
  return new Promise((resolve,reject) => {
    $.get(url+obj,(res,req,error) => {
      if (error.status !== 200){
        reject(new Error('Error loading JSON from ' + url + '(' + xhr.status + ')'));
      }else{
        resolve(res);
      }
    });
  });
}

const ListarDepartamentos = () => {
  return new Promise((resolve,reject) => {
    getJSON('http://190.81.175.52:9797/middleware/api/middleware/1?method=metodLabListarDepartamento&json={}').then((response) => {
      state.data.departamentos = response.metodLabListarDepartamentoResult["diffgr:diffgram"]['DsLabListarDepartamento']['DtLabListarDepartamento'];
      resolve(state.data.departamentos);
    });
  });
};
const ListarInmuebles = () => {
  return new Promise((resolve,reject) => {
    getJSON('http://190.81.175.52:9797/middleware/api/middleware/1?method=metodLabListarInmueble&json={"ps_cod_departamento":""}').then((response) => {
      state.data.inmuebles = response.metodLabListarInmuebleResult["diffgr:diffgram"]['DsLabListarInmueble']['DtLabListarInmueble'];
      resolve(state.data.inmuebles);
    });
  });
};
const ListarInmueble = (cod_depa) => {
  return new Promise((resolve,reject) => {
    getJSON('http://190.81.175.52:9797/middleware/api/middleware/1?method=metodLabListarInmueble&json={"ps_cod_departamento":"'+cod_depa+'"}').then((response) => {
      state.data.inm_departamento = response.metodLabListarInmuebleResult["diffgr:diffgram"]['DsLabListarInmueble']['DtLabListarInmueble'];
      resolve(state.data.inm_departamento);
    });
  });
};
const ListarRubro = (cod_inmueble) => {
  return new Promise((resolve,reject) => {
    getJSON('http://190.81.175.52:9797/middleware/api/middleware/1?method=metodLabListarRubro&json={"pi_cod_inmueble":'+cod_inmueble+'}').then((response) => {
      state.data.rubros_inmueble = response.metodLabListarRubroResult["diffgr:diffgram"]['DsLabListarRubro']['DtLabListarRubro'];
      resolve(state.data.rubros_inmueble);
    });
  });
};
const ListarLocales = (cod_inmueble,cod_rubro) => {
  return new Promise((resolve,reject) => {
    getJSON('http://190.81.175.52:9797/middleware/api/middleware/1?method=metodLabListarLocales&json={"pi_cod_inmueble":'+cod_inmueble+',"pi_cod_rubro":'+cod_rubro+'}').then((response) => {
      state.data.locales = response.metodLabListarLocalesResult["diffgr:diffgram"]['DsLabListarLocales']['DtLabListarLocales'];
      resolve(state.data.locales);
    });
  });
};
const ListarCoordenadas = () => {
  return new Promise((resolve,reject) => {
    getJSON('http://190.81.175.52:9797/middleware/api/middleware/1?method=metodLabListarCoordenadas&json={}').then((response) => {
      state.data.coordenadas = response.metodLabListarCoordenadasResult['diffgr:diffgram']['DsLabListarCoordenadas']['DtLabListarCoordenadas'];
      resolve(state.data.coordenadas);
      // var arr = state.data.coordenadas;
      // // console.log(state.data.coordenadas);
      // console.log(filtro(arr,'VACANCY'));
      // $.each(arr,( index, value )=> {
      //   // console.log(value.DESTINO);
      // });
    });
  });
};

'use strict';
 const Header = (update) => {
   const header = $('<header></header>');
   return header;
 };

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

},{}]},{},[1])