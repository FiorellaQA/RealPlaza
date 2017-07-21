'use strict';

const MapaSVG = (update) => {
  const section  = $('<section></section>');

  section.append(HeaderAll('',11,update));

  return section;
}
