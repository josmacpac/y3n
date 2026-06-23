// =========================
// Validación formulario
// =========================
document.getElementById("contact-form").addEventListener("submit", function(e) {
  e.preventDefault();
  
  const nombre = document.getElementById("nombre").value.trim();
  const email = document.getElementById("email").value.trim();
  const mensaje = document.getElementById("mensaje").value.trim();
  const formMsg = document.getElementById("form-msg");

  if(nombre && email && mensaje) {
    formMsg.textContent = "¡Gracias por tu mensaje, " + nombre + "! Me pondré en contacto pronto.";
    formMsg.style.color = "green";
    this.reset();
  } else {
    formMsg.textContent = "Por favor, completa todos los campos.";
    formMsg.style.color = "red";
  }
});

// =========================
// Menú hamburguesa móvil
// =========================
const toggleBtn = document.querySelector('.mobile-nav-toggle');
const mobileNav = document.createElement('div');
mobileNav.classList.add('mobile-nav');
mobileNav.innerHTML = `
  <a href="#hero"><i class="fas fa-home"></i> Inicio</a>
  <a href="#about"><i class="fas fa-user"></i> Sobre mí</a>
  <a href="#formacion"><i class="fas fa-graduation-cap"></i> Formación</a>
  <a href="#experiencia"><i class="fas fa-briefcase"></i> Experiencia</a>
  <a href="#proyectos"><i class="fas fa-project-diagram"></i> Proyectos</a>
  <a href="#contacto"><i class="fas fa-envelope"></i> Contacto</a>
`;
document.body.appendChild(mobileNav);

// Abrir / cerrar menú
toggleBtn.addEventListener('click', () => {
  mobileNav.style.display = mobileNav.style.display === 'flex' ? 'none' : 'flex';
});


