document.addEventListener('DOMContentLoaded', function() {
    // --- LÓGICA DE FILTRO POR CATEGORIA E BUSCA ---
    const params = new URLSearchParams(window.location.search);
    const termoBusca = params.get('q');
    const categoriaFiltro = params.get('cat'); // LÊ O FILTRO VINDO DO index.html

    const listaEstabelecimentos = document.getElementById('lista-estabelecimentos');

    if (!listaEstabelecimentos) return; // Se não estiver na página do catálogo, não faz nada

    const itensCatalogo = listaEstabelecimentos.querySelectorAll('.card');

    // Lógica de Filtro Principal
    itensCatalogo.forEach(function(item) {
        const textoItem = item.textContent.toLowerCase();
        const categoriaItem = item.getAttribute('data-categoria');
        let deveMostrar = true;

        // Se tem busca por texto
        if (termoBusca && !textoItem.includes(termoBusca.toLowerCase())) {
            deveMostrar = false;
        }

        // Se tem filtro por categoria
        if (categoriaFiltro && categoriaItem !== categoriaFiltro) {
            deveMostrar = false;
        }

        item.style.display = deveMostrar ? '' : 'none';
    });

    // --- LÓGICA PARA BOTÕES INTERNOS DO CATÁLOGO ---
    const botoesInternos = document.querySelectorAll('#botoes-categoria button');
    botoesInternos.forEach(botao => {
        botao.addEventListener('click', function() {
            const categoria = botao.getAttribute('data-categoria');
            let urlRedirecionamento = 'catalogo.html';

            if (categoria && categoria !== 'todos') {
                 urlRedirecionamento += '?cat=' + categoria;
            }
            window.location.href = urlRedirecionamento;
        });
    });
});