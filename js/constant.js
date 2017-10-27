// Launch "SVG for Everybody" library
svg4everybody();

// Navigation - Responsive
$('.nav-responsive').on('click', function() {
	$('#header nav').toggleClass('open');
});

// Alert - Close
$('.alert .close').on('click', function() {
	$(this).closest('.alert').removeClass('fade-in');
});

// Modal - Open
$('button[data-modal]').on('click', function() {
	var modal = $(this).attr('data-modal');
	$('.modal[data-modal="' + modal + '"]').addClass('fade-in');
});
// Modal - Close
$('.modal').on('click', function(e) {
	var tag = $(e.target);
	if (tag.is(this) || tag.is('.close')) {
		$(this).removeClass('fade-in');
	}
});