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

const HeaderAll = (titulo,update) => {
  const header = $('<header></header>');
  const back = $('<span> &#171; </span>');
  const title = $('<h3>'+titulo+'</h3>');

  header.append(back);
  header.append(title);

  return header;
};

'use strict';

const ChoiceProv = (update) => {
  const section = $('<section></section>');

  const divChoice = $('<div></div>');
  const lima = $('<div><p>Lima</p></div>');
  const prov = $('<div><p>Provincia</p></div>');

  section.append(HeaderAll('Elige tu Real Plaza preferido'));

  section.append(divChoice);
  divChoice.append(lima);
  divChoice.append(prov);

  lima.on('click', (e) => {
    e.preventDefault();
    state.page = 2;
    update();
  });


  return section;

};

/*const AllLima = (update) => {
  const divLima = $('<div></div>');
};*/

'use strict';

const ChoiceMall = (update) => {
  const section = $('<section></section>');

  const divMall = $('<div></div>');
  const mall = $('<div><p>Real Plaza Chorrillos</p></div>');

  section.append(HeaderAll('Lima'));

  section.append(divMall);
  divMall.append(mall);

  mall.on('click', (e) => {
    e.preventDefault();
    state.page = 3;
    update();
  });


  return section;

};

'use strict';

const MapaMall = (update) => {
  const section = $('<section></section>');

  const divMap = $('<div></div>');
  const mapMall =  $('<div id="map">acá va el mapa</div>');

  const divDetails = $('<div></div>');
  const detailsMall =  $('<div>acá van los detalles</div>');


  section.append(HeaderAll('Real Plaza Chorrillos'));

  section.append(divMap);
  divMap.append(mapMall);

  section.append(divDetails);
  divDetails.append(detailsMall);



  return section;

};
'use strict';

const ChoiceOption = (update) => {
  const section = $('<section></section>');

  const divDetails = $('<div></div>');
  const title = $('<h2>REAL PLAZA</h2>');
  const subtitle = $('<h2>19 | centros comerciales EN TODO EL PERÚ</h2>');
  const detailsRP = $('<p>Descubre todo lo que tenemos para ti</p>');

  const divChoiceOption = $('<div></div>');
  const btnUseLocation = $('<button>Prefiero usar mi ubicación</button>');
  const btnChoiceRP = $('<button>Ingresa a tu Real Plaza preferido</button>');

  section.append(divDetails);
  divDetails.append(title);
  divDetails.append(subtitle);
  divDetails.append(detailsRP);

  section.append(divChoiceOption);
  divChoiceOption.append(btnUseLocation);
  divChoiceOption.append(btnChoiceRP);

/*  btnUseLocation.on('click', (e) => {
    e.preventDefault();
    //state.page = Choice(update);
    update();

  });*/

  btnChoiceRP.on('click', (e) => {
    e.preventDefault();
    state.page = 1;
    update();


  });

  return section;



};
// 'use strict';
//  const Header = (update) => {
//    const header = $('<header></header>');
//    return header;
//  };

'use strict';

const render = (root) => {
  root.empty();
  const wrapper = $('<div class="wrapper"></div>');

  if(state.page == null){
    wrapper.append(ChoiceOption(_=>{ render(root) }));

    //wrapper.append(ChoiceMall(_=>{ render(root) }));
  } else if (state.page == 1){
    wrapper.append(ChoiceProv(_=>{ render(root) }));
  } else if (state.page == 2){
    wrapper.append(ChoiceMall(_=>{ render(root) }));
  } else if (state.page == 3){
    wrapper.append(MapaMall(_=>{ render(root) }));
  }
  root.append(wrapper);
};
const state = {
  page: null,
  data:null
};

$( _ => {
  getJSON("http://190.81.175.52:9797/middleware/api/middleware/1?method=metodLabListarCoordenadas&json=%7B%7D").then((response) => {
    console.log(response);
  });
  const root = $("#root");
  render(root);
});

},{}]},{},[1])