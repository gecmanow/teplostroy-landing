$(".slider").slick({
    infinite: true,
    /*autoplay: true,*/
    arrows: true,
    //appendArrows: $('.slider__buttons')
});

function onEntry(entry) {
    entry.forEach(change => {
        if (change.isIntersecting) {
            change.target.classList.add('show');
        }
    });
}

let options = { threshold: [0.5] };
let observer = new IntersectionObserver(onEntry, options);
let elements = document.querySelectorAll('.animation');

for (let elm of elements) {
    observer.observe(elm);
}

let cycleItem = 0;

function cycleElems() {
    $('.projects__client-property').hide();
    $('.projects__client-property').css('opacity', '0');
    $('.client-item-' + cycleItem).show();
    $('.client-item-' + cycleItem).css('opacity', '1');
    
    let maxItem = 2;
    cycleItem++;
    if(cycleItem > maxItem) {
        cycleItem = 0;
    }
}
document.addEventListener("DOMContentLoaded", function() {
    setInterval(cycleElems, 2000);
});

document.addEventListener("scroll", function() {
    let header = document.querySelector('.header');
    console.log(scrollY);

    if(scrollY > 1) {
        header.classList.add('header-pc-sticky');
    } else {
        header.classList.remove('header-pc-sticky');
    }
})