const filmes = document.querySelectorAll('.filme-card, .filme-destaque');
const modal = document.getElementById('modal');
const modalImg = document.getElementById('modal-img');
const modalTitle = document.getElementById('modal-title');
const modalDesc = document.getElementById('modal-desc');
const closeBtn = document.getElementById('close-btn');

filmes.forEach(filme => {
    filme.addEventListener('click', () => {
        modal.style.display = 'block';
        modalImg.src = filme.dataset.imagem;
        modalTitle.textContent = filme.dataset.titulo;
        modalDesc.textContent = filme.dataset.descricao;
    });
});

closeBtn.addEventListener('click', () => {
    modal.style.display = 'none';
});

window.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.style.display = 'none';
    }
});
