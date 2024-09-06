// Função para fechar o popup
function fecharPopup() {
  document.getElementById("popup").style.display = "none"; // Define o display do popup como "none" para escondê-lo
}

// Função para abrir o popup com um efeito de animação
function abrirPopup() {
  const popup = document.getElementById("popup");

  // Remove a classe "show" para garantir que o popup esteja escondido inicialmente
  popup.classList.remove("show");

  // Adiciona um atraso antes de exibir o popup
  setTimeout(() => {
    popup.style.display = "block"; // Define o display do popup como "block" para exibi-lo
    setTimeout(() => {
      popup.classList.add("show"); // Adiciona a classe "show" para aplicar a animação de opacidade
    }, 10); // Um pequeno delay para que a transição funcione corretamente
  }, 300); // Atraso de 300ms para o hover sumir antes de exibir o popup
}

// Função para pesquisar e exibir resultados com base na entrada do usuário
function pesquisar() {
  let section = document.getElementById("resultados-pesquisa"); // Obtém a seção onde os resultados serão exibidos
  let campoPesquisa = document
    .getElementById("campo-pesquisa")
    .value.trim() // Obtém o valor do campo de pesquisa e remove espaços em branco
    .toLowerCase(); // Converte o valor para minúsculas para a pesquisa ser case-insensitive

  console.log(campoPesquisa); // Exibe o valor da pesquisa no console para depuração

  let resultados = ``; // String para armazenar os resultados da pesquisa

  // Se o campo de pesquisa estiver vazio, abre o popup e limpa os resultados
  if (campoPesquisa === "") {
    abrirPopup(); // Abre o popup
    return section.innerHTML = ``; // Limpa a seção de resultados
  }

  // Itera sobre os dados para encontrar resultados que correspondam ao critério de pesquisa
  for (let dado of dados) {
    // Verifica se o título, descrição ou tags contêm o texto de pesquisa
    if (dado.titulo.toLowerCase().includes(campoPesquisa) || dado.descricao.toLowerCase().includes(campoPesquisa) || dado.tags.some(tag => tag.toLowerCase().includes(campoPesquisa.toLowerCase()))) {
      // Adiciona o item ao HTML dos resultados
      resultados += `
        <div class="item-resultado">
          <div class="texto-item">
            <h2>${dado.titulo}</h2>
            <p class="descricao-meta">
              ${dado.descricao}
            </p>
            <p>
              <a href="${dado.link}" target="_blank">Mais informações aqui</a>
            </p>
          </div>
          <div class="imagem-item">
            <img src="${dado.imagem}" alt="${dado.titulo}" />
          </div>
        </div>
      `;
    }
  }

  // Atualiza o conteúdo da seção de resultados com os resultados encontrados
  section.innerHTML = resultados;

  // Adiciona um atraso de animação para cada item de resultado para um efeito mais fluido
  let items = document.querySelectorAll(".item-resultado");
  items.forEach((item, index) => {
    item.style.animationDelay = `${index * 0.2}s`; // Define um atraso maior para uma animação mais fluida
  });

  // Se nenhum resultado foi encontrado, abre o popup e limpa a seção de resultados
  if (!resultados) {
    abrirPopup(); // Abre o popup
    return section.innerHTML = ``; // Limpa a seção de resultados
  }
}

// Função para exibir um resultado aleatório
function sorte() {
  let section = document.getElementById("resultados-pesquisa"); // Obtém a seção onde o resultado será exibido

  // Se não houver dados, exibe uma mensagem informando que nenhum dado está disponível
  if (dados.length === 0) {
    section.innerHTML = "Nenhum dado disponível."; // Mensagem para quando não há dados
    return;
  }

  // Gera um índice aleatório para selecionar um dado aleatório
  const indiceAleatorio = Math.floor(Math.random() * dados.length);

  // Cria o HTML para o resultado aleatório selecionado
  const resultadoAleatorio = `
      <div class="item-resultado">
        <div class="texto-item">
          <h2>${dados[indiceAleatorio].titulo}</h2>
          <p class="descricao-meta">
            ${dados[indiceAleatorio].descricao}
          </p>
          <p>
            <a href="${dados[indiceAleatorio].link}" target="_blank">Mais informações aqui</a>
          </p>
        </div>
        <div class="imagem-item">
          <img src="${dados[indiceAleatorio].imagem}" alt="${dados[indiceAleatorio].titulo}" />
        </div>
      </div>
  `;

  // Atualiza o conteúdo da seção de resultados com o resultado aleatório
  section.innerHTML = resultadoAleatorio;
}
