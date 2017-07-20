'use strict';
const render = (root) => {
  root.empty();

}
const state = {
  page: null,
  data:null

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
