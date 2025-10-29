document.addEventListener('DOMContentLoaded', function() {

    //Seleciona os elementos do HTML que vamos manipular
    const btnMenu = document.querySelector('.btn-menu');
    const navegacao = document.querySelector('.navegacao');

    //Verifica se os elementos realmente existem na página antes de continuar
    if (btnMenu && navegacao) {
        
        //Adiciona um "ouvinte de evento" de clique ao botão do menu
        btnMenu.addEventListener('click', function() {
            // O classList.toggle('aberto') verifica se a classe 'aberto' existe no menu.
            // Se não existe, ele a adiciona.
            // Se já existe, ele a remove.
            navegacao.classList.toggle('aberto');

            // Atualiza o atributo para leitores de tela saberem se o menu está aberto ou fechado
            const menuAberto = navegacao.classList.contains('aberto');
            if (menuAberto) {
                btnMenu.setAttribute('aria-label', 'Fechar Menu');
                btnMenu.setAttribute('aria-expanded', 'true');
            } else {
                btnMenu.setAttribute('aria-label', 'Abrir Menu');
                btnMenu.setAttribute('aria-expanded', 'false');
            }
        });
    }
});