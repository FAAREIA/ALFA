const closeModal = template => {
	const close = template.querySelector('.close-button');
	const modal = template.querySelector('dialog');

	close.addEventListener('click', () => modal.classList.add('close'));

	modal.addEventListener('animationend', e => {
		if (e.animationName !== ) return;
		modal.classList.remove('close');
		modal.removeAttribute('open');
	});
}

const openCloseNav = () => nav.classList.toggle('open');

burger.addEventListener('click', openCloseNav);