/* Скрипт кнопки наверх */
const scrollBtn = document.querySelector('.isShowBtn');
//поява та зникання кнопки
window.onscroll = () =>{
    if(window.scrollY > 700){
        scrollBtn.classList.remove('isShowBtn_hide');
    } else if(window.scrollY < 700){
        scrollBtn.classList.add('isShowBtn_hide');
    }

}
//Скрол наверх
scrollBtn.onclick = () =>{
    window.scrollTo(0,0);
}


/* Скрипт бургер меню та скрол до головних об'єктів */
const menu = document.querySelector('.header__nav');
const menuBtn = document.querySelector('.header__burger');

const body = document.body;

if (menu && menuBtn){
    menuBtn.addEventListener('click', () =>{
        menu.classList.toggle('active')
        menuBtn.classList.toggle('active')
        body.classList.toggle('lock')
    })

    menu.querySelectorAll('a').forEach(link =>{
        link.addEventListener('click', () =>{
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
  

/* Кнопка інформації на секції каталогу */

/* function readMore(){
    const dots = document.getElementById("dots");
    const more = document.getElementById("more");
    const btnMoreInfo = document.getElementById("moreInfo");

    if(dots.style.display === "none"){
        dots.style.display="inline";
        btnMoreInfo.innerHTML="Детально";
        more.style.display="none";
    } else {
        {
            dots.style.display="none";
            btnMoreInfo.innerHTML="Закрити";
            more.style.display="inline";
        }
    }
} */


/* Cards */
let cards = document.querySelectorAll(".card");
let playing = false;

for (let i = 0; i < cards.length; i++) {
    let card = cards[i];
    cards[i].addEventListener('click',function() {
        if(playing)
          return;
        
        playing = true;
        anime({
          targets: card,
          scale: [{value: 1.2}, {value: 1.2}, {value: 1, delay: 200}],
          rotateY: {value: '+=180', delay: 150},
          easing: 'easeInOutSine',
          duration: 500,
          complete: function(anim){
             playing = false;
          }
        });
      });
}


/* Скрипт валідації та відправки форми*/

document.getElementById('tg').addEventListener('submit', function (e) {
    e.preventDefault();
// Валідація форми
// let formInputs = document.querySelectorAll('.js-input')
// let inputEmail = document.querySelector('.js-input-email')
// let inputPhone = document.querySelector('.js-input-phone')

// let emailVal = inputEmail.value ,
//     phoneVal = inputPhone.value ;

// formInputs.forEach( (input) =>{
//     if(input.value === ''){
//         input.classList.add('error');
//     }else{
//         input.classList.remove('error')
//     }
// })

// Відправка форми
const TOKEN = '6006103677:AAEDNp3ZKzv6WYYU46bLOhUvjQrUzkeXdbA';
const CHAT_ID = '-1001905089338';
const URI_API = `https://api.telegram.org/bot${TOKEN}/sendMessage`;



    let message = `<b>Замовлення з сайту!</b>\n`;
    message += `<b>Відправник: </b> ${this.name.value}\n`;
    message += `<b>Номер телефону: </b> ${this.telephone.value}\n`;
    this.email.value.length > 0 ? message += `<b>Адреса електронної пошти: </b> ${this.email.value}\n` : console.log('Не вказана пошта');
    this.comment.value.length > 0 ? message += `<b>Коментар до замовлення: </b> ${this.comment.value}\n` : console.log("Не вказаний коментар");
    axios.post(URI_API, {
        chat_id: CHAT_ID,
        parse_mode: 'html',
        text: message
    }).then().catch().finally(() => {
        this.name.value = ''
        this.email.value = ''
        this.telephone.value = ''
        this.comment.value = ''
    })
})




