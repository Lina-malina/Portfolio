$('.carousel').carousel({touch: true});
const showBtnRepair = document.getElementById('show_btn_repair');
showBtnRepair.addEventListener('click', () => {
    const mobileDescription = document.getElementById('mobile_description');
    if(mobileDescription.classList.contains('hidden')) {
        mobileDescription.classList.toggle('visible');
    }
});
const showBtnTheyalow = document.getElementById('show_btn_theyalow');
showBtnTheyalow.addEventListener('click', () => {
    const mobileDescriptionTheyalow = document.getElementById('mobile_description_theyalow');
    if(mobileDescriptionTheyalow.classList.contains('hidden')) {
        mobileDescriptionTheyalow.classList.toggle('visible');
    }
});

