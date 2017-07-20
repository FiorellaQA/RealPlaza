'use strict';

const render = (root) => {
  root.empty();
  const wrapper = $('<div class="wrapper"></div>');

  if(state.page == null){
    wrapper.append(ChoiceOption(_=>{ render(root) }));
    wrapper.append(ChoiceProv(_=>{ render(root) }));
    wrapper.append(ChoiceMall(_=>{ render(root) }));
  }

  root.append(wrapper);
}
const state = {
  page: null,
  data:null
};

$( _ => {
  const root = $("#root");
  render(root);
});

'use strict';

const ChoiceProv = (update) => {
  const section = $('<section></section>');

  const header = $('<header></header>');
  const back = $('<span> &#171; </span>');
  const title = $('<h3>Elige tu Real Plaza preferido</h3>');

  const divChoice = $('<div></div>');
  const lima = $('<div><p>Lima</p></div>');
  const prov = $('<div><p>Provincia</p></div>');

  section.append(header);
  header.append(back);
  header.append(title);

  section.append(divChoice);
  divChoice.append(lima);
  divChoice.append(prov);

  return section;

};

'use strict';

const ChoiceMall = (update) => {
  const section = $('<section></section>');

  const header = $('<header></header>');
  const back = $('<span> &#171; </span>');
  const title = $('<h3>xx provincia xx</h3>');

  const divMall = $('<div></div>');
  const mall = $('<div><p>xx mall xx</p></div>');

  section.append(header);
  header.append(back);
  header.append(title);

  section.append(divMall);
  divMall.append(mall);

  return section;

};
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

const postPhone = (user) => {
  return new Promise((resolve,reject) => {
    $.post('api/registerNumber/',user,(response,resul,error) => {
      if (error.status != 200){
        reject(new Error("Error al grabar el telefono"));
      }else if(response.success == false){
        resolve(response);
      }else{
        resolve(response);
      }
    });
  });
}
