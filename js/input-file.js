$(document).ready(function() {
	$('input[type="file"]').change(function() {
		var file = $(this).val();
		var file = file.replace('C:\\fakepath\\', ''); // IE "fakepath" fix
		$(this).parent().attr('data-file', file);
	});
});