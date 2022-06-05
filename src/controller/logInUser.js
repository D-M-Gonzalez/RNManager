import { serverURL } from "../data/server";

export async function logInUser(input) { //Log in POST
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        user_name: input.name,
        password: input.password,
      }),
    };
    const response = await fetch( serverURL + "api/users/login/user",
      requestOptions
    );
    const data = await response.json();
    sessionStorage.setItem("token", data.data.accessToken); //stores the returned token into sessionStorage
    return data; //server does return an object, that contains a status code, a message, and all the data returned by the DB
  }