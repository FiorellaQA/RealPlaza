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
};