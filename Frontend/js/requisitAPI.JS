async function requisitAPI() {
    try {
      const response = await fetch("https://valorant-api.com/v1/agents");
      if (!response.ok) {
        throw new Error("Erro na solicitação: " + response.status);
      }
      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Erro ao buscar dados:", error);
    }
  }
  
  requisitAPI().then((data) => {
    console.log(data); 
  });
  

const returnAPI = requisitAPI();

console.log(returnAPI);

function hover(){
    console.log("kkkkkkkk");
}