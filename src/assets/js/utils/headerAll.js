'use strict';

const HeaderAll = (titulo,number,update) => {
  const header = $('<header></header>');
  const row    = $('<div class="container vertical-align"></div>');
  const back   = $('<div class="col-xs-2"><span class="glyphicon glyphicon-chevron-left"></span></div>');
  const title  = $('<div class="col-xs-10"><h3>'+titulo+'</h3></div>');

  row.append(back);
  row.append(title);
  header.append(row);

  back.on('click', (e) => {
    e.preventDefault();
    state.page = number;
    console.log(state.page);
    update();
  });

  return header;
};
