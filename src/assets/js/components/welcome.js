''use strict';

const Welcome = (update) => {
  const section = $('<section></section>');
  const container = $('<div id="welcome" class="container-fluid"></div>');

  const rowImage = $('<div class="welcome__bg row"></div>');
  const rowBtn = $('<div class="welcome_btn contentButton row"></div>');

  const div =$('<div class="content_logo"></div>');
  const logo = $('<img src="assets/img/logoRealPlaza.png" width="200" alt="Logo Real Plaza">');

  const btnSignUp = $('<button type="button" class="btn btn-connect btn-lg uppercase" name="button">Sign up</button>');
  const btnLogIn = $('<button type="button" class="btn btn-connect btn-lg uppercase" name="button">Log in</button>');

  div.append(logo);
  rowImage.append(div);

  rowBtn
    .append(btnSignUp)
    .append(btnLogIn);

  container
    .append(rowImage)
    .append(rowBtn);

  section.append(container);

  btnSignUp.on('click',(e) => {
    state.page = 1;
    update();
  });
  btnLogIn.on('click',(e) => {
    state.page = 1;
    update();
  });

  return section;
};