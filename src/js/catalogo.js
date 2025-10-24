document.addEventListener('DOMContentLoaded', function() {
            // ... (Seu código de busca por texto JÁ EXISTENTE aqui) ...
            
            // ------------------------------------------------------------------
            // NOVO CÓDIGO PARA FILTRAR POR CATEGORIA
            // ------------------------------------------------------------------
            
            const botoes = document.querySelectorAll('#botoes-categoria button');
            const itensCatalogo = document.querySelectorAll('#lista-estabelecimentos .card');

            botoes.forEach(botao => {
                botao.addEventListener('click', function() {
                    const categoriaSelecionada = botao.getAttribute('data-categoria');
                    
                    // 1. Limpa a classe 'ativo' de todos os botões (para estilização opcional)
                    botoes.forEach(b => b.classList.remove('ativo')); 
                    // 2. Adiciona a classe 'ativo' apenas no botão clicado
                    botao.classList.add('ativo'); 

                    // 3. Filtra os cards
                    itensCatalogo.forEach(item => {
                        const categoriaItem = item.getAttribute('data-categoria');
                        
                        // Se for 'todos' ou se a categoria do item for a selecionada
                        if (categoriaSelecionada === 'todos' || categoriaItem === categoriaSelecionada) {
                            item.style.display = ''; // Mostra o item
                        } else {
                            item.style.display = 'none'; // Esconde o item
                        }
                    });
                    
                    // Opcional: Limpa o campo de busca de texto após filtrar por categoria
                    document.getElementById('input-busca').value = ''; 
                });
            });
            
            // ------------------------------------------------------------------
            // CHAME O FILTRO DE TEXTO MANUALMENTE AO CARREGAR
            // (Para garantir que a busca da URL funcione no carregamento)
            // ------------------------------------------------------------------
            
            // Este bloco usa a função que você já tem para aplicar o filtro ao carregar
            // (Assumindo que você manteve o script de busca por texto que resolvemos antes)
        
        });