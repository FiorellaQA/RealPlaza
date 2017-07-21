'use strict';

const Tiendas = (update) => {
  const section     = $('<section></section>');
  const container   = $('<div class="container"></div>');
  const row         = $('<div class="row"></div>');
  const logo        = $('<div class="col-xs-12 text-center"><img src="assets/img/logo.png" class="img-responsive" alt="Logo de Real Plaza"></div>');
  const btnSignUp   = $('<div class="col-xs-12 col-md-6 text-center"><button type="button" class="btn btn-warning btn-connect uppercase" name="button">sign up</button></div>');
  const btnLogIn    = $('<div class="col-xs-12 col-md-6 text-center"><button type="button" class="btn btn-warning btn-connect uppercase" name="button">log in</button></div>');

  row.append(logo);
  row.append(btnSignUp);
  row.append(btnLogIn);

  container.append(row);
  section.append(container);

  $('.btn-connect').on('click',() => {
    state.page = 2;
  });


  return section;
}
