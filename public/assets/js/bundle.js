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

'use strict';

const HeaderAll = (titulo,number,update) => {
  const header = $('<header></header>');
  const back = $('<span> &#171; </span>');
  const title = $('<h3>'+titulo+'</h3>');

  header.append(back);
  header.append(title);

  back.on('click', (e) => {
    e.preventDefault();
    state.page = number;
    console.log(state.page);
    update();
  });

  return header;
};

var  miUbicacion ;
const initMap = () => {
  var map = new google.maps.Map(document.getElementById("map"), {
zoom: 13,
});
var funcionError = function(error) {
 alert("tenemos un problema con encontrar tu ubicacion")
};
var latitud, longitud;
var funcionExito = function(posicion) {
 latitud = posicion.coords.latitude;
 longitud = posicion.coords.longitude;

 miUbicacion = new google.maps.Marker({
     position: {
         lat: latitud,
         lng: longitud
     },
     map: map,
     animation: google.maps.Animation.DROP,
     title: "Yo me encuentro aqui"
 });


 map.setZoom(18);
 map.setCenter({
     lat: latitud,
     lng: longitud
 });
}

function buscar() {
 if (navigator.geolocation) {
     navigator.geolocation.getCurrentPosition(funcionExito, funcionError);
 }
}

buscar();

        }
      var locations = [
        {lat: -31.563910, lng: 147.154312},
        {lat: -33.718234, lng: 150.363181},
        {lat: -33.727111, lng: 150.371124},
        {lat: -33.848588, lng: 151.209834},
        {lat: -33.851702, lng: 151.216968},
        {lat: -34.671264, lng: 150.863657},
        {lat: -35.304724, lng: 148.662905},
        {lat: -36.817685, lng: 175.699196},
        {lat: -36.828611, lng: 175.790222},
        {lat: -37.750000, lng: 145.116667},
        {lat: -37.759859, lng: 145.128708},
        {lat: -37.765015, lng: 145.133858},
        {lat: -37.770104, lng: 145.143299},
        {lat: -37.773700, lng: 145.145187},
        {lat: -37.774785, lng: 145.137978},
        {lat: -37.819616, lng: 144.968119},
        {lat: -38.330766, lng: 144.695692},
        {lat: -39.927193, lng: 175.053218},
        {lat: -41.330162, lng: 174.865694},
        {lat: -42.734358, lng: 147.439506},
        {lat: -42.734358, lng: 147.501315},
        {lat: -42.735258, lng: 147.438000},
        {lat: -43.999792, lng: 170.463352}
      ]

'use strict';

const ChoiceOption = (update) => {
  const section = $('<section></section>');

  const divDetails = $('<div></div>');
  const title = $('<h2>REAL PLAZA</h2>');
  const subtitle = $('<h2>19 | centros comerciales EN TODO EL PERÚ</h2>');
  const detailsRP = $('<p>Descubre todo lo que tenemos para ti</p>');

  const divChoiceOption = $('<div></div>');
  const btnChoiceRP = $('<button>Ingresa a tu Real Plaza preferido</button>');
  const btnUseLocation = $('<button>Prefiero usar mi ubicación</button>');

  // section.append(HeaderAll('Elige una opción',1,update));
  section.append(divDetails);
  divDetails.append(title);
  divDetails.append(subtitle);
  divDetails.append(detailsRP);

  section.append(divChoiceOption);
  divChoiceOption.append(btnUseLocation);
  divChoiceOption.append(btnChoiceRP);

  btnChoiceRP.on('click', (e) => {
    e.preventDefault();
    state.page = 3;
    update();
  });

  btnUseLocation.on('click', (e) => {
    e.preventDefault();
    state.page = 4;
    update();

  });

  return section;



};

'use strict';
const ChoiceMall = (update) => {
  const section = $('<section></section>');

  const divMall = $('<div></div>');
  const mall = $('<div><p>Real Plaza Chorrillos...</p></div>');
  const btnNext = $('<button>Next</button>');

  section.append(HeaderAll('lista de las tiendas de cada departamento',3,update));

  section.append(divMall);
  divMall.append(mall,btnNext);

  btnNext.on('click', (e) => {
    e.preventDefault();
    state.page = 6;
    update();
  });
  return section;

};

'use strict';

const ChoiceRegion = (update) => {
  const section = $('<section></section>');
  const divChoice = $('<div></div>');

  ListarDepartamentos().then((response) => {
    console.log(state.data.departamentos);
    $.each( state.data.departamentos, ( key, value ) =>  {
      const region = $('<div><p>'+value.NOMBRE_DEPARTAMENTO+'<span>&#187;</span></p></div>');
      divChoice.append(region);
      region.on('click', (e) => {
        e.preventDefault();
        state.page = 5;
        update();
      });
    });
  });

  section.append(HeaderAll('Elige tu tu departamento',2,update));

  section.append(divChoice);

  return section;

};

'use strict';
const DetalleMall  = (update) => {
  const section     = $('<section id="cargarLista"></section>');
  const container   = $('<div class="container"></div>');
  const row         = $('<div class="row"></div>');
  const mapa        = $('<div id="map" class="map"></div>');
  const div         = $('<div class="info-">Detalle Mall y mapa info</div>');
  const btnIr   = $('<button type="button" class="btn btn-warning btn-informacion uppercase" name="button" id="localizar">información</button>');

  row.append(mapa);
  row.append(div);
  row.append(btnIr);

  container.append(row);

  section.append(HeaderAll('Mapa e Info',6,update));
  section.append(container);

  btnIr.on('click', (e) => {
    state.page = 8;
    update();
  });



  return section;
}

'use strict';

const InicioSesion = (update) => {
  const section     = $('<section></section>');
  const container   = $('<div class="container"></div>');
  const row         = $('<div class="row"></div>');
  const h1          = $('<h1>Inicio de Seccion con Facebook y Gmail</h1>');
  const btnNext    = $('<div class="col-xs-12 col-md-6 text-center"><button type="button" class="btn btn-warning btn-connect uppercase" name="button">log in</button></div>');

  row.append(h1,btnNext);

  container.append(row);
  section.append(HeaderAll('Logeate',0,update));
  section.append(container);

  btnNext.on('click',(e) => {
    console.log('click');
    state.page = 2;
    update();
  });

  return section;
}

'use strict';

const ListTiendas  = (update) => {
  const section     = $('<section id="cargarLista"></section>');
  const container   = $('<div class="container"></div>');
  const row         = $('<div class="row"></div>');
  const logo        = $('<div class="col-xs-12"><img src="assets/img/logo.png" alt="Logo de Real Plaza"></div>');
  const btnIr   = $('<div class="col-xs-12 col-md-6 text-center"><button type="button" class="btn btn-warning btn-informacion uppercase" name="button" id="localizar">Ir a Tienda Elegida</button></div>');

  row.append(logo);
  row.append(btnIr);

  container.append(row);
  section.append(HeaderAll('Listado de las tienda o rubros del mall',8,update));
  section.append(container);

  btnIr.on('click', (e) => {
    state.page = 10;
    update();
  });
  return section;
};

'use strict';

const ListaCentros  = (update) => {
  const section     = $('<section id="cargarLista"></section>');
  const container   = $('<div class="container"></div>');
  const row         = $('<div class="row"></div>');
  const logo        = $('<div class="col-xs-12"><img src="assets/img/logo.png" alt="Logo de Real Plaza"></div>');
  const btnElegirCC = $('<div class="col-xs-12 col-md-6 text-center"><button type="button" class="btn btn-warning btn-tienda uppercase" name="button" id="elegirCC">tiendas</button></div>');
  const btnInfo   = $('<div class="col-xs-12 col-md-6 text-center"><button type="button" class="btn btn-warning btn-informacion uppercase" name="button" id="localizar">información</button></div>');

  row.append(logo);
  row.append(btnInfo);
  row.append(btnElegirCC);

  container.append(row);

  section.append(HeaderAll('Mall elegirdo: infoy tiendas(rubros)',5,update));
  section.append(container);

  btnElegirCC.on('click', (e) => {
    state.page = 9;
    update();
  });

  btnInfo.on('click', (e) => {
    state.page = 7;
    update();
  });

  return section;
}

'use strict';

const MapaGrande = (update) => {
  const section     = $('<section></section>');
  const container   = $('<div class="container"></div>');
  const row         = $('<div class="row"></div>');
  const h1        = $('<h1 class="col-xs-12 text-center">Tienda Elegida </h1>');
  const input        = $('<h1 class="col-xs-12 text-center">Buscar </h1>');
  const mapMall     = $('<div class="map-mall">imagen</div>');
  const btnIrTienda = $('<button type="button" class="btn btn-warning btn-informacion uppercase" name="button" id="localizar">Ir a la Tienda</button>');

  row.append(h1,mapMall,btnIrTienda);

  container.append(row);
  section.append(HeaderAll('mapa grande ',10,update));
  section.append(container);

  btnIrTienda.on('click',(e) => {
    state.page = 12;
    update();
  });


  return section;
}

'use strict';
const MapaLocation = (update) => {
  const section     = $('<section></section>');
  const container   = $('<div class="container"></div>');
  const row         = $('<div class="row"></div>');
  const h1          = $('<h1>Mapa de Location con Maps y lista de los real placa cerca</h1>');
  const btnNext    = $('<div class="col-xs-12 col-md-6 text-center"><button type="button" class="btn btn-warning btn-connect uppercase" name="button">log in</button></div>');

  row.append(h1,btnNext);

  container.append(row);
  section.append(HeaderAll('mi ubicacion y lista de todos los Real Plaza en mapa y marcadores',2,update));
  section.append(container);

  btnNext.on('click',() => {
    state.page = 5;
    update();
  });


  return section;

};

'use strict';

const MapaSVG = (update) => {
  const section     = $('<section>Mapa SVG</section>');

  section.append(HeaderAll('mapa svg ',11,update));

  return section;
}

'use strict';
const ComoLlegar = (update) => {
  const section     = $('<section></section>');
  const container   = $('<div class="container"></div>');
  const row         = $('<div class="row"></div>');
  const mapa        = $('<di class=""mapv></div>');
  const div         = $('<div class="info-">Btn Uber y Waze</div>');
  const btnLlegue   = $('<button type="button" class="btn btn-warning btn-informacion uppercase" name="button" id="localizar">Ya llegue</button>');

  row.append(mapa);
  row.append(div);
  row.append(btnLlegue);

  container.append(row);
  section.append(HeaderAll('Bontones de como llegar con uber o Waze',7,update));
  section.append(container);

  btnLlegue.on('click', (e) => {
    state.page = 9;
    update();
  });
  return section;

};

'use strict';

const TiendaElegida = (update) => {
  const section     = $('<section></section>');
  const container   = $('<div class="container"></div>');
  const row         = $('<div class="row"></div>');
  const h1        = $('<h1 class="col-xs-12 text-center">Tienda Elegida </h1>');
  const mapMall     = $('<div class="map-mall"></div>');
  const info_tienda     = $('<div class="info-tienda">hgjhjgkg</div>');
  const btnVerMapaGrande = $('<button type="button" class="btn btn-warning btn-informacion uppercase" name="button" id="localizar">Ver mapa grande</button>');

  row.append(h1,mapMall,info_tienda,btnVerMapaGrande);

  container.append(row);
  section.append(HeaderAll('tienda elegida mapa e info',9,update));
  section.append(container);

  btnVerMapaGrande.on('click',(e) => {
    state.page = 11;
    update();
  });


  return section;
}

'use strict';

const Welcome = (update) => {
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

  btnSignUp.on('click',(e) => {
    state.page = 1;
    update();
  });
  btnLogIn.on('click',(e) => {
    state.page = 1;
    update();
  });

  return section;
}

// 'use strict';
// const MapaMall = (update) => {
//   const section = $('<section></section>');
//
//   const divMap = $('<div></div>');
//   const mapMall =  $('<div id="map">acá va el mapa</div>');
//
//   const divDetails = $('<div></div>');
//   const detailsMall =  $('<div>acá van los detalles</div>');
//
//
//   section.append(HeaderAll('Real Plaza Chorrillos',6,update));
//
//   section.append(divMap);
//   divMap.append(mapMall);
//
//   section.append(divDetails);
//   divDetails.append(detailsMall);
//
//
//
//   return section;
//
// };

'use strict';
const  filtro= (array, destino) => {
  return state.data.coordenadas.filter((e,i)=>{
      if(e.DESTINO.indexOf(destino) !== -1){
        return e;
      }
  });
};

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
  }else if (state.page == 5){
    wrapper.append(ChoiceMall(_=>{ render(root) }));
  }
  else if (state.page == 6){
    wrapper.append(ListaCentros(_=>{ render(root) }));
  }
  else if (state.page == 7){
    wrapper.append(DetalleMall(_=>{ render(root) }));
    setTimeout(function(){
      initMap();
    }, 500);
  }else if (state.page == 8){
    wrapper.append(ComoLlegar(_=>{ render(root) }));


  }else if (state.page == 9){
    wrapper.append(ListTiendas(_=>{ render(root) }));
  }else if (state.page == 10){
    wrapper.append(TiendaElegida(_=>{ render(root) }));
  }else if (state.page == 11){
    wrapper.append(MapaGrande(_=>{ render(root) }));
  }else if (state.page == 12){
    wrapper.append(MapaSVG(_=>{ render(root) }));
  }





  root.append(wrapper);
};
const state = {
  page: 7,
  data:{}
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
    console.log(filtro(arr,'VACANCY'));
  });

  console.log(state.data);
  const root = $("#root");
  render(root);
});

},{}]},{},[1])