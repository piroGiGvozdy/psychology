function showOption(categoryId) {
    const options = document.querySelectorAll('.options_items');
    options.forEach(option => option.classList.remove('active'));

    const targetOption = document.getElementById(categoryId);
    if (targetOption) {
        targetOption.classList.add('active');
    }

    const optionButtons = document.querySelectorAll('.menu-buttons a');
    optionButtons.forEach(button => button.classList.remove('active'));

    const activeButton = document.querySelector(`.menu-buttons a[data-category="${categoryId}"]`);
    if (activeButton) {
        activeButton.classList.add('active');
    }
}

// Обработчик предотвращает стандартное действие кнопок с `href="#"`.
document.querySelectorAll('.menu-buttons a').forEach(button => {
    button.addEventListener('click', (e) => {
        e.preventDefault(); // Отключает переход по ссылке
        const categoryId = button.getAttribute('data-category');
        showOption(categoryId);
    });
});
