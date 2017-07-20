'use strict';

const getJSON = (url) => {
  return new Promise((resolve,reject) => {
    $.get('http://190.81.175.52:9797/middleware/api/middleware/1?method=metodLabListarRubro&json=%7b%22pi_cod_inmueble%22:16%7d',(res,req,error) => {
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
