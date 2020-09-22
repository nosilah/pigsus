$(function () {


    // function readMore() {
    //     var dots = document.getElementById("dots");
    //     var more = document.getElementById("more");
    //     var btn = document.getElementById("content__btn-btn");

    //     if (dots.style.display === "none") {
    //         dots.style.display = "inline";
    //         btn.innerHTML = "подробнее";
    //         more.style.display = "none";
    //     } else {
    //         dots.style.display = "none";
    //         btn.innerHTML = "скрыть";
    //         more.style.display = "inline";
    //     }
    // }

    $('.menu__btn').on('click', function () {
        $('.menu__top__mobile__vr ').slideToggle();

    })



    $('.footer__item-title-car__mobile__vr').on('click', function () {
        $('.footer__item-list-car__mobile__vr ').slideToggle();

    })
    $('.footer__item-title-our-service__mobile__vr').on('click', function () {
        $('.footer__item-list-service__mobile__vr ').slideToggle();

    })
    $('.footer__item-title-about-us__mobile__vr').on('click', function () {
        $('.footer__item-list-about-us__mobile__vr').slideToggle();

    })
});