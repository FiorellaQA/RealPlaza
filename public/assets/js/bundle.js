<<<<<<< HEAD
'use strict';
const render = (root) => {
  root.empty();

=======
(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
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

'use strict';

const render = (root) => {
  root.empty();
  const wrapper = $('<div class="wrapper"></div>');

  if(state.page == null){
    wrapper.append(Header(_=>{ render(root) }));
  }

  root.append(wrapper);
>>>>>>> 25495cc1dc972a7cc76407c4445ad9ffcb52a5bb
}
const state = {
  page: null,
  data:null
<<<<<<< HEAD

};

$( _ => {
  const root = $("#root");
  //primer punto

  getJSON('http://190.81.175.52:9797/middleware/api/middleware/1?method=metodLabListarInmueble&json=%7b%22ps_cod_departamento%22:%22%22%7d', (err, json) => {
  state.page = json;
  console.log(json);
  });

    render(root);
});


'use strict';
var getJSON = (url, cb) => {
  var xhr = new XMLHttpRequest();
  xhr.addEventListener('load', () => {
    if (xhr.status !== 200) {
      return cb(new Error('Error loading JSON from ' + url + '(' + xhr.status + ')'));
    } cb(null, xhr.response);
  });

  xhr.open('GET', url);
  xhr.responseType = 'json';
  xhr.send();
};
=======
};

$( _ => {
  getJSON("http://190.81.175.52:9797/middleware/api/middleware/1?method=metodLabListarCoordenadas&json=%7B%7D").then((response) => {
    console.log(response);
  });
  // const root = $("#root");
  // render(root);
});

},{}]},{},[1])
>>>>>>> 25495cc1dc972a7cc76407c4445ad9ffcb52a5bb
