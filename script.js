const form = document.getElementById('form');
const name = document.getElementById('name');
const email = document.getElementById('email');
const message = document.querySelector('.message');
const users = document.getElementById('users');

//adding event listener to the form instead of button? on a form element can use submit
form.addEventListener('submit', onSubmit);

function onSubmit(e) {
    e.preventDefault(); //because this is a submit you have to prevent the default
    
    if(name.value === '' || email.value === '') {
        message.classList.add('error'); //this adds the CSS styling for class .error to this message div, only when the conditions are met, in this case empty fields. cool!
        setTimeout(() => message.remove(), 3000); //removes error div
        message.innerHTML = 'Please enter all fields';
    } else {
        const li = document.createElement('li');
        li.appendChild(document.createTextNode(`${name.value} : ${email.value}`));
        users.appendChild(li);

        //clear fields after successful entry
        name.value = '';
        email.value = '';
    }
}