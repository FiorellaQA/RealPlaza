'use strict';

const HeaderAll = (titulo,number,update) => {
  const header = $('<header></header>');
  const back   = $('<div class="col-xs-2 vertical-align"><span class="glyphicon glyphicon-chevron-left"></span></div>');
  const title  = $('<div class="col-xs-10 vertical-align"><h3>'+titulo+'</h3></div>');

  header.append(back);
  header.append(title);

  back.on('click', (e) => {
    e.preventDefault();
    state.page = number;
    console.log(state.page);
    update();
  });

  return header;
};
