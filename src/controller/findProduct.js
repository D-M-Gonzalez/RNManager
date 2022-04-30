export async function findProducts(page,size) { //Controlador usado para encontrar todos los items de un usuario
    const requestOptions = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    };
    const response = await fetch(
      `https://regalitosnao-backend.herokuapp.com/api/products?page=${page}&size=${size}`, //Pasa la id del usuario por query
      requestOptions
    );
    const data = await response.json();
    return data; //Retorna un objeto que contiene el estado de la transacción, el mensage generado y los datos
}