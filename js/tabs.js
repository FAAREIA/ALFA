$(document).ready(function() {
	// Set default height
	var active_tab = $('.tabs section.active').innerHeight();
	$('div.tabs').css('height', active_tab);

	// Navigate between tabs
	$('button[data-tab]').on('click', function() {
		var tab = $(this).attr('data-tab');
		var tab_height = $('section[data-tab="' + tab + '"]').innerHeight();
		$('nav.tabs button').removeClass('active');
		$(this).addClass('active');
		$('div.tabs').css('height', tab_height);
		$('section[data-tab="' + tab + '"]').addClass('active').siblings().removeClass('active');
	});
});