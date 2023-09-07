import { conectaApi } from "./conectaApi.js"; //aqui estou importando uma variavel que possui varias funcoes(parece uma interface do C#).
import constroiCard from "./mostrarVideos.js"; // aqui estou importando apenas uma funcao

async function buscarVideo(evento) {
  evento.preventDefault();

  const dadosDePesquisa = document.querySelector("[data-pesquisa]").value;
  const busca = await conectaApi.buscarVideo(dadosDePesquisa);

  const lista = document.querySelector("[data-lista]");

  while (lista.firstChild) {
    lista.removeChild(lista.firstChild);
  }

  busca.forEach((element) => {
    lista.appendChild(
      constroiCard(
        element.titulo,
        element.descricao,
        element.url,
        element.imagem
      )
    );
  });

  console.log(busca.lenght);

  if (busca.lenght == 0 || busca.lenght == undefined) {
    lista.innerHTML = `<h2 class"mensagem__titulo">não existem videos com esse termo</h2>`;
  }
}

const botaoDePesquisa = document.querySelector("[data-botao-pesquisa");

botaoDePesquisa.addEventListener("click", (evento) => buscarVideo(evento));
