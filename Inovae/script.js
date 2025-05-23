// função de link, para ir ate a section
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        const targetSection = document.querySelector(targetId);
        
        window.scrollTo({
            top: targetSection.offsetTop - 80,
            behavior: 'smooth'
        });
        const toggle = document.getElementById('menu-toggle');
        const menu = document.getElementById('menu');

        toggle.addEventListener('click', () => {
        menu.classList.toggle('active');
        });
    });
});

// função de maquina de escrever na home
const el = document.getElementById("h1-inicio");
const textoOriginal = el.innerHTML;
let i = 0;
let isTag = false;
let txt = "";

function typeWriter() {
  if (i < textoOriginal.length) {
    let char = textoOriginal.charAt(i);

    if (char === "<") isTag = true;
    if (char === ">") isTag = false;

    txt += char;
    el.innerHTML = txt;

    i++;
    setTimeout(typeWriter, isTag ? 0 : 50); // Não espera ao digitar tags
  } else {
    setTimeout(() => {
      i = 0;
      txt = "";
      el.innerHTML = "";
      typeWriter();
    }, 2000); // Espera 2s antes de recomeçar
  }
}

el.innerHTML = "";
typeWriter();

// função de carrosel automatico para depoimentos
  let index = 0;
  const slides = document.querySelectorAll('.testimonial-slide');

  function showSlide() {
    slides.forEach(slide => slide.classList.remove('active'));
    slides[index].classList.add('active');
    index = (index + 1) % slides.length;
  }

  // Mostra o primeiro e inicia o loop
  showSlide();
  setInterval(showSlide, 5000); // muda a cada 5 segundos
