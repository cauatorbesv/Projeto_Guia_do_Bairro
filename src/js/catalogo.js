document.addEventListener('DOMContentLoaded', function() {
            const params = new URLSearchParams(window.location.search);
            const termoBusca = params.get('q');
            const categoriaFiltro = params.get('cat'); // LÊ O FILTRO VINDO DO index.html

            const inputBusca = document.getElementById('input-busca');
            const listaEstabelecimentos = document.getElementById('lista-estabelecimentos');
            
            // Garante que o elemento existe antes de tentar buscar os cards
            if (!listaEstabelecimentos) return;
            
            const itensCatalogo = listaEstabelecimentos.querySelectorAll('.card');

            // Define qual filtro será aplicado no carregamento
            let filtroAtivo = { tipo: null, valor: null };

            if (termoBusca) {
                filtroAtivo = { tipo: 'texto', valor: termoBusca.toLowerCase() };
                if (inputBusca) inputBusca.value = termoBusca;
            } else if (categoriaFiltro) {
                filtroAtivo = { tipo: 'categoria', valor: categoriaFiltro.toLowerCase() };
            }
            
            // ---------------------------------------------
            // Lógica de Filtro Principal
            // ---------------------------------------------

            itensCatalogo.forEach(function(item) {
                let deveMostrar = true;
                
                if (filtroAtivo.tipo) {
                    const textoItem = item.textContent.toLowerCase();
                    const categoriaItem = item.getAttribute('data-categoria');

                    if (filtroAtivo.tipo === 'texto') {
                        // Filtra por texto
                        if (!textoItem.includes(filtroAtivo.valor)) {
                            deveMostrar = false;
                        }
                    } else if (filtroAtivo.tipo === 'categoria') {
                        // Filtra por categoria
                        if (categoriaItem !== filtroAtivo.valor) {
                            deveMostrar = false;
                        }
                    }
                }

                // Aplica o display. Usa '' para manter o CSS original (corrigindo o layout)
                item.style.display = deveMostrar ? '' : 'none';
            });
            
            // ---------------------------------------------
            // Lógica para Botões Internos do Catálogo
            // ---------------------------------------------
            
            // Isso garante que os botões dentro do próprio catalogo.html funcionem
            const botoesInternos = document.querySelectorAll('.categorias button');
            botoesInternos.forEach(botao => {
                botao.addEventListener('click', function() {
                    const categoria = botao.getAttribute('data-categoria');
                    let urlRedirecionamento = 'catalogo.html';
                    
                    if (categoria !== 'todos') {
                         // Redireciona a si mesmo com o novo filtro de categoria
                         urlRedirecionamento += '?cat=' + categoria;
                    }
                    window.location.href = urlRedirecionamento;
                });
            });
        });
