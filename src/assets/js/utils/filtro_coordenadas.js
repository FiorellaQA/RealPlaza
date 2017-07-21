'use strict';

const  filtro= (array, destino) => {
  return state.data.coordenadas.filter((e,i)=>{
      if(e.DESTINO.lastIndexOf(destino) !== -1){
        return e;
      }
  });
};
