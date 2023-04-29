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


/* Скрипт валідації та відправки форми*/

/* Cards */
let cards = document.querySelectorAll(".card");
let playing = false;

for (var i = 0; i < cards.length; i++) {
    let card = cards[i];
    cards[i].addEventListener('click',function() {
        if(playing)
          return;
        
        playing = true;
        anime({
          targets: card,
          scale: [{value: 1}, {value: 1.4}, {value: 1, delay: 250}],
          rotateY: {value: '+=180', delay: 200},
          easing: 'easeInOutSine',
          duration: 400,
          complete: function(anim){
             playing = false;
          }
        });
      });
}





