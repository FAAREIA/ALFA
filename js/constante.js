$(document).ready(function() {
	// Menú responsivo
	$('.menu-responsivo').on('click', function() {
		$('#encabezado nav').toggleClass('abierta');
	});

	// Cerrar mensajes
	$('.mensaje .cerrar').on('click', function() {
		$(this).closest('.mensaje').fadeOut(240);
	});

	// Abrir emergentes
	$('button[data-emergente]').on('click', function() {
		var emergente = $(this).attr('data-emergente');
		$('.emergente[data-emergente="' + emergente + '"]').fadeIn(480);
	});

	// Cerrar emergentes
	$('.emergente').on('click', function(e) {
		var tag = $(e.target);
		if (tag.is(this) || tag.is('.cerrar')) {
			$(this).fadeOut(240);
		}
	});
});