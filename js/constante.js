$(document).ready(function() {
	// Menú responsivo
	$('.menu-responsivo').on('click', function() {
		$('#encabezado nav').toggleClass('abierta');
	});

	// Cerrar mensajes
	$('.cerrar').on('click', function() {
		$(this).parent().fadeOut(240);
	});
});