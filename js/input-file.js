$(document).ready(function() {
	$('input[type="file"]').change(function() {
		var contenedor = $(this).parent();
		var archivo = $(this).val();
		// IE "fakepath" fix
		var archivo = archivo.replace('C:\\fakepath\\', '');
		$(contenedor).attr('data-archivo', archivo);
	});
});