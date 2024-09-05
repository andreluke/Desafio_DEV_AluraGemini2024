console.log(dados)

let section = document.getElementById("resultados-pesquisa")


function pesquisar(){
    let resultados = ``

    for (let dado of dados){
        resultados += `
        <div class="item-resultado">
                 <div class="texto-item">
                   <h2>${dado.titulo}</h2>
                   <p class="descricao-meta">
                     ${dado.descricao}
                   </p>
                   <p>
                     <a
                       href="${dado.link}"
                       target="_blank"
                       >Mais informações aqui</a
                     >
                   </p>
                 </div>
                 <div class="imagem-item">
                   <img src="${dado.imagem}" alt="${dado.titulo}" />
                 </div>
                 </div>
       `
    }

    section.innerHTML = resultados


    let items = document.querySelectorAll('.item-resultado');
    items.forEach((item, index) => {
      item.style.animationDelay = `${index * 0.2}s`; // Atraso maior para um efeito mais fluido
    });
}