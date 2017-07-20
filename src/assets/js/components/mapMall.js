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
