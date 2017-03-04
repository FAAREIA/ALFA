$(document).ready(function() {
	// Set default height
	var active_tab = $('.tab.active').innerHeight();
	$('div.tabs').css('height', active_tab);

	// Navigate between tabs
	$('button[data-tab]').on('click', function() {
		var tab = $(this).attr('data-tab');
		$('nav.tabs button').removeClass('active');
		$(this).addClass('active');
		$('.tab[data-tab="' + tab + '"]').addClass('active').siblings().removeClass('active');
		var tab_height = $('.tab[data-tab="' + tab + '"]').innerHeight();
		$('div.tabs').css('height', tab_height);
	});
});