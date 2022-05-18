import { serverURL } from "../data/server";

export async function findProducts(page,size,category,subcategory,search) { //Controlador usado para encontrar todos los items de un usuario
    !page && (page = 1)
    !size && (size = 10)
    !category && (category = 'ALL')
    !subcategory && (subcategory = 'ALL')
  
    const requestOptions = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    };
    const response = await fetch( serverURL + `api/products?page=${page}&size=${size}&category=${category}&subcategory=${subcategory}&search=${search}`, //Pasa la id del usuario por query
      requestOptions
    );
    const data = await response.json();
    return data; //Retorna un objeto que contiene el estado de la transacción, el mensage generado y los datos
}