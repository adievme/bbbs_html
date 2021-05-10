const like = document.querySelector('.profile-form__smile_type_good');
const middleLike = document.querySelector('.profile-form__smile_type_middle');
const dislike = document.querySelector('.profile-form__smile_type_bad');
const gradeText = document.querySelector('.profile-form__footer_type_text');

like.addEventListener('click', () => {
    like.classList.toggle('profile-form__smile_type_good_active');
    if(like.classList.contains('profile-form__smile_type_good_active')) {
        gradeText.textContent = 'Было классно!'
        middleLike.classList.remove('profile-form__smile_type_middle_active');
        dislike.classList.remove('profile-form__smile_type_bad_active');
    } else {
        gradeText.textContent = 'Оцените проведенное время'
    }
});

middleLike.addEventListener('click', () => {
    middleLike.classList.toggle('profile-form__smile_type_middle_active');
    if(middleLike.classList.contains('profile-form__smile_type_middle_active')) {
        gradeText.textContent = 'Нормально'
        like.classList.remove('profile-form__smile_type_good_active');
        dislike.classList.remove('profile-form__smile_type_bad_active');
    } else {
        gradeText.textContent = 'Оцените проведенное время'
    }
});

dislike.addEventListener('click', () => {
    dislike.classList.toggle('profile-form__smile_type_bad_active');
    if(dislike.classList.contains('profile-form__smile_type_bad_active')) {
        gradeText.textContent = 'Что-пошло не так'
        like.classList.remove('profile-form__smile_type_good_active');
        middleLike.classList.remove('profile-form__smile_type_middle_active');
    } else {
        gradeText.textContent = 'Оцените проведенное время'
    }
});