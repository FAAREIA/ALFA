$(document).ready(function() {
	$('input[type="file"]').change(function() {
		var file = $(this).val();
		$(this).parent().attr('data-file', file);
	});
});