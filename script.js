// Modal Produk
const modal = document.getElementById('modal');
const modalTitle = document.getElementById('modalTitle');
const modalContent = document.getElementById('modalContent');
const closeModal = document.getElementById('closeModal');

document.querySelectorAll('.produk').forEach(item => {
  item.addEventListener('click', () => {
    modalTitle.textContent = item.querySelector('h3').textContent;
    modalContent.textContent = item.dataset.proses;
    modal.style.display = 'flex';
  });
});

closeModal.addEventListener('click', () => modal.style.display = 'none');
window.addEventListener('click', e => {
  if (e.target === modal) modal.style.display = 'none';
});
