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