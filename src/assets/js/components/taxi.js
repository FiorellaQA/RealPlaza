'use strict';
const ComoLlegar = (update) => {
  const section     = $('<section></section>');
  const container   = $('<div class="container"></div>');
  const row         = $('<div class="row"></div>');
  const mapa        = $('<di class=""mapv></div>');
  const div         = $('<div class="info-">Btn Uber y Waze</div>');
  const btnLlegue   = $('<button type="button" class="btn btn-warning btn-informacion uppercase" name="button" id="localizar">Ya llegue</button>');

  row.append(mapa);
  row.append(div);
  row.append(btnLlegue);

  container.append(row);
  section.append(HeaderAll('',7,update));
  section.append(container);

  btnLlegue.on('click', (e) => {
    state.page = 9;
    update();
  });
  return section;

};
