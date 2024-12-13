document.addEventListener('DOMContentLoaded', () => {
    const courseButton = document.getElementById('course-button');
    const forumButton = document.getElementById('forum-button');

    forumButton.addEventListener('click', () => {
        forumButton.classList.add('active');
        courseButton.classList.remove('active');
        // Можно добавить переход на страницу курса
    });

    courseButton.addEventListener('click', () => {
        courseButton.classList.add('active');
        forumButton.classList.remove('active');
        // Переход на страницу форума
        window.location.href = 'index.html'; // Замените на нужный URL
    });
});
