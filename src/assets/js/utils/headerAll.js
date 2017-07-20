'use strict';

const HeaderAll = (titulo,update) => {
  const header = $('<header></header>');
  const back = $('<span> &#171; </span>');
  const title = $('<h3>'+titulo+'</h3>');

  header.append(back);
  header.append(title);

  return header;
};