'use strict';

const Welcome = (update) => {
	const section = $('<section></section>');
	const container = $('<div id="welcome" class="container-fluid"></div>');

	const rowImage = $('<div class="welcome__bg row"></div>');
	const rowBtn = $('<div class="welcome_btn contentButton row"></div>');

	//const logo = $('<img src="assets/img/logo.png" alt="Logo Real Plaza">');


	const btnSignUp = $('<button type="button" class="btn btn-connect btn-lg uppercase" name="button">Sign up</button>');
	const btnLogIn = $('<button type="button" class="btn btn-connect btn-lg uppercase" name="button">Log in</button>');


	rowBtn
        .append(btnSignUp)
        .append(btnLogIn);

	container
		.append(rowImage)
		.append(rowBtn);

  /*section.append(HeaderAll('Logeate',0,update));*/
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
