'use strict';

const InicioSesion = (update) => {
	const section = $('<section></section>');
	const container = $('<div id="inicioSesion" class="container-fluid"></div>');

	const rowImage = $('<div class="row"></div>');

	const col1 = $('<div class="no-padding col-xs-4"></div>');
	const col2 = $('<div class="no-padding col-xs-4"></div>');
	const col3 = $('<div class="no-padding col-xs-4"></div>');

	const imgTienda1 = $('<img class="img-responsive" src="assets/img/tienda.png" alt="Centro Comercial Salaverry">');
	const imgTienda2 = $('<img class="img-responsive" src="assets/img/tienda2.png" alt="Centro Comercial Salaverry">');
	const imgTienda3 = $('<img class="img-responsive" src="assets/img/tienda3.png" alt="Centro Comercial Salaverry">');
	const imgTienda4 = $('<img class="img-responsive" src="assets/img/tienda4.png" alt="Centro Comercial Salaverry">');
	const imgTienda5 = $('<img class="img-responsive" src="assets/img/tienda5.png" alt="Centro Comercial Salaverry">');

	const logo1 = $('<img class="img-responsive" src="assets/img/logo.jpg" alt="Logo Real Plaza">');
	const logo2 = $('<img class="img-responsive" src="assets/img/logo.jpg" alt="Logo Real Plaza">');
	const logo3 = $('<img class="img-responsive" src="assets/img/logo.jpg" alt="Logo Real Plaza">');
	const logo4 = $('<img class="img-responsive" src="assets/img/logo.jpg" alt="Logo Real Plaza">');

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


	const rowBtn = $('<div class="row contentButton"></div>');

	const btnNext1 = $('<button type="button" class="btn btn-warning btn-connect btn-lg uppercase" name="button">Facebook</button>');
	const btnNext2 = $('<button type="button" class="btn btn-warning btn-connect btn-lg uppercase" name="button">Google</button>');

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
