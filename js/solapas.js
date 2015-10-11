$(document).ready(function() {
	solapa_activa = $('.solapas section.activa').innerHeight();
	$('div.solapas').css('height', solapa_activa);

	$('button[data-solapa]').on('click', function() {
		var solapa = $(this).attr('data-solapa');
			solapa_altura = $('section[data-solapa="' + solapa + '"]').innerHeight();
		$('nav.solapas button').removeClass('activa');
		$(this).addClass('activa');
		$('div.solapas').css('height', solapa_altura);
		$('section[data-solapa="' + solapa + '"]').addClass('activa').siblings().removeClass('activa');
	});
});