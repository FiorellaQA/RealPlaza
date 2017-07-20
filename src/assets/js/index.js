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
