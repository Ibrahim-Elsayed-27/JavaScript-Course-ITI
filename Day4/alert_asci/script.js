// document.addEventListener('keydown', function(event) {
//     var asciiCode = event.keyCode;
//     var keyInfo = 'ASCII Code: ' + asciiCode + '\n';
//     if (event.altKey) {
//         keyInfo += 'Alt Key Pressed\n';
//     }
//     if (event.ctrlKey) {
//         keyInfo += 'Ctrl Key Pressed\n';
//     }
//     if (event.shiftKey) {
//         keyInfo += 'Shift Key Pressed\n';
//     }
//     alert(keyInfo);
// });

var numberInput = document.getElementById('NumberInput');
numberInput.addEventListener('change', function() {
    var value = numberInput.value;  
    if (isNaN(value)){
        alert('Please enter a valid number.');
        numberInput.value = '';
    }
});