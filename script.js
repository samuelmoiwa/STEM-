const body = document.querySelector('body');
const menuBars = document.getElementById('menu-bars');
const overlay = document.getElementById('overlay');
const nav1 = document.getElementById('nav-1');
const nav2 = document.getElementById('nav-2');
const nav3 = document.getElementById('nav-3');
const navItems = [nav1, nav2, nav3];

function toggleNav() {
  menuBars.classList.toggle('change');
  overlay.classList.toggle('overlay-active');
  if (overlay.classList.contains('overlay-active')) {
    overlay.classList.replace('overlay-slide-left', 'overlay-slide-right');
  } else {
    overlay.classList.replace('overlay-slide-right', 'overlay-slide-left');
  }
  body.classList.toggle('overflow');
}

menuBars.addEventListener('click', toggleNav);
navItems.forEach((nav) => {
  nav.addEventListener('click', toggleNav);
});


const speakerCardsItems = [
  {
    speaker_image: 'images/img/speaker_moiwa.png',
    speaker_name: 'Ing. Samuel Moiwa',
    speaker_education: 'B.Sc Honours in computer Science, at Njala University Sierra Leone',
    speaker_bio:  'Software Engineer at africa Girls Empathy,  with more than 3 years experience developing and maintaining Software applications, and a full time student at Microverse.'
  },
  {
    speaker_image: 'images/img/speaker_seray.png',
    speaker_name: 'Ing. Seray Lewis',
    speaker_education: 'B.Sc Honours in computer Science, at Njala University Sierra Leone',
    speaker_bio:  'Software Engineer at africa Girls Empathy,  with more than 3 years experience developing and maintaining Software applications, and a full time student at Microverse.'
  },
  {
    speaker_image: 'images/img/speaker_yokie.png',
    speaker_name: 'Hawa Dominica Yokie',
    speaker_education: 'B.Sc Honours in computer Science, at Njala University Sierra Leone',
    speaker_bio:  'Software Engineer at africa Girls Empathy,  with more than 3 years experience developing and maintaining Software applications, and a full time student at Microverse.'
  },
  {
    speaker_image: 'images/img/speaker_joseph.png',
    speaker_name: 'Ing. Joseph Jawah Kebbie',
    speaker_education: 'B.Sc Honours in computer Science, at Njala University Sierra Leone',
    speaker_bio:  'Software Engineer at africa Girls Empathy,  with more than 3 years experience developing and maintaining Software applications, and a full time student at Microverse.'
  },
  {
    speaker_image: 'images/img/speaker_mo.png',
    speaker_name: 'Mohamed Williams',
    speaker_education: 'B.Sc Honours in computer Science, at Njala University Sierra Leone',
    speaker_bio:  'Software Engineer at africa Girls Empathy,  with more than 3 years experience developing and maintaining Software applications, and a full time student at Microverse.'
  },
  {
    speaker_image: 'images/img/speaker_abu.png',
    speaker_name: 'Abu Kamara',
    speaker_education: 'B.Sc Honours in computer Science, at Njala University Sierra Leone',
    speaker_bio:  'Software Engineer at africa Girls Empathy,  with more than 3 years experience developing and maintaining Software applications, and a full time student at Microverse.'
  }
]

speakerCardsItems.forEach((Element, index) => {
const speakerCard = document.querySelector('.featured_speakers_main_div');
const cardSection = document.createElement('div')
cardSection.classList = 'cardSection'
const speakerCardHTML =`

<div class="speaker_div">
  <div class="speaker_image_container">
    <img class="speaker_image" src="${speakerCardsItems[index].speaker_image}" alt="">
  </div>
  <div class="speaker_text_container">
    <h3 class="speaker_name"> ${speakerCardsItems[index].speaker_name}</h3>
    <p class="speaker_education_background">
    ${speakerCardsItems[index].speaker_education}
    </p>
    <div class="divider_line"></div>
    <p class="speaker_education_bio">
    ${speakerCardsItems[index].speaker_bio}
    </p>
  </div>
</div>

`;
cardSection.innerHTML += speakerCardHTML;
speakerCard.appendChild(cardSection)
});



