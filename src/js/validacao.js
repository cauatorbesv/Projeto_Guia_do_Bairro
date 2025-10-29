document.addEventListener('DOMContentLoaded', function() {
    
    const form = document.getElementById('form-cadastro');
    if (!form) return;

    // Selecionando os elementos com os IDs corretos do seu HTML
    const nomeComercio = document.getElementById('nome-comercio');
    const descricao = document.getElementById('descricao');
    const categoria = document.getElementById('categoria');
    const contato = document.getElementById('contato');

    // --- FUNÇÕES AJUDANTES ---
    const mostrarErro = (input, mensagem) => {
        input.classList.add('erro');
        const divErro = input.nextElementSibling;
        if (divErro && divErro.classList.contains('mensagem-erro')) {
            divErro.innerText = mensagem;
            divErro.classList.add('visivel');
        }
    };

    const limparErro = (input) => {
        input.classList.remove('erro');
        const divErro = input.nextElementSibling;
        if (divErro && divErro.classList.contains('mensagem-erro')) {
            divErro.innerText = '';
            divErro.classList.remove('visivel');
        }
    };

    // --- LÓGICA PRINCIPAL ---
    form.addEventListener('submit', function(event) {
        
        // Limpa todos os erros antigos antes de validar novamente
        limparErro(nomeComercio);
        limparErro(descricao);
        limparErro(categoria);
        limparErro(contato);

        let formularioValido = true;

        // Validação do Nome
        if (nomeComercio.value.trim() === '') {
            formularioValido = false;
            mostrarErro(nomeComercio, 'O nome do comércio/serviço é obrigatório.');
        }

        if (descricao.value.trim() === '') {
            formularioValido = false;
            mostrarErro(descricao, 'A descrição é obrigatória.');
        }

        // Validação da Categoria
        if (categoria.value === '') {
            formularioValido = false;
            mostrarErro(categoria, 'Por favor, selecione uma categoria.');
        }

        // Validação do Contato
        if (contato.value.trim() === '') {
            formularioValido = false;
            mostrarErro(contato, 'Por favor, adicione ao menos uma forma de contato.');
        }   
        // Se o formulário NÃO for válido, impede o envio
        if (!formularioValido) {
            event.preventDefault();
        }
    });
});