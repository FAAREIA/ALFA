$(document).ready(function() {
	// Set default height
	var active_tab = $('.tab-panel.fade-in').innerHeight();
	$('.tabs-content').css('height', active_tab);

	// Navigate between tabs
	$('button[data-tab]').on('click', function() {
		var tab = $(this).attr('data-tab');
		$('.tabs button').removeClass('active');
		$(this).addClass('active');
		$('.tab-panel[data-tab="' + tab + '"]').addClass('fade-in').siblings().removeClass('fade-in');
		var tab_height = $('.tab-panel[data-tab="' + tab + '"]').innerHeight();
		$('.tabs-content').css('height', tab_height);
	});
});