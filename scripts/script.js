const menu = document.querySelector('.header');
const menuNavigation = document.querySelector('.header__menu_navigation');
const menuBurgerButton = document.querySelector('.header__icon_burger');
const menuNavigationSocial = document.querySelector('.header__menu_social_mobile');

menuBurgerButton.addEventListener('click', () => {
    menuNavigation.classList.toggle('header__menu_navigation_active');
    menu.classList.toggle('header_active');
    menuNavigationSocial.classList.toggle('header__menu_social_mobile_active');
    if(menuNavigation.classList.contains('header__menu_navigation_active')) {
        menuBurgerButton.src = './images/бургер-меню-закрыть.svg';
        menuBurgerButton.alt = 'Закрыть';
    } else {
        menuBurgerButton.src = './images/бургер.svg';
        menuBurgerButton.alt = 'Бургер меню';
    }
});