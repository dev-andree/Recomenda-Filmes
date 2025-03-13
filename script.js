//Coleta informações do HTML
let humorDigitadoPeloUsuario = document.getElementById("humorDigitadoPeloUsuario").value;
let respostaUsuario = document.getElementById("respostaUsuario");
let filmeSelecionado = document.getElementById("filmeSelecionado");

//Objeto de filmes
let filmes = [
  {
    nome: "O Poderoso Chefão",  
    genero: "Drama",  
    ano: 1972,  
    humorAssociado: "triste",  
  },
  {
    nome: "Forrest Gump",  
    genero: "Drama",  
    ano: 1994,  
    humorAssociado: "feliz", 
  }
]

function insertHumor() {
  //Aparecer resposta do usuário na tela
  let respostaUsuarioVariavel = humorDigitadoPeloUsuario
  respostaUsuario.innerHTML = respostaUsuarioVariavel

  let encontraFilme = filmes.find(filmes => filmes.humorAssociado === humorDigitadoPeloUsuario)

  //Aparecer filme selecionado baseado no humor do usuário
  if(encontraFilme){
    filmeSelecionado.innerHTML = `${encontraFilme.nome}`
  }
};
