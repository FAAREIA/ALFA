// Set initial height
var active_tab = $('.tab-panel.fade-in').innerHeight();
$('.tabs-content').css('height', active_tab);

// Navigate between tabs
$('[data-tab-button]').on('click', function() {
	var tab = $(this).attr('data-tab-button');
	var tab_panel_height = $('[data-tab-panel="' + tab + '"]').innerHeight();

	$('[data-tab-button]').removeClass('active');
	$('[data-tab-panel]').removeClass('fade-in');
	$(this).addClass('active');
	$('[data-tab-panel="' + tab + '"]').addClass('fade-in');
	$('.tabs-content').css('height', tab_panel_height);
});