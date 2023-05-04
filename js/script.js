/* Скрипт кнопки наверх */
const scrollBtn = document.querySelector('.isShowBtn');
//поява та зникання кнопки
window.onscroll = () => {
  if (window.scrollY > 700) {
    scrollBtn.classList.remove('isShowBtn_hide');
  } else if (window.scrollY < 700) {
    scrollBtn.classList.add('isShowBtn_hide');
  }

}
//Скрол наверх
scrollBtn.onclick = () => {
  window.scrollTo(0, 0);
}


/* Скрипт бургер меню та скрол до головних об'єктів */
const menu = document.querySelector('.header__nav');
const menuBtn = document.querySelector('.header__burger');

const body = document.body;

if (menu && menuBtn) {
  menuBtn.addEventListener('click', () => {
    menu.classList.toggle('active')
    menuBtn.classList.toggle('active')
    body.classList.toggle('lock')
  })

  menu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      menu.classList.remove('active')
      menuBtn.classList.remove('active')
      body.classList.remove('lock')
    })
  })
}


/*____________Плавний скрол взято з https://github.com/tsuyoshiwada/sweet-scroll тому що інші варіанти створити скрол не працювали на мому ПК____________________________*/

document.addEventListener(
  'DOMContentLoaded',
  () => {
    const scroller = new SweetScroll({
      //Доп настройки скрола
      /*        trigger: '[data-scroll]',       // Selector for trigger (must be a valid css selector)
             header: '[data-scroll-header]', // Selector or Element for fixed header (Selector of must be a valid css selector)
             duration: 1000,                 // Specifies animation duration in integer
             easing: 'easeOutQuint',         // Specifies the pattern of easing
             offset: 0,                      // Specifies the value to offset the scroll position in pixels
             vertical: true,                 // Enable the vertical scroll
             horizontal: false,              // Enable the horizontal scroll
             cancellable: true,              // When fired wheel or touchstart events to stop scrolling
             updateURL: false,               // Update the URL hash on after scroll (true | false | 'push' | 'replace')
             preventDefault: true,           // Cancels the container element click event
             stopPropagation: true,          // Prevents further propagation of the container element click event in the bubbling phase
       
             // Callbacks
             before: null,
             after: null,
             cancel: null,
             complete: null,
             step: null, */
    });
  },
  false,
);



/* Cards */
let cards = document.querySelectorAll(".card");
let playing = false;

for (let i = 0; i < cards.length; i++) {
  let card = cards[i];
  cards[i].addEventListener('click', function () {
    if (playing)
      return;

    playing = true;
    anime({
      targets: card,
      scale: [{ value: 1.2 }, { value: 1.2 }, { value: 1, delay: 200 }],
      rotateY: { value: '+=180', delay: 150 },
      easing: 'easeInOutSine',
      duration: 500,
      complete: function (anim) {
        playing = false;
      }
    });
  });
}


/* Скрипт валідації та відправки форми*/

let isFetching = false

let nullRequired = () => {
  let xArr = document.querySelectorAll("input");
  for(let i = 0; i<xArr.length; i++) {
    xArr[i].classList.remove('rqrd')
  }
}
let addErrorSpan = (parentElem, errMsg) => {
  let hasSpan = parentElem.querySelector('span')
  if (!hasSpan) {
    let errorSpan = document.createElement('span')
    const errorTextNode = document.createTextNode(errMsg)
    errorSpan.appendChild(errorTextNode)
    parentElem.appendChild(errorSpan)
  }
}
let validationForm = () => {
  let done = false
  const phonePattern = /^(\+38)?\s*\(?\d{3}\)?\s*-?\d{2}-?\d{2}-?\d{3}$/;
  const phonePattern2 = /^0\d{2}-\d{2}-\d{2}-\d{3}$/;

  let teleElem = document.forms['mainForm']['telephone']
  let nameElem = document.forms['mainForm']['name']
  let commElem = document.forms['mainForm']['comment']

  let userName = nameElem.value
  !userName ? addErrorSpan(nameElem.parentNode, "Це поле обов'язкове") : nameElem.parentNode.querySelector('span') && nameElem.parentNode.removeChild(nameElem.parentNode.querySelector('span'))
  !userName ? nameElem.classList.add('rqrd') : nameElem.classList.remove('rqrd')

  let telNumber = teleElem.value
  const isValid = phonePattern.test(teleElem.value) || phonePattern2.test(teleElem.value);

  if(!telNumber) {
    teleElem.classList.add('rqrd')
    addErrorSpan(teleElem.parentNode, "Це поле обов'язкове")
  } else {
    teleElem.parentNode.querySelector('span') && teleElem.parentNode.removeChild(teleElem.parentNode.querySelector('span'))
  }
  if (!isValid) {
    addErrorSpan(teleElem.parentNode, 'Не вірно вказаний номер')
  } else {
    teleElem.classList.remove('rqrd')
    teleElem.parentNode.querySelector('span') && teleElem.parentNode.removeChild(teleElem.parentNode.querySelector('span'))
  }
  
  let comment = commElem.value
  !comment ? addErrorSpan(commElem.parentNode, "Це поле обов'язкове") : commElem.parentNode.querySelector('span') && commElem.parentNode.removeChild(commElem.parentNode.querySelector('span'))
  !comment ? commElem.classList.add('rqrd') : commElem.classList.remove('rqrd')


}

/* let showPreloader = () => {
  let form = document.querySelectorAll('.form-group')
  for(let i = 0; i < form.length; i++) {
    form[i].style.display = 'none';
  }
  let preloader = document.querySelector('.preloader')
  preloader.style.display = 'flex'
} */
let togglePreloader = () => {
  let form = document.querySelectorAll('.form-group')
  for(let i = 0; i < form.length; i++) {
    form[i].style.display = 'none';
  }
  let preloader = document.querySelector('.preloader')
  preloader.style.display = 'flex'
}

let sendForm = document.getElementById('tg')
sendForm.addEventListener('submit', function (e) {
  togglePreloader()
  document.getElementById('submitButton').disabled = true
  e.preventDefault();

  const TOKEN = '6006103677:AAEDNp3ZKzv6WYYU46bLOhUvjQrUzkeXdbA';
  const CHAT_ID = '-1001905089338';
  const URI_API = `https://api.telegram.org/bot${TOKEN}/sendMessage`;

  let message =  `<b>Відправник: </b> ${this.name.value}\n`;
  message += `<b>Номер телефону: </b> ${this.telephone.value}\n`;
  this.email.value.length > 0 ? message += `<b>Адреса електронної пошти: </b> ${this.email.value}\n` : console.log('Не вказана пошта');
  message += `<b>Коментар до замовлення: </b> ${this.comment.value}\n`;
  
  validationForm();
  if(!this.name.classList.contains('rqrd') && !this.telephone.classList.contains('rqrd') && !this.comment.classList.contains('rqrd')) {
    axios.post(URI_API, {
      chat_id: CHAT_ID,
      parse_mode: 'html',
      text: message
    }).then(() => {
      
      //console.log(res);
      togglePreloader()
    }
    ).catch().finally(() => {
      isFetching = false
      document.getElementById('submitButton').disabled = false
      this.name.value = ''
      this.email.value = ''
      this.telephone.value = ''
      this.comment.value = ''
      let preloader = document.querySelector('.preloader')
      preloader.style.display = 'none'
      let accepted = document.querySelector('.fetched')
      accepted.style.display = 'flex'
    })
  }
  
})
window.sendForm = sendForm;

//! скрипт swiper slider

const swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,
  effect: 'slider',
  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  // автопролистування
  autoplay: {
    delay: 800,
  },
  speed: 1800,
  slidesPerView: 4,

  loop: true,
});





//! скрипт для каталогу черенків
const rows = document.querySelectorAll('.row');

rows.forEach(row => {

  const button = row.querySelector('.button');

  button.addEventListener('click', () => {
    const bottom = row.querySelector('.bottom');
    bottom.classList.toggle('active');
  });
});







