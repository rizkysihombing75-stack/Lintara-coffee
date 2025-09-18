// Jalankan setelah seluruh DOM siap
document.addEventListener('DOMContentLoaded', function () {
  console.log('Lintara Coffee');

  // Ambil semua elemen produk
  const produkItems = document.querySelectorAll('.produk');

  // Buat modal secara dinamis
  const modal = document.createElement('div');
  modal.id = 'produkModal';
  modal.style.cssText = `
    position: fixed;
    top: 0; left: 0;
    width: 100%; height: 100%;
    background: rgba(0,0,0,0.6);
    display: none;
    justify-content: center;
    align-items: center;
    z-index: 1000;
  `;
  modal.innerHTML = `
    <div style="
      background: #fff;
      max-width: 400px;
      padding: 20px;
      border-radius: 12px;
      text-align: center;
      position: relative;
    ">
      <span id="closeModal" style="
        position: absolute;
        top: 10px;
        right: 15px;
        font-size: 24px;
        cursor: pointer;
      ">&times;</span>
      <h3 id="modalTitle"></h3>
      <p id="modalDesc" style="margin-top:10px; line-height:1.5;"></p>
    </div>
  `;
  document.body.appendChild(modal);

  const modalTitle = modal.querySelector('#modalTitle');
  const modalDesc  = modal.querySelector('#modalDesc');
  const closeBtn   = modal.querySelector('#closeModal');

  // Event klik tiap produk
  produkItems.forEach(item => {
    item.addEventListener('click', () => {
      const title = item.querySelector('h3').textContent;
      // Kamu bisa menambahkan data-deskripsi di HTML, misal: data-desc="..."
      const desc  = item.dataset.desc || 'Deskripsi kopi belum ditambahkan.';
      modalTitle.textContent = title;
      modalDesc.textContent  = desc;
      modal.style.display = 'flex';
    });
  });

  // Tutup modal
  closeBtn.addEventListener('click', () => modal.style.display = 'none');
  modal.addEventListener('click', e => {
    if (e.target === modal) modal.style.display = 'none';
  });
});
