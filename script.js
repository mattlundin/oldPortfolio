// HOME - 'TOASTY'
const toasty = () => {
	const btn = document.querySelector('.code-icon i');
	const circle = document.querySelector('.toasty');

	btn.addEventListener('click', () => {
		circle.classList.toggle('active');
		setTimeout(() => {
			circle.classList.toggle('active');
		}, 1000);
	});
};
let sound = new Audio();
sound.src = '/audio/8d82b5_Mortal_Kombat_2_Toasty_Sound_Effect.mp3';
sound.volume = 0.4;

toasty();

// MOBILE NAV
const navSlide = () => {
	const burger = document.querySelector('.burger');
	const navList = document.querySelector('.nav-list');
	const navItem = document.querySelectorAll('.nav-list li');

	burger.addEventListener('click', () => {
		navList.classList.toggle('open');
		burger.classList.toggle('toggle');
	});
	//CLOSE NAVBAR WHEN CLICKING ON LI
	for (let i = 0; i < navItem.length; i++) {
		let closeNav = navItem[i];

		closeNav.addEventListener('click', () => {
			if (navList.classList.contains('open')) {
				navList.classList.toggle('open');
			}
			if (burger.classList.contains('toggle')) {
				burger.classList.toggle('toggle');
			}
		});
	}
};

navSlide();
