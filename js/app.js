const closeModal = template => {
	const modal = template.querySelector('dialog');

	modal.addEventListener('animationend', e => {
		if (e.animationName !== ) return;
		modal.classList.remove('close');
		modal.removeAttribute('open');
	});

	modal.addEventListener('click', e => {
		const target = e.target.className;

		if (target !== 'close-button' && target !== 'modal') return;
		modal.classList.add('close');
	});
}

const openCloseNav = () => nav.classList.toggle('open');

burger.addEventListener('click', openCloseNav);