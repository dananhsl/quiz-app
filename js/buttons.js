const cards = document.querySelectorAll('.card');

function cardbuttons() {
	cards.forEach((card) => {
		const bookmarkSvg = card.querySelector('.bookmark__svg');
		const bookmarkBtn = card.querySelector('.bookmark__btn');
		const answerBtn = card.querySelector('.card__btn');
		const answerTxt = card.querySelector('.card__answer');

		bookmarkBtn.addEventListener('click', () => {
			bookmarkSvg.classList.toggle('bookmark__svg--red');
		});
		answerBtn.addEventListener('click', () => {
			answerTxt.classList.toggle('hidden');
			if (answerBtn.textContent == 'Hide Answer') {
				answerBtn.textContent = 'Show Answer';
			} else {
				answerBtn.textContent = 'Hide Answer';
			}
		});
	});
}

export { cardbuttons };
