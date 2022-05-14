const home = document.querySelector('.home');
const bookmarkPage = document.querySelector('.bookmarkP');
const leaderboard = document.querySelector('.leaderboard');
const profilePage = document.querySelector('.profileP');
const headerTxt = document.querySelector('.headertxt');
document.querySelector('#homebtn').addEventListener('click', () => {
	headerTxt.textContent = 'Quizapp';
	home.classList.remove('hidden');
	bookmarkPage.classList.add('hidden');
	leaderboard.classList.add('hidden');
	profilePage.classList.add('hidden');
});
document.querySelector('#bookmarkbtn').addEventListener('click', () => {
	headerTxt.textContent = 'Bookmarks';
	home.classList.add('hidden');
	bookmarkPage.classList.remove('hidden');
	leaderboard.classList.add('hidden');
	profilePage.classList.add('hidden');
});
document.querySelector('#leaderboardbtn').addEventListener('click', () => {
	headerTxt.textContent = 'Create';
	home.classList.add('hidden');
	bookmarkPage.classList.add('hidden');
	leaderboard.classList.remove('hidden');
	profilePage.classList.add('hidden');
});
document.querySelector('#profilebtn').addEventListener('click', () => {
	headerTxt.textContent = 'Profile';
	home.classList.add('hidden');
	bookmarkPage.classList.add('hidden');
	leaderboard.classList.add('hidden');
	profilePage.classList.remove('hidden');
});
