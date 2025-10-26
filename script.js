//your code here!
// Initial list items
const list = document.getElementById('list'); // Assuming your list has an id of 'list'

// Function to add items
function addItems(count) {
    for (let i = 0; i < count; i++) {
        const li = document.createElement('li');
        li.textContent = `Item ${list.children.length + 1}`; // Incremental item text
        list.appendChild(li);
    }
}

// Add initial items
addItems(10);

// Scroll event listener
window.addEventListener('scroll', () => {
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
        // User has scrolled to the bottom
        addItems(2); // Add 2 more items
    }
});
