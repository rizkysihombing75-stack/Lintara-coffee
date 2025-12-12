<script>
// Data produk
const produkData = {
  "Natural": {
    img: "https://i.imgur.com/vp4pvrV.png",
    desc: "Proses Natural menghasilkan rasa fruity, manis alami, dan body yang tebal."
  },
  "Honey": {
    img: "https://i.imgur.com/Zlti69m.png",
    desc: "Honey Process memberikan karakter manis madu, aroma lembut, dan acidity seimbang."
  },
  "Full Washed": {
    img: "https://i.imgur.com/Y7mcMBQ.png",
    desc: "Full Washed memiliki rasa clean, bright acidity, dan aftertaste yang bersih."
  },
  "Semi Washed": {
    img: "https://i.imgur.com/l8EmYxd.png",
    desc: "Semi Washed memberikan rasa earthy, nutty, dan body medium–heavy."
  }
};

// Ambil elemen modal (pakai ID dari HTML kamu)
const modal = document.getElementById("produkModal");
const modalImg = document.getElementById("modalImg");
const modalTitle = document.getElementById("modalTitle");
const modalDesc = document.getElementById("modalDesc");
const closeBtn = document.getElementById("closeModal");

// Event klik produk
document.querySelectorAll(".produk").forEach(item => {
  item.addEventListener("click", () => {
    const nama = item.querySelector("h3").textContent;

    modalTitle.textContent = nama;
    modalDesc.textContent = produkData[nama].desc;
    modalImg.src = produkData[nama].img;

    modal.style.display = "flex";
  });
});

// Tutup modal ketika klik X
closeBtn.addEventListener("click", () => {
  modal.style.display = "none";
});

// Tutup ketika klik area luar modal
window.addEventListener("click", e => {
  if (e.target === modal) modal.style.display = "none";
});
</script>
