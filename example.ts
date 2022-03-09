export async function testFunction() {
    const response = await fetch("https://jsonplaceholder.typicode.com/todos/1", {
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
      mode: "cors",
    });
  
    const json = await response.json();
    return json;
  }
  
  testFunction()
    .then((response) => {
      console.log(response);
    })
    .catch((e) => {
      console.error(e);
      process.exit(1);
    });
  