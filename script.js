document.getElementById('year').textContent = new Date().getFullYear();

  var burger = document.getElementById('burgerBtn');
  var menu = document.getElementById('mobile-menu');
  burger.addEventListener('click', function(){
    var open = menu.classList.toggle('open');
    burger.setAttribute('aria-expanded', open ? 'true' : 'false');
    burger.setAttribute('aria-label', open ? 'Fermer le menu' : 'Ouvrir le menu');
  });
  menu.querySelectorAll('a').forEach(function(a){
    a.addEventListener('click', function(){
      menu.classList.remove('open');
      burger.setAttribute('aria-expanded','false');
      burger.setAttribute('aria-label','Ouvrir le menu');
    });
  });

  var backBtn = document.getElementById('backToTop');
  window.addEventListener('scroll', function(){
    backBtn.classList.toggle('show', window.scrollY > 700);
  });
  backBtn.addEventListener('click', function(){
    window.scrollTo({top:0, behavior:'smooth'});
  });

  var form = document.getElementById('contactForm');
  var status = document.getElementById('formStatus');
  form.addEventListener('submit', function(e){
    e.preventDefault();
    if(!form.checkValidity()){ form.reportValidity(); return; }
    status.classList.add('show');
    form.reset();
    status.focus && status.focus();
  });