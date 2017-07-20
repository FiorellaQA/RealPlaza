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
};
const state = {
  page: null,
  data:null
};

$( _ => {
  getJSON("http://190.81.175.52:9797/middleware/api/middleware/1?method=metodLabListarCoordenadas&json=%7B%7D").then((response) => {
    console.log(response);
  });
  // const root = $("#root");
  // render(root);
});
