import { serverURL } from "../data/server";

export async function modifyMessage(input) { //Controlador para crear un nuevo item en el servidor
    const token = sessionStorage.getItem("token");
    const requestOptions = {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `JWT ${token}` , //token required to validate the user
      },
      body: JSON.stringify({
        text: input,
      }),
    };
    const response = await fetch( serverURL + `api/messages/629d1a45d5a4c4e75ae57dda`,
      requestOptions
    );
    const data = await response.json();
    return data; //Retorna un objeto que contiene el estado de la transacción, el mensage generado y los datos
}