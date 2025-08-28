// ==========================
// GLOBAL SCRIPT START
// ==========================

// Saat halaman selesai dimuat
document.addEventListener("DOMContentLoaded", function () {
  console.log("Website Crealoka siap digunakan 🚀");

  // NAVBAR LINK SMOOTH SCROLL
  const links = document.querySelectorAll("nav a");
  links.forEach(link => {
    link.addEventListener("click", function (e) {
      e.preventDefault(); // cegah langsung lompat
      const targetId = this.getAttribute("href");
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        targetElement.scrollIntoView({
          behavior: "smooth"
        });
      }
    });
  });

  // BACK TO TOP BUTTON
  const backToTop = document.createElement("button");
  backToTop.innerText = "⬆️";
  backToTop.id = "backToTop";
  backToTop.style.position = "fixed";
  backToTop.style.bottom = "20px";
  backToTop.style.right = "20px";
  backToTop.style.display = "none";
  backToTop.style.padding = "10px";
  backToTop.style.borderRadius = "50%";
  backToTop.style.border = "none";
  backToTop.style.background = "#333";
  backToTop.style.color = "#fff";
  backToTop.style.cursor = "pointer";
  document.body.appendChild(backToTop);

  // Tampilkan tombol jika scroll ke bawah
  window.addEventListener("scroll", function () {
    if (window.scrollY > 200) {
      backToTop.style.display = "block";
    } else {
      backToTop.style.display = "none";
    }
  });

  // Klik tombol untuk kembali ke atas
  backToTop.addEventListener("click", function () {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  });

  // PORTFOLIO ITEM ALERT
  const portfolioItems = document.querySelectorAll(".portfolio-item");
  portfolioItems.forEach(item => {
    item.addEventListener("click", function () {
      const title = this.querySelector("h3").innerText;
      alert(`Kamu membuka detail: ${title}`);
    });
  });
});

// ==========================
// GLOBAL SCRIPT END
// ==========================
