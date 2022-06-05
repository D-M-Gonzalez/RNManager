import { serverURL } from "../data/server";

export async function modifyPrices(input) { //Controlador para crear un nuevo item en el servidor
    const token = sessionStorage.getItem("token");
    const requestOptions = {
      method: "PUT",
      headers: {
        Authorization: `JWT ${token}` , //token required to validate the user
      },
    };
    const response = await fetch( serverURL + `api/products/prices/${input}`,
      requestOptions
    );
    const data = await response.json();
    return data; //Retorna un objeto que contiene el estado de la transacción, el mensage generado y los datos
}