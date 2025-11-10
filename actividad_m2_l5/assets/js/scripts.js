// Esperar a que cargue el DOM
$(document).ready(function() {
  // Cuando se haga clic en el botón "Ir arriba"
  $('#go-top').click(function() {
    // Animar el scroll hasta la parte superior de la página
    $('html, body').animate({ scrollTop: 0 }, 'slow');
  });
});
