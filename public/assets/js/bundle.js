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


const ListarInmueble = (cod_depa) => {
  getJSON('http://190.81.175.52:9797/middleware/api/middleware/1?method=metodLabListarInmueble&json={"ps_cod_departamento":"'+cod_depa+'"}').then((response) => {
    state.data.inm_departamento = response.metodLabListarInmuebleResult["diffgr:diffgram"]['DsLabListarInmueble']['DtLabListarInmueble'];
  });
};
const ListarRubro = (cod_inmueble) => {
  getJSON('http://190.81.175.52:9797/middleware/api/middleware/1?method=metodLabListarRubro&json={"pi_cod_inmueble":'+cod_inmueble+'}').then((response) => {
    state.data.rubros_inmueble = response.metodLabListarRubroResult["diffgr:diffgram"]['DsLabListarRubro']['DtLabListarRubro'];
  });
};
const ListarLocales = (cod_inmueble,cod_rubro) => {
  getJSON('http://190.81.175.52:9797/middleware/api/middleware/1?method=metodLabListarLocales&json={"pi_cod_inmueble":'+cod_inmueble+',"pi_cod_rubro":'+cod_rubro+'}').then((response) => {
    state.data.locales = response.metodLabListarLocalesResult["diffgr:diffgram"]['DsLabListarLocales']['DtLabListarLocales'];
  });
};

'use strict';

const IniciarSesion = (update) => {
  const section     = $('<section></section>');
  const container   = $('<div class="container"></div>');
  const row         = $('<div class="row"></div>');
  const logo        = $('<div class="col-xs-12 text-center"><img src="assets/img/logo.png" class="img-responsive" alt="Logo de Real Plaza"></div>');
  const btnSignUp   = $('<div class="col-xs-12 col-md-6 text-center"><button type="button" class="btn btn-warning btn-connect uppercase" name="button">sign up</button></div>');
  const btnLogIn    = $('<div class="col-xs-12 col-md-6 text-center"><button type="button" class="btn btn-warning btn-connect uppercase" name="button">log in</button></div>');

  row.append(logo);
  row.append(btnSignUp);
  row.append(btnLogIn);

  container.append(row);
  section.append(container);

  $('.btn-connect').on('click',() => {
    state.page = 2;
  });


  return section;
}

'use strict';

const ListaCC  = () => {
  const section     = $('<section id="cargarLista"></section>');
  const container   = $('<div class="container"></div>');
  const row         = $('<div class="row"></div>');
  const logo        = $('<div class="col-xs-12"><img src="assets/img/logo.png" alt="Logo de Real Plaza"></div>');
  const btnElegirCC = $('<div class="col-xs-12 col-md-6 text-center"><button type="button" class="btn btn-warning btn-tienda uppercase" name="button" id="elegirCC">tiendas</button></div>');
  const btnLocate   = $('<div class="col-xs-12 col-md-6 text-center"><button type="button" class="btn btn-warning btn-informacion uppercase" name="button" id="localizar">información</button></div>');

  row.append(logo);
  row.append(btnLocate);
  row.append(btnElegirCC);

  container.append(row);
  section.append(container);

  $('.btn-tienda').on('click', () => {
    state.page = 10;
  });

  $('.btn-informacion').on('click', () => {
    state.page = 8;
  });

  return section;
}

'use strict';

const Rubros = (update) => {
  const section     = $('<section></section>');
  const container   = $('<div class="container"></div>');
  const row         = $('<div class="row"></div>');

  container.append(row);
  section.append(container);

  $.each(state.data,(index,json) => {
    let rubro = createRubro(json);
    container.append(rubro);
  });

  return section;
}

const createRubro = (json) => {
  const row       = $('<div class="content-history row"></div>');
  const texto     = $('<div class="col-xs-12"><label class="texto">'+ +'</label></div>');
  const tiendas   = $('<div class="col-xs-12"><a href="" class="pull-right comentar" data-id="">Ver tiendas</a></div>');

  row.append(texto);
  row.append(comentar);

  return row;

  $('.comentar').on('click',() => {
    state.page = 12;
  });

}

'use strict';

const Tiendas = (update) => {
  const section     = $('<section></section>');
  const container   = $('<div class="container"></div>');
  const row         = $('<div class="row"></div>');
  const logo        = $('<div class="col-xs-12 text-center"><img src="assets/img/logo.png" class="img-responsive" alt="Logo de Real Plaza"></div>');
  const btnSignUp   = $('<div class="col-xs-12 col-md-6 text-center"><button type="button" class="btn btn-warning btn-connect uppercase" name="button">sign up</button></div>');
  const btnLogIn    = $('<div class="col-xs-12 col-md-6 text-center"><button type="button" class="btn btn-warning btn-connect uppercase" name="button">log in</button></div>');

  row.append(logo);
  row.append(btnSignUp);
  row.append(btnLogIn);

  container.append(row);
  section.append(container);

  $('.btn-connect').on('click',() => {
    state.page = 2;
  });


  return section;
}

'use strict';

const render = (root) => {
  root.empty();
  const wrapper = $('<div class="wrapper"></div>');

  if(state.page == null){
    wrapper.append(IniciarSesion(_=>{ render(root) }));
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

  console.log(state.data);
  const root = $("#root");
  render(root);
});

},{}]},{},[1])