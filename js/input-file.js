$(document).ready(function() {
	$('input[type="file"]').change(function() {
		var contenedor = $(this).parent();
		var archivo = $(this).val();
		var archivo = archivo.replace('C:\\fakepath\\', ''); // IE "fakepath" fix
		$(contenedor).attr('data-archivo', archivo);
	});
});