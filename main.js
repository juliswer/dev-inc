const privacy = document.getElementById("privacy_button");
const terms = document.getElementById("privacy_terms");
const support = document.getElementById("privacy_support");
const contactUs = document.getElementById("contactUs");

privacy.addEventListener('click', () => {
    Swal.fire(
        'The Internet?',
        'That thing is still around?',
        'info'
      )
})

terms.addEventListener('click', () => {
    Swal.fire(
        'The Internet?',
        'That thing is still around?',
        'info'
      )
})

support.addEventListener('click', () => {
    Swal.fire(
        'The Internet?',
        'That thing is still around?',
        'info'
      )
})

contactUs.addEventListener('click', () => {
    const Toast = Swal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.addEventListener('mouseenter', Swal.stopTimer)
          toast.addEventListener('mouseleave', Swal.resumeTimer)
        }
      })
      
      Toast.fire({
        icon: 'success',
        title: 'Petición enviada correctamente'
      })
})