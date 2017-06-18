$(document).ready(function() {
	// Launch "SVG for Everybody" library
	svg4everybody();

	// Navigation - Responsive
	$('.nav-responsive').on('click', function() {
		$('#header nav').toggleClass('open');
	});

	// Alert - Close
	$('.alert .close').on('click', function() {
		$(this).closest('.alert').fadeOut(240);
	});

	// Modal - Open function
	function modal_open(modal) {
		$('.modal[data-modal="' + modal + '"]').fadeIn(480);
	}
	// Modal - Open with button
	$('button[data-modal]').on('click', function() {
		var modal = $(this).attr('data-modal');
		modal_open(modal);
	});
	// Modal - Close
	$('.modal').on('click', function(e) {
		var tag = $(e.target);
		if (tag.is(this) || tag.is('.close')) {
			$(this).fadeOut(240);
		}
	});
});