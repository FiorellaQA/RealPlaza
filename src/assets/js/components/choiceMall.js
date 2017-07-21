'use strict';

const ChoiceProv = (update) => {
  const section = $('<section></section>');

  const divChoice = $('<div></div>');
  const lima = $('<div><p>Lima</p></div>');
  const prov = $('<div><p>Provincia</p></div>');

  section.append(HeaderAll('Elige tu Real Plaza preferido'));

  section.append(divChoice);
  divChoice.append(lima);
  divChoice.append(prov);

  lima.on('click', (e) => {
    e.preventDefault();
    state.page = 2;
    update();
  });


  return section;

};

/*const AllLima = (update) => {
  const divLima = $('<div></div>');
};*/

'use strict';

const ChoiceMall = (update) => {
  const section = $('<section></section>');

  const divMall = $('<div></div>');
  const mall = $('<div><p>Real Plaza Chorrillos</p></div>');

  section.append(HeaderAll('Lima'));

  section.append(divMall);
  divMall.append(mall);

  mall.on('click', (e) => {
    e.preventDefault();
    state.page = 3;
    update();
  });


  return section;

};
