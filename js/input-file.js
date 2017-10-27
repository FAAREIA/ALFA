$('input[type="file"]').change(function() {
	var files = $(this)[0].files.length;
	if (files > 1) {
		var files = files + ' files selected';
	}
	else {
		var files = $(this).val().replace('C:\\fakepath\\', '');
	}
	$(this).closest('.input-file').attr('data-file', files);
});