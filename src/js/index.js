document.addEventListener('DOMContentLoaded', function() {
    const botoesCategoria = document.querySelectorAll('.categorias button');

    botoesCategoria.forEach(botao => {
        botao.addEventListener('click', () => {
            const categoria = botao.dataset.categoria;
            // Redireciona para a página de catálogo com o parâmetro da categoria
            window.location.href = `catalogo.html?categoria=${categoria}`;
        });
    });
});