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