'use strict';
const ChoiceMall = (update) => {
  const section = $('<section></section>');

  const divMall = $('<div></div>');
  const mall = $('<div><p>Real Plaza Chorrillos...</p></div>');
  const btnNext = $('<button>Next</button>');

  section.append(HeaderAll('',3,update));

  section.append(divMall);
  divMall.append(mall,btnNext);

  btnNext.on('click', (e) => {
    e.preventDefault();
    state.page = 6;
    update();
  });
  return section;

};
