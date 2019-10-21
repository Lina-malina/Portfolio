let accordion = document.querySelector('.education_accordion');

accordion.addEventListener('click', function () {
    document.querySelector('.education_panel').classList.toggle('visible');
});

var mySwiper = new Swiper('.swiper-container', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    noSwiping: true,
    noSwipingClass: 'desktop_slide',

    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
    },

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});

function changeDescription(button) {
    button.innerText = button.innerText == 'Show description' ? 'Hide description' : 'Show description';
    let descriptionBlock = button.parentNode.querySelector('.mobile_slide--description');
    descriptionBlock.classList.toggle('visible');
}
