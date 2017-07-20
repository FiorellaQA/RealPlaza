const postPhone = (user) => {
  return new Promise((resolve,reject) => {
    $.post('api/registerNumber/',user,(response,resul,error) => {
      if (error.status != 200){
        reject(new Error("Error al grabar el telefono"));
      }else if(response.success == false){
        resolve(response);
      }else{
        resolve(response);
      }
    });
  });
}
