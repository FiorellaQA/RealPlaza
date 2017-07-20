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

  btnUseLocation.on('click', () => {
    update();
  });

  btnChoiceRP.on('click', () => {

  });

  return section;



};