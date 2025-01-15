


const button = document.querySelectorAll('.btn');
const displayField = document.getElementById('display');
const opertor = document.querySelectorAll('.btn operator');
const equal = document.getElementById('equals');
const clear = document.getElementById('clear');

button.forEach(button => {
    button.addEventListener('click', () => {
        const value = button.getAttribute('data-value'); 
        
        if (value && button.id !== 'equals' && button.id !== 'clear') {
            displayField.value += value;}
    });
});


equal.addEventListener('click',  (event) => {
    event.stopPropagation(); // Prevent the event from bubbling to other listeners
    console.log(displayField.value);

    try {
        displayField.value = eval(displayField.value);
    } catch (error) {
        displayField.value = "Error";
    }


})


clear.addEventListener('click' , (event) => {
    event.stopPropagation();

displayField.value=" ";

})