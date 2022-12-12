'use strict'

//кнопки меню
const menuServices = document.querySelector("li.menu-services");
menuServices.addEventListener("click", (event) => {
    event.preventDefault();
    let services = document.querySelector("main.services");
    services.scrollIntoView();
});

const menuStock = document.querySelector(".menu-stock");
menuStock.addEventListener("click", (event) => {
    event.preventDefault();
    let stock = document.querySelector("section.stock");
    stock.scrollIntoView();
});

const menuContacts = document.querySelector(".menu-contacts");
menuContacts.addEventListener("click", (event) => {
    event.preventDefault();
    let contacts = document.querySelector("footer.contacts");
    contacts.scrollIntoView();
});

const menuWorkExamples = document.querySelector(".menu-work-examples");
menuWorkExamples.addEventListener("click", (event) => {
    event.preventDefault();
    let workExamples = document.querySelector("section.work-examples");
    workExamples.scrollIntoView();
});

//прокрутка вверх

window.onscroll = function()  {
    let winY = window.scrollY;
    let btnPageUp = document.querySelector(".btn-page-up");
    if(winY >= 600 && btnPageUp) {
        btnPageUp.classList.add("isShow-up-arrow");
        btnPageUp.style.cursor = "pointer";
        let btnUpArrow = Array.from(document.querySelectorAll(".up-arrow"));
            btnUpArrow.forEach(item => {
                item.addEventListener("click", () => {
                     window.scroll(0,0);                       
                    })
            })             
    };
    if(winY < 500 && btnPageUp) {
        btnPageUp.classList.remove("isShow-up-arrow");
        btnPageUp.style.cursor = "default";
    };
}

//кнопки подробнее.

let btnServicesDetails = Array.from(document.querySelectorAll(".btn-services-details"));
let openServicesDetails = btnServicesDetails.forEach(btn => btn.addEventListener("click", event => {
    event.preventDefault();
    if(event.target.closest(".container-services-details").querySelector(".container-details-list")) {
      btn.closest(".container-services-details").querySelector(".container-details-list").classList.add("services-details-activ")
    }
  }))

let btnDetailsClose = Array.from(document.querySelectorAll(".btn-details-close"));
let closeServicesDetails = btnDetailsClose.forEach(btn => btn.addEventListener("click", event => {
    event.preventDefault();
      if(event.target.closest(".container-services-details").querySelector(".container-details-list")) {
       btn.closest(".container-services-details").querySelector(".container-details-list").classList.remove("services-details-activ")
      }
   }))


// слайдер


const workExamplesImages = document.querySelectorAll(".work-examples-image");
const containerSlider = document.querySelector(".container-slider");
//const workExamples = document.querySelector(".work-examples");
let slideNumber = 0;
let width;

function init() {
width = document.querySelector(".container-work-examples").offsetWidth;
    if(workExamplesImages && workExamplesImages.length > 0) {
        containerSlider.style.width = width * workExamplesImages.length + "px";
        workExamplesImages.forEach(item => {
            item.style.width = width + "px";
            item.style.height = "auto";
        });
        rollSlider();
    };
}

window.addEventListener("resize", init);
init();

function rollSliderNext () {
    if(workExamplesImages && workExamplesImages.length > 0) {
        slideNumber ++;
        if (slideNumber >= workExamplesImages.length) {
            slideNumber = 0;
        };
        rollSlider();
    }
}

function rollSlider () {
    containerSlider.style.transform = "translate(-"+ slideNumber * width +"px)";
}

let startSlider =  setInterval(rollSliderNext, 2000);
//clearInterval(startSlider); 


/*function openSlider () {
    const workExamples = document.querySelector(".work-examples");
    let blockSlider = workExamples.getBoundingClientRect();
   // if (blockSlider.top <= window.outerHeight && blockSlider.bottom > 0) {  
if (blockSlider.top >= window.outerHeight || blockSlider.bottom < 0) {
    let ok = window.outerHeight;
    let fff = ok + "ffff";
    let x = 0;
    clearInterval(startSlider);
} 
//let startSlider =  setInterval(rollSliderNext, 2500);



  // setInterval(rollSliderNext, 2500);
} 

document.addEventListener("scroll", openSlider);
openSlider();
/*if (blockSlider.top >= window.outerHeight || blockSlider.bottom < 0) {
    let ok = window.outerHeight;
    alert(ok);
}*/