let respHumor = document.getElementById("respHumor");
let humorSelecionado = document.getElementById("humorSelecionado").value;
let filmeSelecionado = document.getElementById("filmeSelecionado");

function insertHumor() {
  let respUser = respHumor.innerHTML = humorSelecionado

  if(respUser == humorSelecionado){
    filmeSelecionado.innerHTML = JSON.stringify(filmes, null, 5)
  }
};

 let filmes = {
   nome: "O Poderoso Chefão", 
   genero: "Drama", 
   ano: 1972,
   humorAssociado: "reflexivo",
}

