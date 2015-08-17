$(document).ready(function() {
	// Iniciamos la biblioteca
	svg4everybody();

	// Menú responsivo
	$('.menu-responsivo').on('click', function() {
		$('#encabezado nav').toggleClass('abierta');
	});

	// Mensajes
	$('.mensaje .cerrar').on('click', function() {
		$(this).closest('.mensaje').fadeOut(240);
	});

	// Emergentes
	// Abrir
	$('button[data-emergente]').on('click', function() {
		var emergente = $(this).attr('data-emergente');
		$('.emergente[data-emergente="' + emergente + '"]').fadeIn(480);
	});
	// Cerrar
	$('.emergente').on('click', function(e) {
		var tag = $(e.target);
		if (tag.is(this) || tag.is('.cerrar')) {
			$(this).fadeOut(240);
		}
	});
});