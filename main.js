
const submitButton = document.querySelector('submit-button'); 
submitButton.addEventListener('click', function() {
    const inputText = document.querySelector('translator-input').value; 
    const resultsElement = document.querySelector('results'); 
    const radioButtons = document.querySelector('translation-type');
    
    