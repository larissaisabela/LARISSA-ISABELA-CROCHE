// script.js

document.addEventListener("DOMContentLoaded", function () {
    const imagens = document.querySelectorAll(".img-galeria");
    const lightbox = document.getElementById("lightbox");
    const imgAmpliada = document.getElementById("img-ampliada");
    const btnFechar = document.querySelector(".fechar");
  
    imagens.forEach(imagem => {
      imagem.addEventListener("click", function () {
        lightbox.style.display = "block";
        imgAmpliada.src = this.src;
        imgAmpliada.alt = this.alt;
      });
    });
  
    btnFechar.addEventListener("click", function () {
      lightbox.style.display = "none";
    });
  
    lightbox.addEventListener("click", function (e) {
      if (e.target === lightbox) {
        lightbox.style.display = "none";
      }
    });
  });
  
  // Efeito interativo nos botões do rodapé
document.addEventListener("DOMContentLoaded", function () {
    const links = document.querySelectorAll("footer ul li a");
  
    links.forEach(link => {
      link.addEventListener("mouseover", () => {
        link.style.opacity = "0.8";
      });
  
      link.addEventListener("mouseout", () => {
        link.style.opacity = "1";
      });
    });
  });
  