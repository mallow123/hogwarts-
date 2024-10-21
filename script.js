document.addEventListener("DOMContentLoaded", function() {
    const openBookBtn = document.getElementById('open-book');
    const pages = document.querySelectorAll('.page');
    let currentPage = 0;

    // Function to turn the page
    function turnPage() {
        if (currentPage < pages.length - 1) {
            pages[currentPage].classList.add('hidden');
            currentPage++;
            pages[currentPage].classList.remove('hidden');
        } else {
            pages[currentPage].classList.add('hidden');
            currentPage = 0;  // Reset to the beginning
            pages[currentPage].classList.remove('hidden');
        }
    }

    // Open the book and start flipping pages
    openBookBtn.addEventListener('click', function() {
        turnPage();
    });

    // Automatically flip pages after a short delay
    setInterval(turnPage, 5000);  // Change pages every 5 seconds
});
