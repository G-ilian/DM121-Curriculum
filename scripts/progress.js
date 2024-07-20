document.querySelectorAll('.progress-bar').forEach((progress) => {
    const value = progress.getAttribute('data-progress');
    const bar = progress.querySelector('.progress');
    bar.style.width = value + '%';
});