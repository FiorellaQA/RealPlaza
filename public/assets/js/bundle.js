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

const filterByName = (comercial,name) => {
  // var index = stations.map(e=>e.district.toLowerCase()).indexOf(query.toLowerCase());
  return comercial.filter((e)=>{
    if(e.DESTINO.toLowerCase().lastIndexOf(name.toLowerCase()) !== -1){
      return e;
    }
  });
  // return stations.filter(e => e.district.toLowerCase().indexOf(query.toLowerCase() !== -1 ? e:"no encontrado" ));
}

'use strict';

const  filtro= (array, destino) => {
  return state.data.coordenadas.filter((e,i)=>{
      if(e.DESTINO.indexOf(destino) !== -1){
        return e;
      }
  });
};

'use strict';

const HeaderAll = (titulo,number,update) => {
  const header = $('<header></header>');
  const row    = $('<div class="container vertical-align"></row>');
  const back   = $('<div class="col-xs-2"><span class="glyphicon glyphicon-chevron-left"></span></div>');
  const title  = $('<div class="col-xs-10"><h3>'+titulo+'</h3></div>');

  row.append(back);
  row.append(title);
  header.append(row);

  back.on('click', (e) => {
    e.preventDefault();
    state.page = number;
    console.log(state.page);
    update();
  });

  return header;
};


//centros
const laboratoriaLima = { lat: -12.1191427, lng: -77.0349046};
const RPChorrillos = {lat: -12.172645, lng: -76.992717};
let myLocation;

const initMap = (mapa,centro) => {

  var map = new google.maps.Map(document.getElementById(mapa), {
    zoom: 18,
    center: centro,
  });

  var marker;
  var functionLocalization = function(position) {
    var pos = {
      lat: position.coords.latitude,
      lng: position.coords.longitude,
    };
    //map.setCenter(pos);
    map.setZoom(18);

    marker = new google.maps.Marker({
      position: pos,
      map: map
    });
  };

  var functionNotFounded = function(error) {
    alert("Encontramos un inconveniente para ver tu ubicación");
  };

  if (navigator.geolocation) {
    myLocation = navigator.geolocation.getCurrentPosition(functionLocalization, functionNotFounded);
    return myLocation;
  }


};




/*var labels = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

 var markers = locations.map(function(location, i) {
 return new google.maps.Marker({
 position: location,
 label: labels[i % labels.length]
 });
 });


 // Add a marker clusterer to manage the markers.
 var markerCluster = new MarkerClusterer(map, markers,
 {imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m'});
 */
/*
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
  ];
*/


/*
$( _ => {
  const mapa = $('<div id="map"></div>');
  $('.root').append(mapa);
  initMap();
 });*/

'use strict';
const ChoiceMall = (update) => {
  // console.log(state.selectRegion);
  const divMall = $('<div></div>');
  ListarInmueble().then((response) => {
    // console.log(state.data.inm_departamento);
    $.each(state.data.inm_departamento, ( key, value ) =>  {
      const name = $('<div><h2>'+value.NOM_INMUEBLE+'</h2></div>');
      const direccion = $('<div><h2>'+value.DIRECCION+'</h2></div>');
      const btnNext = $('<button>Ir</button>');
      btnNext.on('click',(e)=>{
        state.selectTienda = value;
        e.preventDefault();
        state.page = 6;
        update();
      });
      divMall.append(name,direccion,btnNext);
    });
  });
  const section = $('<section></section>');

  section.append(HeaderAll('',3,update));

  section.append(divMall);

  return section;

};

'use strict';

const ChoiceOption = (update) => {
  const section = $('<section class="choiceOption_bg container-fluid"></section>');

  const divDetails = $('<div class="row"></div>');
  const colTexto = $('<div class="col-xs-12"></div>');
  const title = $('<h2 class="localizacion__title">Encuentra tu centro comercial más cercano</h2>');
  const subtitle = $('<p class="localizacion__subtitle">Vive la experiencia de comprar usando tu localización</p>');

  const divChoiceOption = $('<div class="row"></div>');
  const colBtn = $('<div class="col-xs-12 choiceOption_groupBtn"></div>');
  const btnChoiceRP = $('<button class="btn btn-connect btn-lg uppercase">Ubícame</button>');
  const btnUseLocation = $('<p class="text">Listado de centros comerciales</p>');

  divChoiceOption.append(colBtn);
  colBtn.append(btnChoiceRP);
  colBtn.append(btnUseLocation);

  divDetails.append(colTexto);
  colTexto.append(title);
  colTexto.append(subtitle);

  section.append(divChoiceOption)
  section.append(divDetails);

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

const ChoiceRegion = (update) => {
  const section = $('<section class="region"></section>');
  const divChoice = $('<div class="container"></div>');

  ListarDepartamentos().then((response) => {
    $.each( state.data.departamentos, ( key, value ) =>  {
      const region = $('<div class="col-xs-12 img-region"><p>'+value.NOMBRE_DEPARTAMENTO+'<span class="glyphicon glyphicon-tags pull-right"></span></p></div>');
      divChoice.append(region);
      region.on('click', (e) => {
        // console.log(value.COD_DEPARTAMENTO);
        state.selectRegion = "15";
        e.preventDefault();
        state.page = 5;
        update();
      });
    });
  });

  section.append(HeaderAll('',2,update));

  section.append(divChoice);

  return section;

};

'use strict';
const DetalleMall  = (update) => {
  console.log(state.selectTienda);
  const section     = $('<section id="cargarLista"></section>');
  const container   = $('<div class="container"></div>');
  const row         = $('<div class="row"></div>');

  const mapa        = $('<div id="map-detail" class="map"></div>');
  const div         = $('<div class="info-">Detalle Mall y mapa info</div>');
  const name        = $('<h2>'+state.selectTienda.NOM_INMUEBLE+'</h2>');
  const direccion   = $('<div><h3>'+state.selectTienda.DIRECCION+'</h3><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p</div>');
  const btnIr       = $('<button type="button" class="btn btn-warning btn-informacion uppercase" name="button" id="localizar"><a href="https://www.waze.com/ul?preview_venue_id=185468558.1854751119.2213539" target="_blank">Ir con Waze</a></button>');

  row.append(mapa);
  div.append(name,direccion);
  row.append(div);
  row.append(btnIr);

  container.append(row);

  section.append(HeaderAll('',6,update));
  section.append(container);

  btnIr.on('click', (e) => {
    state.page = 8;
    update();
  });

  return section;
};

'use strict';

const InicioSesion = (update) => {
	const section = $('<section></section>');
	const container = $('<div id="login" class="container-fluid"></div>');

	const rowImage = $('<div class="login__bg row"></div>');
	const rowBtn = $('<div class="login_btn contentButton row"></div>');

	const btn = $('<button type="button" class="btn btn-connect btn-lg uppercase" name="button">Facebook</button>');

	rowBtn.append(btn);

  	container
		.append(rowImage)
		.append(rowBtn);

  /*section.append(HeaderAll('Logeate',0,update));*/
  	section.append(container);

  btn.on('click',(e) => {
    console.log('click');
    state.page = 2;
    update();
  });

  return section;
}

'use strict';

const ListTiendas  = (update) => {
  // console.log(state.selectTienda.COD_INMUEBLE);;
  const divRubros = $('<div></div>');
  ListarRubro().then((response) => {
    $.each( state.data.rubros_inmueble, ( key, value ) =>  {
      // console.log(value);
      const rubro = $('<div><p>'+value.NOM_RUBRO+'<span>&#187;</span></p></div>');
      const btnIr   = $('<div class="col-xs-12 col-md-6 text-center"><button type="button" class="btn btn-warning btn-informacion uppercase" name="button" id="localizar">Ver tiendas de Rubro</button></div>');
      divRubros.append(rubro,btnIr);
      btnIr.on('click', (e) => {
        // console.log(value.COD_RUBRO);
        state.selectRubro = value.COD_RUBRO;
        state.selectRubro = "7";
        e.preventDefault();
        state.page = 10;
        update();
      });
    });
  });
  const section     = $('<section id="cargarLista"></section>');
  const container   = $('<div class="container"></div>');
  const row         = $('<div class="row"></div>');
  const logo        = $('<div class="col-xs-12"><img src="assets/img/logo.png" alt="Logo de Real Plaza"></div>');

  row.append(logo,divRubros);

  container.append(row);
  section.append(HeaderAll('',8,update));
  section.append(container);
  return section;
};

'use strict';

const ListaCentros  = (update) => {
  // console.log(state.selectTienda);
  const section     = $('<section id="cargarLista"></section>');
  const container   = $('<div class="container"></div>');
  const row         = $('<div class="row"></div>');
  const logo        = $('<div class="col-xs-12"><img src="assets/img/logo.png" alt="Logo de Real Plaza"></div>');
  const btnElegirCC = $('<div class="col-xs-12 col-md-6 text-center"><button type="button" class="btn btn-warning btn-tienda uppercase" name="button" id="elegirCC">tiendas</button></div>');
  const btnInfo     = $('<div class="col-xs-12 col-md-6 text-center"><button type="button" class="btn btn-warning btn-informacion uppercase" name="button" id="localizar">información</button></div>');

  row.append(logo);
  row.append(btnInfo);
  row.append(btnElegirCC);

  container.append(row);

  section.append(HeaderAll('',5,update));
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
  console.log(state.selectTienda.COD_INMUEBLE);


  const section     = $('<section class="map-svg text-center"></section>');
  const container   = $('<div class="container"></div>');
  const row         = $('<div class="row"></div>');

  const btnIrTienda = $('<button type="button" class="btn btn-warning btn-informacion uppercase" name="button" id="localizar">Ir a la Tienda</button>');
  const h3          = $('<h3 class="text-center">Elige tu tienda <span>favorita</span></h3>');
  const input       = $('<input type ="text" id="buscar_comercial" placeholder="Escríbela aquí"/>');
  const mapMall     = $('<div class="map-mall"><img src="assets/img/guardia_civil.png"></div>');
  const result      = $('<div class="result"></div>');

  ListarCoordenadas().then((response) => {
    input.on('keyup',(e) => {
      const filteredComercial = filterByName(state.data.coordenadas,input.val());
      reRender(result,filteredComercial,update);
    });
    // filterByName(state.data.coordenadas,input.val());
    reRender(result,state.data.coordenadas,update);


  });


  row.append(h3,input,mapMall);

  container.append(row);
  section.append(HeaderAll('',10,update));
  section.append(container,result);

  return section;
}

const ComercialItem = (tienda,update) => {
  const item = $('<div class="item col-xs-6 col-sm-4 blue-grey lighten-5 section" id=""><p>'+tienda.DESTINO+'</p></div>');
  const btnIrTienda = $('<button type="button" class="btn btn-warning btn-informacion uppercase" name="button" id="localizar">Ir a la Tienda</button>');

  btnIrTienda.on('click',(e) => {
    state.codigoInmueble = "5";
    state.page = 12;
    state.nombreDestino = tienda.DESTINO;
    update();
  });

  item.append(btnIrTienda);

  return item;
};

const reRender = (container,filteredComercial,update) => {
  container.empty();
  if (filteredComercial.length > 0) {
    $.each(filteredComercial,(index,tienda) => {
      container.append(ComercialItem(tienda,update));
    });
  } else {
    container.append($('<p>Tienda no encontrada</p>'));
  }
}
'use strict';
const MapaLocation = (update) => {
  const section    = $('<section></section>');
  const container  = $('<div class="container"></div>');
  const row        = $('<div class="row"></div>');
  const divMap     = $('<div id="map-location" class="map"></div>');

  ListarInmueble().then((response) => {
    console.log(state.data.inm_departamento);
    $.each(state.data.inm_departamento, ( key, value ) =>  {
      const divMall   = $('<div class="col-xs-12"></div>');
      const name      = $('<div><h2>'+value.NOM_INMUEBLE+'</h2></div>');
      const direccion = $('<div><h2>'+value.DIRECCION+'</h2></div>');
      const btnNext   = $('<button class="push-right">Ver Detalle</button>');
      btnNext.on('click',(e)=>{
        state.selectTienda = value;
        e.preventDefault();
        state.page = 6;
        update();
      });
      divMall.append(name,direccion,btnNext);
    });
  });

  const irRP      = $('<a href="https://www.waze.com/ul?preview_venue_id=185468558.1854751119.2213539" target="_blank"><button>Usar Waze</button></a>');
  row.append(divMap,divMall,irRP);

  container.append(row);
  section.append(HeaderAll('',2,update));
  section.append(container);

  return section;

};

'use strict';

const MapaSVG = (update) => {

  const section  = $('<section class="map-svg"></section>');
  const h3  = $('<h3 class="text-center">Sigue el camino y llegarás a "<span class="text-shine">'+state.nombreDestino+'</span>"</h3>');

  section.append(HeaderAll('',11,update));
  section.append(h3);

  console.log(update);
  console.log(state.nombreDestino);
  console.log(state.codigoInmueble);

  var bg = $(`<div style="width:761px;height:426px;margin:21px auto 0;background-image: url(assets/img/guardia_civil.png);">`);
  var svg = `<svg xmlns="http://www.w3.org/2000/svg" version='1.1' width="100%" height="100%" >`;

  ListarCoordenadas().then((response)=>{
    var pasos = filtro(state.data.coordenadas,state.nombreDestino);

    $.each( pasos, ( key, value ) => {
      const line = `<line id="" x1=`+value.X1+` y1=`+value.Y1+` x2='`+value.X2+`' y2=`+value.Y2+` />`;
      svg += line;
    });
    svg += '</svg></div>';
    console.log(bg);
    bg.append(svg);

  });

  section.append(bg);

  return section;
};


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
  section.append(HeaderAll('',7,update));
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
  const h1          = $('<h1 class="col-xs-12 text-center">Tienda Elegida </h1>');
  const divComercial= $('<div></div>');
  ListarLocales().then((response) => {
    $.each( state.data.locales, ( key, value ) =>  {
      // console.log(value);
      const comercial = $('<div><p>'+value.CLIENTE+'<span>&#187;</span></p></div>');
      const btnVerMapaGrande = $('<button type="button" class="btn btn-warning btn-informacion uppercase" name="button" id="localizar">Ver mapa grande</button>');
      divComercial.append(comercial,btnVerMapaGrande);
      btnVerMapaGrande.on('click',(e) => {
        state.page = 11;
        update();
      });
    });
  });
  const mapMall     = $('<div class="map-mall"><img src="assets/img/guardia_civil.png"></div>');
  const info_tienda = $('<div class="info-tienda">Lorem hjhhghghkffau</div>');

  row.append(h1,mapMall,divComercial);

  container.append(row);
  section.append(HeaderAll('',9,update));
  section.append(container);


  return section;
}

'use strict';

const Welcome = (update) => {
	const section = $('<section></section>');
	const container = $('<div id="welcome" class="container-fluid"></div>');

	const rowImage = $('<div class="welcome__bg row"></div>');
	const rowBtn = $('<div class="welcome_btn contentButton row"></div>');

	//const logo = $('<img src="assets/img/logo.png" alt="Logo Real Plaza">');


	const btnSignUp = $('<button type="button" class="btn btn-connect btn-lg uppercase" name="button">Sign up</button>');
	const btnLogIn = $('<button type="button" class="btn btn-connect btn-lg uppercase" name="button">Log in</button>');


	rowBtn
        .append(btnSignUp)
        .append(btnLogIn);

	container
		.append(rowImage)
		.append(rowBtn);

  /*section.append(HeaderAll('Logeate',0,update));*/
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
};

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
      initMap("map-location",laboratoriaLima);
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
      initMap('map-detail',RPChorrillos);
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
    wrapper.append(MapaSVG(_=>{ render(root) }));
  }

  root.append(wrapper);
};
const state = {
  page: 0,
  data:{},
  selectRegion:null,
  selectTienda:null,
  selectRubro:null,
  codigoInmueble: null,
  nombreDestino: null

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

},{}]},{},[1])