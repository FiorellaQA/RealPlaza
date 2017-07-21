'use strict';

const MapaSVG = (update) => {

  const section  = $('<section></section>');

  section.append(HeaderAll('',11,update));

  console.log(update);
  console.log(state.nombreDestino);
  console.log(state.codigoInmueble);

  var bg = $(`<div style="width:761px;height:426px;background-color:blue;float:left;background-image: url(assets/img/guardia_civil.png);">`);
  var svg = `<svg xmlns="http://www.w3.org/2000/svg" version='1.1' width="100%" height="100%" >`;

  ListarCoordenadas().then((response)=>{
    var pasos = filtro(state.data.coordenadas,state.nombreDestino);

    $.each( pasos, ( key, value ) => {
      const line = `<line id="" x1=`+value.X1+` y1=`+value.Y1+` x2='`+value.X2+`' y2=`+value.Y2+` style='stroke:blue;stroke-width:5'/>`;
      svg += line;
    });
    svg += '</svg></div>';
    console.log(bg);
    bg.append(svg);

  });
  section.append(bg);

  return section;
}
