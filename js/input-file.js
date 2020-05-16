const inputsTypeFile = document.querySelectorAll('.form-control.file input');

const updateFileName = e => {
	const input = e.currentTarget;

	const files = input.files;
	const filesLength = files.length;
	const parent = input.parentNode;

	if (filesLength > 1) return parent.dataset.file = `${filesLength} files selected`;
	return parent.dataset.file = files[0].name;
}

inputsTypeFile.forEach(input => input.addEventListener('change', updateFileName));