// A simple script to add interactivity to the menu table
document.addEventListener('DOMContentLoaded', () => {
    const highlightBtn = document.getElementById('highlight-specials');
    
    if (highlightBtn) {
        highlightBtn.addEventListener('click', () => {
            // Selects the first row in the table body and highlights it
            const firstRow = document.querySelector('tbody tr');
            if (firstRow) {
                firstRow.classList.toggle('special');
                alert("The Classic Italian is today's special!");
            }
        });
    }
});
