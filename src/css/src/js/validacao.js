document.addEventListener('DOMContentLoaded', function() {
    
    const form = document.getElementById('form-cadastro');
    if (!form) return;

    // Selecionando os elementos com os IDs corretos do seu HTML
    const nomeComercio = document.getElementById('nome-comercio');
    const descricao = document.getElementById('descricao');
    const categoria = document.getElementById('categoria');
    const contato = document.getElementById('contato');
    const endereco = document.getElementById('endereco');    
    const horario = document.getElementById('horario');

    // --- FUNÇÕES AJUDANTES ---
    const mostrarErro = (input, mensagem) => {
        input.classList.add('erro');
        // tenta encontrar um elemento .mensagem-erro no mesmo grupo; cria se não existir
        let divErro = null;
        // se o input estiver dentro de um container, procura .mensagem-erro nesse container
        if (input.parentElement) {
            divErro = input.parentElement.querySelector('.mensagem-erro');
        }
        // se não encontrado, tenta o nextElementSibling
        if (!divErro && input.nextElementSibling && input.nextElementSibling.classList && input.nextElementSibling.classList.contains('mensagem-erro')) {
            divErro = input.nextElementSibling;
        }
        // cria se ainda não existir
        if (!divErro) {
            divErro = document.createElement('div');
            divErro.className = 'mensagem-erro';
            if (input.parentElement) input.parentElement.appendChild(divErro);
            else input.parentNode.insertBefore(divErro, input.nextSibling);
        }
        divErro.innerText = mensagem;
        divErro.classList.add('visivel');
    };

    const limparErro = (input) => {
        input.classList.remove('erro');
        let divErro = null;
        if (input.parentElement) divErro = input.parentElement.querySelector('.mensagem-erro');
        if (!divErro && input.nextElementSibling && input.nextElementSibling.classList && input.nextElementSibling.classList.contains('mensagem-erro')) divErro = input.nextElementSibling;
        if (divErro) {
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
        
        //Validação do Endereço
        if (!endereco || endereco.value.trim() === '') {
            formularioValido = false;
            if (endereco) mostrarErro(endereco, 'Por favor, adicione o endereço.');
        }

        // Validação do Horário de Funcionamento
        if (horario.value.trim() === '') {
            formularioValido = false;
            mostrarErro(horario, 'Por favor, adicione o horário de funcionamento.');
        }

        // Se o formulário NÃO for válido, impede o envio
        if (!formularioValido) {
            event.preventDefault();
        }
    });
});