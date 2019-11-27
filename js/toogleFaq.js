const li_perguntas = document.querySelectorAll('.pergunta');

li_perguntas.forEach(element => {
  element.addEventListener('click', function() {
    const ul_respostas = this.children;
    toogle(ul_respostas, 'table');
  });
});

function toogle(elemento, tipoDisplay) {
  if (elemento[0].style.display == 'none') {
    elemento[0].style.display = tipoDisplay;
  } else {
    elemento[0].style.display = 'none';
  }
}
