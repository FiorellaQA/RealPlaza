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
    getJSON('data/ListarDepartamentos.json').then((response) => {
      state.data.departamentos = response.metodLabListarDepartamentoResult["diffgr:diffgram"]['DsLabListarDepartamento']['DtLabListarDepartamento'];
      resolve(state.data.departamentos);
    });
  });
};

const ListarInmuebles = () => {
  return new Promise((resolve,reject) => {
    getJSON('data/ListarInmuebles.json').then((response) => {
      state.data.inmuebles = response.metodLabListarInmuebleResult["diffgr:diffgram"]['DsLabListarInmueble']['DtLabListarInmueble'];
      resolve(state.data.inmuebles);
    });
  });
};
const ListarInmueble = (cod_depa) => {
  return new Promise((resolve,reject) => {
    getJSON('data/ListarInmueble.json').then((response) => {
      state.data.inm_departamento = response.metodLabListarInmuebleResult["diffgr:diffgram"]['DsLabListarInmueble']['DtLabListarInmueble'];
      resolve(state.data.inm_departamento);
    });
  });
};
const ListarRubro = (cod_inmueble) => {
  return new Promise((resolve,reject) => {
    getJSON('data/ListarRubro.json').then((response) => {
      state.data.rubros_inmueble = response.metodLabListarRubroResult["diffgr:diffgram"]['DsLabListarRubro']['DtLabListarRubro'];
      resolve(state.data.rubros_inmueble);
    });
  });
};
const ListarLocales = (cod_inmueble,cod_rubro) => {
  return new Promise((resolve,reject) => {
    getJSON('data/ListarLocales.json').then((response) => {
      state.data.locales = response.metodLabListarLocalesResult["diffgr:diffgram"]['DsLabListarLocales']['DtLabListarLocales'];
      resolve(state.data.locales);
    });
  });
};
const ListarCoordenadas = () => {
  return new Promise((resolve,reject) => {
    getJSON('data/ListarCoordenadas.json').then((response) => {
      state.data.coordenadas = response.metodLabListarCoordenadasResult['diffgr:diffgram']['DsLabListarCoordenadas']['DtLabListarCoordenadas'];
      resolve(state.data.coordenadas);
    });
  });
};
// const ListarDepartamentos = () => {
//   return new Promise((resolve,reject) => {
//     getJSON('http://190.81.175.52:9797/middleware/api/middleware/1?method=metodLabListarDepartamento&json={}').then((response) => {
//       state.data.departamentos = response.metodLabListarDepartamentoResult["diffgr:diffgram"]['DsLabListarDepartamento']['DtLabListarDepartamento'];
//       resolve(state.data.departamentos);
//     });
//   });
// };
// const ListarInmuebles = () => {
//   return new Promise((resolve,reject) => {
//     getJSON('http://190.81.175.52:9797/middleware/api/middleware/1?method=metodLabListarInmueble&json={"ps_cod_departamento":""}').then((response) => {
//       state.data.inmuebles = response.metodLabListarInmuebleResult["diffgr:diffgram"]['DsLabListarInmueble']['DtLabListarInmueble'];
//       resolve(state.data.inmuebles);
//     });
//   });
// };
// const ListarInmueble = (cod_depa) => {
//   return new Promise((resolve,reject) => {
//     getJSON('http://190.81.175.52:9797/middleware/api/middleware/1?method=metodLabListarInmueble&json={"ps_cod_departamento":"'+cod_depa+'"}').then((response) => {
//       state.data.inm_departamento = response.metodLabListarInmuebleResult["diffgr:diffgram"]['DsLabListarInmueble']['DtLabListarInmueble'];
//       resolve(state.data.inm_departamento);
//     });
//   });
// };
// const ListarRubro = (cod_inmueble) => {
//   return new Promise((resolve,reject) => {
//     getJSON('http://190.81.175.52:9797/middleware/api/middleware/1?method=metodLabListarRubro&json={"pi_cod_inmueble":'+cod_inmueble+'}').then((response) => {
//       state.data.rubros_inmueble = response.metodLabListarRubroResult["diffgr:diffgram"]['DsLabListarRubro']['DtLabListarRubro'];
//       resolve(state.data.rubros_inmueble);
//     });
//   });
// };
// const ListarLocales = (cod_inmueble,cod_rubro) => {
//   return new Promise((resolve,reject) => {
//     getJSON('http://190.81.175.52:9797/middleware/api/middleware/1?method=metodLabListarLocales&json={"pi_cod_inmueble":'+cod_inmueble+',"pi_cod_rubro":'+cod_rubro+'}').then((response) => {
//       state.data.locales = response.metodLabListarLocalesResult["diffgr:diffgram"]['DsLabListarLocales']['DtLabListarLocales'];
//       resolve(state.data.locales);
//     });
//   });
// };
// const ListarCoordenadas = () => {
//   return new Promise((resolve,reject) => {
//     getJSON('http://190.81.175.52:9797/middleware/api/middleware/1?method=metodLabListarCoordenadas&json={}').then((response) => {
//       state.data.coordenadas = response.metodLabListarCoordenadasResult['diffgr:diffgram']['DsLabListarCoordenadas']['DtLabListarCoordenadas'];
//       resolve(state.data.coordenadas);
//       // var arr = state.data.coordenadas;
//       // // console.log(state.data.coordenadas);
//       // console.log(filtro(arr,'VACANCY'));
//       // $.each(arr,( index, value )=> {
//       //   // console.log(value.DESTINO);
//       // });
//     });
//   });
// };
