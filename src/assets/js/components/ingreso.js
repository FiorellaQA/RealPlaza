'use strict';

const InicioSesion = (update) => {
	const section = $('<section></section>');
	const container = $('<div class="container"></div>');

	const rowImage = $('<div class="row"></div>');

	const col1 = $('<div class="col-xs-4"></div>');
	const col2 = $('<div class="col-xs-4"></div>');
	const col3 = $('<div class="col-xs-4"></div>');

	const imgTienda1 = $('<img src="" alt="">');
	const imgTienda2 = $('<img src="" alt="">');
	const imgTienda3 = $('<img src="" alt="">');
	const imgTienda4 = $('<img src="" alt="">');
	const imgTienda5 = $('<img src="" alt="">');

	const logo1 = $('<img src="assets/img/logo.png" alt="Logo Real Plaza">');
	const logo2 = $('<img src="assets/img/logo.png" alt="Logo Real Plaza">');
	const logo3 = $('<img src="assets/img/logo.png" alt="Logo Real Plaza">');
	const logo4 = $('<img src="assets/img/logo.png" alt="Logo Real Plaza">');

	col1.append(imgTienda1);
	col1.append(logo1);
	col1.append(imgTienda2);

	col2.append(logo2);
	col2.append(imgTienda3);
	col2.append(logo3);

	col3.append(imgTienda4);
	col3.append(logo4);
	col3.append(imgTienda5);

	rowImage.append(col1);
	rowImage.append(col2);
	rowImage.append(col3);


	const rowBtn = $('<div class="row"></div>');

	const btnNext1 = $('<div class="col-xs-12 col-md-6 text-center"><button type="button" class="btn btn-warning btn-connect uppercase" name="button">log in</button></div>');
	const btnNext2 = $('<div class="col-xs-12 col-md-6 text-center"><button type="button" class="btn btn-warning btn-connect uppercase" name="button">log in</button></div>');

	rowBtn.append(btnNext1);
	rowBtn.append(btnNext2);

  container.append(rowImage);
	container.append(rowBtn);

  section.append(HeaderAll('Logeate',0,update));
  section.append(container);

  btnNext1.on('click',(e) => {
    console.log('click');
    state.page = 2;
    update();
  });

  return section;
}
