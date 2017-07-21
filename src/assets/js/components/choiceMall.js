'use strict';

const ChoiceProv = (update) => {
  const section = $('<section></section>');

  ListarDepartamentos().then((response) => {
    console.log(state.data.departamentos);
    $.each( state.data.departamentos, ( key, value ) =>  {
      const region = $('<div><p>'+value.NOMBRE_DEPARTAMENTO+'<span>&#187;</span></p></div>');
      divChoice.append(region);
      region.on('click', (e) => {
        e.preventDefault();
        state.page = 2;
        update();
      });
    });
  });
  const divChoice = $('<div></div>');


  section.append(HeaderAll('Elige tu Real Plaza preferido',update));

  section.append(divChoice);



  return section;

};

/*const AllLima = (update) => {
  const divLima = $('<div></div>');
};*/


const ChoiceMall = (update) => {
  const section = $('<section></section>');

  const divMall = $('<div></div>');
  const mall = $('<div><p>Real Plaza Chorrillos</p></div>');

  section.append(HeaderAll('Lima',update));

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


  section.append(HeaderAll('Real Plaza Chorrillos',update));

  section.append(divMap);
  divMap.append(mapMall);

  section.append(divDetails);
  divDetails.append(detailsMall);



  return section;

};
