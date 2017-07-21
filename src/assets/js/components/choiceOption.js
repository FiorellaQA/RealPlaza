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
