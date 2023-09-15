if (localStorage.getItem("token") == null) {
    alert("Você precisa estar logado para acessar essa página");
    window.location.href = "../../login/html/login.html";
  }
  
  const userLogado = JSON.parse(localStorage.getItem("userLogado"));
  
  
  
  function sair() {
    localStorage.removeItem("token");
    localStorage.removeItem("userLogado");
    window.location.href = "../../login/html/login.html";
  }
function cadastro(){
    window.location.href = "../../cadastro/html/cadastro.html"
}

function relatorio(){
    window.location.href = "../../relatorio/html/relatorio.html"
}