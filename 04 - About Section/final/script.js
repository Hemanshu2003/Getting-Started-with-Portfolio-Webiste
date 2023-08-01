let count = 1;

const Bgcolors = [
  'linear-gradient(45deg,#a8e6cf,#dcedc1,#ffd3b6,#ffaaa5,#ff8b94)',
  'linear-gradient(45deg,#051e3e,#251e3e,#451e3e,#651e3e,#851e3e)',
  'linear-gradient(45deg,#ee4035,#f37736,#fdf498,#7bc043,#0392cf)',
  'linear-gradient(45deg,#316879,#1fbfb8, #05716c, #1978a5, #031163)',
];

const changeThemeBtn = document.querySelector('.changeThemeBtn');

const changeThemeBtnMobile = document.querySelector('.changeThemeBtn-mobile');

const heroSection = document.getElementById('hero-section');

const anchor = document.getElementsByTagName('a');

const nameTag = document.getElementById('tag-name');

const allButtons = document.getElementsByTagName('button');

//default
heroSection.style.background = `${Bgcolors[0]}`;
heroSection.style.backgroundSize = '400% 400%';
heroSection.style.animation = 'dancingBG 5s ease infinite';

const changeBackgroundColor = function () {
  heroSection.style.background = `${Bgcolors[count]}`;
  heroSection.style.backgroundSize = '400% 400%';
  heroSection.style.animation = 'dancingBG 5s ease infinite';

  if (count === 1 || count === 3) {
    for (let i = 0; i < anchor.length; i++) {
      anchor[i].style.color = 'white';
    }

    for (let i = 0; i < allButtons.length; i++) {
      allButtons[i].style.color = 'white';
      allButtons[i].style.border = '2px solid white';
    }

    nameTag.style.color = 'white';
  } else {
    for (let i = 0; i < anchor.length; i++) {
      anchor[i].style.color = 'black';
    }

    for (let i = 0; i < allButtons.length; i++) {
      allButtons[i].style.color = 'black';
      allButtons[i].style.border = '2px solid  black';
    }

    nameTag.style.color = 'black';
  }

  count++;
  if (count === 4) {
    count = 0;
  }
};

changeThemeBtn.addEventListener('click', changeBackgroundColor);
changeThemeBtnMobile.addEventListener('click', changeBackgroundColor);
