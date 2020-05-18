const inputsFile = document.querySelectorAll('.form-control.file input');

const updateFile = e => {
	const input = e.currentTarget;

	const files = input.files;
	const filesLength = files.length;
	const parent = input.parentNode;

	if (filesLength === 1) return parent.dataset.file = files[0].name;
	return parent.dataset.file = `${filesLength} files selected`;
}

inputsFile.forEach(input => input.addEventListener('change', updateFile));