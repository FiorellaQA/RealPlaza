'use strict';

const ChoiceOption = (update) => {
  const section   = $('<section class="choiceOption"></section>');
  const container = $('<div class="container-fluid"></div>')

  const rowDetails = $('<div class="row"></div>');
  const title      = $('<h2>REAL PLAZA</h2>');
  const subtitle   = $('<h2>Encuentra tu centro comercial más cercano</h2>');
  const detailsRP  = $('<p>Descubre todo lo que tenemos para ti</p>');

  const rowBtn         = $('<div class="row"></div>');
  const btnChoiceRP    = $('<button>Busca tu Real Plaza preferido</button>');
  const btnUseLocation = $('<button>Prefiero usar mi ubicación</button>');

  // section.append(HeaderAll('Elige una opción',1,update));
  section.append(container);

  container.append(rowDetails);
  rowDetails.append(title);
  rowDetails.append(subtitle);
  rowDetails.append(detailsRP);

  container.append(rowBtn);
  rowBtn.append(btnUseLocation);
  rowBtn.append(btnChoiceRP);

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
