'use strict';

const filterByName = (comercial,name) => {
  // var index = stations.map(e=>e.district.toLowerCase()).indexOf(query.toLowerCase());
  return comercial.filter((e)=>{
    if(e.DESTINO.toLowerCase().lastIndexOf(name.toLowerCase()) !== -1){
      return e;
    }
  });
  // return stations.filter(e => e.district.toLowerCase().indexOf(query.toLowerCase() !== -1 ? e:"no encontrado" ));
}
