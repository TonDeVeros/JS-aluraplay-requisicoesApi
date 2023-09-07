async function listarVideos(){
    const conexao = await fetch("http://localhost:3000/videos");// aqui vai ser retornado uma promise
    const conexaoConvertida = await conexao.json(); //aqui convertemos a promise em json

    return conexaoConvertida;
    
}

async function criarVideo(titulo, descricao, url, imagem){
    const conexao = await fetch("http://localhost:3000/videos", {
        method: "POST",
        headers: {
            "Content-type" : "application/json"//especificando que estou enviando um json
        },
        body: JSON.stringify({
            titulo: titulo,
            descricao: `${descricao} mil visualizações`,
            url: url,
            imagem: imagem
        })
    });
    if(!conexao.ok){
        throw new Error("Não foi possível enviar o video");
    }

    const conexaoConvertida = await conexao.json();
    return conexaoConvertida;

}

async function buscarVideo(termoDeBusca){
    const conexao = await fetch(`http://localhost:3000/videos?q=${termoDeBusca}`);
    const conexaoConvertida = await conexao.json(); //aqui convertemos a promise em json

    return conexaoConvertida;
    
}

export const conectaApi = {
    listarVideos,
    criarVideo,
    buscarVideo
}