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

  section.append(HeaderAll('Elige tu Real Plaza preferido',3,update));

  section.append(divChoice);

  return section;

};

const MapaLocation = (update) => {
  const section = $('<section></section>');

  section.append(HeaderAll('Mapa de todos los Mall',4,update));

  return section;

};

const ChoiceMall = (update) => {
  const section = $('<section></section>');

  const divMall = $('<div></div>');
  const mall = $('<div><p>Real Plaza Chorrillos</p></div>');

  section.append(HeaderAll('Lima',5,update));

  section.append(divMall);
  divMall.append(mall);

  mall.on('click', (e) => {
    e.preventDefault();
    state.page = 3;
    update();
  });


  return section;

};

const MapaMall = (update) => {
  const section = $('<section></section>');

  const divMap = $('<div></div>');
  const mapMall =  $('<div id="map">acá va el mapa</div>');

  const divDetails = $('<div></div>');
  const detailsMall =  $('<div>acá van los detalles</div>');


  section.append(HeaderAll('Real Plaza Chorrillos',6,update));

  section.append(divMap);
  divMap.append(mapMall);

  section.append(divDetails);
  divDetails.append(detailsMall);



  return section;

};
