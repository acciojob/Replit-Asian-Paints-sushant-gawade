const blockIdInput = document.getElementById('input_block_id');
const colorIdInput = document.getElementById('input_colour_id');
const changeButton = document.getElementById('change_button');
const resetButton = document.getElementById('reset_button');
const gridItems = document.querySelectorAll('.grid-item');

changeButton.addEventListener('click', () => {
    // Reset all grid items to transparent
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