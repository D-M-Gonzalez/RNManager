export async function deleteProduct(id) { //Controlador utilizado para borrar items 
    const token = sessionStorage.getItem("token");
    const requestOptions = {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: `JWT ${token}` , //token required to validate the user
      },
    };
    const response = await fetch(
      `https://regalitosnao-backend.herokuapp.com/api/products/${id}`,
      requestOptions
    );
    const data = await response.json();
    return data; //Retorna un objeto que contiene el estado de la transacción, el mensage generado y los datos
}