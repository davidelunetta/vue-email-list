function fetchEmails() {
    fetch('https://flynn.boolean.careers/exercises/api/random/mail')
        .then(response => response.json())
        .then(data => {
            displayEmail(data.response);
        })
        .catch(error => console.error('Si è verificato un errore:', error));
}
function displayEmail(email) {
    const emailList = document.getElementById('emailList');
    const listItem = document.createElement('li');
    listItem.textContent = email;
    emailList.appendChild(listItem);
}

// Genera 10 indirizzi email
for (let i = 0; i < 10; i++) {
    fetchEmails();
}