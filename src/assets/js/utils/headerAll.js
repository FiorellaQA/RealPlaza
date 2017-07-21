'use strict';

const HeaderAll = (titulo,update) => {
  const header = $('<header></header>');
  const back = $('<span> &#171; </span>');
  const title = $('<h3>'+titulo+'</h3>');

  header.append(back);
  header.append(title);

  back.on('click', (e) => {
    e.preventDefault();
    state.page--;
    update();
  });

  return header;
};
