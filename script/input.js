const fileBtn = document.getElementById("image-upload");
const button = document.querySelector("button[type='button']");

button.addEventListener("click", function () {
    fileBtn.click();
});

const form = document.querySelector('form');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    const formData = new FormData(form);
    // get search query
    const query = formData.get('search');
    // upload image to local folder "upload"
    const imageFile = formData.get('myImage');
    if (imageFile !== '') {
        const url = 'C:/Users/ratan/Desktop/Final-Project/upload';
        fetch(url, {
            method: 'POST',
            body: formData
        })
            .then(response => response.json())
            .then(result => console.log(result))
            .catch(error => console.log('error', error));
    }
    // perform search query 
    // ... code for searching using the query ...
});