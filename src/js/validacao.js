document.addEventListener('DOMContentLoaded', function() {
    
    // 1. Seleciona o formulário e os campos que vamos validar
    const form = document.getElementById('form-cadastro');
    const nomeComercio = document.getElementById('nome-comercio');
    const categoria = document.getElementById('categoria');

    // 2. Adiciona um "ouvinte" que espera pelo evento de "submit" (envio) do formulário
    form.addEventListener('submit', function(event) {
        
        let formularioValido = true;

        // 3. Lógica de Validação: Verifica se o campo de nome está vazio
        // .trim() remove espaços em branco do início e do fim
        if (nomeComercio.value.trim() === '') {
            // Se estiver vazio, o formulário NÃO é válido
            formularioValido = false;
            // Mostra uma mensagem de erro (vamos melhorar isso depois)
            alert('Por favor, preencha o nome do comércio.');
        }

        // 4. Lógica de Validação: Verifica se uma categoria foi selecionada
        if (categoria.value === '') {
            formularioValido = false;
            alert('Por favor, selecione uma categoria.');
        }

        // 5. Se o formulário NÃO for válido, impede o envio
        if (!formularioValido) {
            event.preventDefault(); // Esta é a linha mais importante! Ela cancela o envio do formulário.
        }

    });
});