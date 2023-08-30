let navigataionBar = document.querySelector('.navbar');
let navigationToggle = document.querySelector('.hamburger');
navigationToggle.addEventListener('click', function ()
{
navigataionBar.classList.toggle('navbarT')
});

function Marquee(selector, speed) {
    const parentSelector = document.querySelector(selector);
    const clone = parentSelector.innerHTML;
    const firstElement = parentSelector.children[0];
    let i = 0;
    let marqueeInterval;
  
    parentSelector.insertAdjacentHTML('beforeend', clone);
    parentSelector.insertAdjacentHTML('beforeend', clone);
  
    function startMarquee() {
      marqueeInterval = setInterval(function () {
        firstElement.style.marginLeft = `-${i}px`;
        if (i > firstElement.clientWidth) {
          i = 0;
        }
        i = i + speed;
      }, 0);
    }
  
    function stopMarquee() {
      clearInterval(marqueeInterval);
    }
  
   parentSelector.addEventListener('mouseenter', stopMarquee);
    parentSelector.addEventListener('mouseleave', startMarquee);
  
    startMarquee();
  }
  
  window.addEventListener('load', () => Marquee('.marquee-list', 0.5));


  var tabLinks = document.getElementsByClassName('tab-links');
var tabContents = document.getElementsByClassName('tab-contents');

function openTab(tabName) {
    
    for(let tabLink of tabLinks) {
        tabLink.classList.remove("active-link");
    }

    for(let tabContent of tabContents) {
        tabContent.classList.remove("active-tab");
    }

    event.currentTarget.classList.add('active-link');
    document.getElementById(tabName).classList.add('active-tab');
}
  