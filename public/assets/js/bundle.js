(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

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
const getJSONID = (url,id) => {
  return new Promise((resolve,reject) => {
    $.get(url+id,(res,req,error) => {
      if (error.status !== 200){
        reject(new Error('Error loading JSON from ' + url + '(' + xhr.status + ')'));
      }else{
        resolve(res);
      }
    });
  });
}

// function destinoCoord(local){
// }

'use strict';
const render = (root) => {
  root.empty();

}
const state = {
  page: null,
  data:{}

};

$( _ => {

  const root = $("#root");
  getJSON("http://190.81.175.52:9797/middleware/api/middleware/1?method=metodLabListarCoordenadas&json=%7B%7D").then((response) => {
  state.data.coordenadas=response;
  // console.log(state.data.coordenadas);
  var array = state.data.coordenadas;
  var nuevo = array.map((e,i)=>{
    return e;
    // if(e['DESTINO']){
    //
    // }
  });
  console.log(nuevo);

// console.log(state.data.coordenadas.metodLabListarCoordenadasResult['diffgr:diffgram']['DsLabListarCoordenadas']['DtLabListarCoordenadas']['0']['COD_INMUEBLE']);
//     // console.log(state.data.coordenadas.metodLabListarRubroResult['diffgr:diffgram']['DsLabListarRubro']['DtLabListarRubro']);
// console.log(state.data.coordenadas.metodLabListarCoordenadasResult['diffgr:diffgram']['DsLabListarCoordenadas']['DtLabListarCoordenadas']['0']['ITEM']);  // NOMBRE/DESTINO
// console.log(state.data.coordenadas.metodLabListarCoordenadasResult['diffgr:diffgram']['DsLabListarCoordenadas']['DtLabListarCoordenadas']['0']['DESTINO']);
// console.log(state.data.coordenadas.metodLabListarCoordenadasResult['diffgr:diffgram']['DsLabListarCoordenadas']['DtLabListarCoordenadas']['0']['X2']);
// console.log(state.data.coordenadas.metodLabListarCoordenadasResult['diffgr:diffgram']['DsLabListarCoordenadas']['DtLabListarCoordenadas']['0']['Y2']);
// console.log(state.data.coordenadas.metodLabListarCoordenadasResult['diffgr:diffgram']['DsLabListarCoordenadas']['DtLabListarCoordenadas']['0']);
//
//
// console.log(state.data.coordenadas.metodLabListarCoordenadasResult['diffgr:diffgram']['DsLabListarCoordenadas']['DtLabListarCoordenadas']['0']['DESTINO']);
// console.log(state.data.coordenadas.metodLabListarCoordenadasResult['diffgr:diffgram']['DsLabListarCoordenadas']['DtLabListarCoordenadas']['1']['DESTINO']);
// console.log(state.data.coordenadas.metodLabListarCoordenadasResult['diffgr:diffgram']['DsLabListarCoordenadas']['DtLabListarCoordenadas']['2']['DESTINO']);
// console.log(state.data.coordenadas.metodLabListarCoordenadasResult['diffgr:diffgram']['DsLabListarCoordenadas']['DtLabListarCoordenadas']['3']['DESTINO']);
// // console.log(state.data.coordenadas.metodLabListarCoordenadasResult['diffgr:diffgram']['DsLabListarCoordenadas']['DtLabListarCoordenadas']);
      // .metodLabListarRubroResult['diffgr:diffgram']);
//
//     const destino=state.data.coordenadas.metodLabListarCoordenadasResult['diffgr:diffgram']['DsLabListarCoordenadas']['DtLabListarCoordenadas']);
// console.log("destino" + destino);



  });



});

},{}]},{},[1])