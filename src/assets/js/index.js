'use strict';

const render = (root) => {
  root.empty();
  const wrapper = $('<div class="wrapper"></div>');

  if(state.page == null){
    wrapper.append(Header(_=>{ render(root) }));
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
