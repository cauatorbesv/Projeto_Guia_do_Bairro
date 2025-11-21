document.addEventListener('DOMContentLoaded', function() {
    
    // --- ELEMENTOS GLOBAIS ---
    const listaEstabelecimentos = document.getElementById('lista-estabelecimentos');
    if (!listaEstabelecimentos) return; // Sai se não estiver na página do catálogo

    const itensCatalogo = listaEstabelecimentos.querySelectorAll('.card');
    const botoesInternos = document.querySelectorAll('#botoes-categoria button');

    // --- FUNÇÃO DE FILTRAGEM ---
    // Esta função será usada tanto no carregamento quanto nos cliques
    const aplicarFiltro = (filtro) => {
        itensCatalogo.forEach(item => {
            const categoriaItem = item.getAttribute('data-categoria');
            
            // Se o filtro for 'todos' OU a categoria do item for igual ao filtro, mostra o item.
            // Caso contrário, esconde.
            if (filtro === 'todos' || categoriaItem === filtro) {
                item.style.display = ''; // Retorna ao display padrão do CSS
            } else {
                item.style.display = 'none';
            }
        });
    };

    // --- LÓGICA 1: FILTRO INICIAL AO CARREGAR A PÁGINA ---
    const params = new URLSearchParams(window.location.search);
    const categoriaFiltroURL = params.get('cat');

    // Se a URL veio com um filtro (ex: da index.html), aplica ele
    if (categoriaFiltroURL) {
        aplicarFiltro(categoriaFiltroURL);
    }

    // --- LÓGICA 2: FILTRO "AO VIVO" AO CLICAR NOS BOTÕES ---
    botoesInternos.forEach(botao => {
        botao.addEventListener('click', function() {
            // Pega a categoria do botão que foi clicado
            const categoriaClicada = botao.getAttribute('data-categoria');
            
            // Chama a função de filtro para atualizar a página instantaneamente
            aplicarFiltro(categoriaClicada);
        });
    });

    const termoBusca = params.get('q');
    if (termoBusca) {
        const termoBuscaLower = termoBusca.toLowerCase();
        itensCatalogo.forEach(function(item) {
            const textoItem = item.textContent.toLowerCase();
            if (!textoItem.includes(termoBuscaLower)) {
                item.style.display = 'none';
            }
        });
    }
});