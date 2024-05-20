const scriptURL = 'https://script.google.com/macros/s/AKfycbzphbH2SUlm4aSnnA2Vr8-Nt473ZJ8CtlYyQFUWSwNSLV7jIi_ny8vIi1JOoSpSITcLFA/exec'

const form = document.forms['contact-form']

form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, {method: 'POST', body: new FormData(form)})
    .then(response => alert("Thank you! I will be shortly in touch with you!"))
    .then(() => {window.location.reload();})
    .catch(error => console.error('Error!', error.message))
})