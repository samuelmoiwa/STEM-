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
    speaker_bio: 'Software Engineer at africa Girls Empathy,  with more than 3 years experience developing and maintaining Software applications, and a full time student at Microverse.',
  },
  {
    speaker_image: 'images/img/speaker_seray.png',
    speaker_name: 'Ing. Seray Lewis',
    speaker_education: 'FOURAH BAY COLLEGE UNIVERSITY OF SIERRA LEONE, B.Sc in MECHANICAL ENGINEERING',
    speaker_bio: 'Chairperson-Board of Directors at STEAD Society, National Outreach Coordinator at The International Astronomical Union and NPoC at Space Generation Advisory Council  African Region',
  },
  {
    speaker_image: 'images/img/speaker_yokie.png',
    speaker_name: 'Hawa Dominica Yokie',
    speaker_education: 'Fouray Bay College. Bachelor of Applied Science - B.Sc, Economics 2019 - 2023',
    speaker_bio: 'Founder and CEO Africa Girls Empathy | STEM Ambassador | Women & Girls, Empowerment | Climate activist | Social Entrepreneur | Innovator',
  },
  {
    speaker_image: 'images/img/speaker_joseph.png',
    speaker_name: 'Ing. Joseph Jawah Kebbie',
    speaker_education: 'B.Sc Honours in computer Science, at Njala University Sierra Leone',
    speaker_bio: 'An experienced Software designer and developer. Managed native and hybrid mobile applications in fields such as educational software, medical and entertainment. Head of VEX Robotic at Africa Girls Empathy',
  },
  {
    speaker_image: 'images/img/speaker_mo.png',
    speaker_name: 'Mohamed Williams',
    speaker_education: 'Colorado Technical University Master of Science in Management, Organizational Leadership and Change 2021 - 2022',
    speaker_bio: 'Program Manager at Federal Aviation Administration. Washington, District of Columbia, United States ',
  },
  {
    speaker_image: 'images/img/speaker_abu.png',
    speaker_name: 'Abu Kamara',
    speaker_education: 'Rutgers University International Economics 2001 - 2005. International Trade, Business Management, Economic Analysis.',
    speaker_bio: 'CEO & Co-founder at Grovara, the exports and imports wholesale marketplace for consumer brands.',
  },
];

speakerCardsItems.forEach((Element, index) => {
  const speakerCard = document.querySelector('.featured_speakers_main_div');
  const cardSection = document.createElement('div');
  cardSection.classList = 'cardSection';
  const speakerCardHTML = `

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
  speakerCard.appendChild(cardSection);
});
