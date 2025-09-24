//your JS code here. If required.
const blockIdInput = document.getElementById('block_id');
const colorIdInput = document.getElementById('colour_id');
const changeButton = document.getElementById('change_button');
const resetButton = document.getElementById('Reset');
const gridItems = document.querySelectorAll('.grid-item');

changeButton.addEventListener('click', () => {
    // Reset all grid items to transparent before changing the color
    gridItems.forEach(item => {
        item.style.backgroundColor = 'transparent';
    });

    const blockId = blockIdInput.value;
    const color = colorIdInput.value;

    const targetBlock = document.getElementById(blockId);

    if (targetBlock) {
        targetBlock.style.backgroundColor = color;
    } else {
        alert('Please enter a valid block ID (1-9).');
    }
});

resetButton.addEventListener('click', () => {
    // Reset all grid items to transparent
    gridItems.forEach(item => {
        item.style.backgroundColor = 'transparent';
    });
    
    // Optional: Clear the input fields as well
    blockIdInput.value = '';
    colorIdInput.value = '';
});