export async function createProduct(input) { //Controlador para crear un nuevo item en el servidor
    const token = sessionStorage.getItem("token");
    const formData = new FormData()
    formData.append("name",input.name)
    formData.append("price",input.price)
    formData.append("category",input.category)
    formData.append("subcategory",input.subcategory)
    formData.append("description1",input.description1)
    formData.append("description2",input.description2)
    formData.append("tags",input.tags)
    input.images.forEach((el)=>{
      formData.append("images",el.file)
    })
    const requestOptions = {
      method: "POST",
      headers: {
        Authorization: `JWT ${token}` , //token required to validate the user
      },
      body: formData
    };
    const response = await fetch(
      "https://regalitosnao-backend.herokuapp.com/api/products/",
      requestOptions
    );
    const data = await response.json();
    return data; //Retorna un objeto que contiene el estado de la transacción, el mensage generado y los datos
}