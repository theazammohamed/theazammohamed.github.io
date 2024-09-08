const scriptURL = 'https://script.google.com/macros/s/AKfycbwBFVBjtSIm9Ag7efWmz1IUjX37ynscbZ8O4pBEHwxrgofnORkfiwoeEhttr1v-4kc4xw/exec'

const form = document.forms['contact-form']

form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, {method: 'POST', body: new FormData(form)})
    .then(response => alert("Thank you! I will be shortly in touch with you!"))
    .then(() => {window.location.reload();})
    .catch(error => console.error('Error!', error.message))
})