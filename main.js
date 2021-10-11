const inputFields = document.querySelectorAll("[required]")

function validateField(fieldtoValidation) {
  let foundError = false
  for (error in fieldtoValidation.validity) {
    if (fieldtoValidation.validity[error] && !fieldtoValidation.validity.valid) {
      foundError = error
    }
  }
  return foundError
}

for (element of inputFields) {
  element.addEventListener('invalid', event =>{
    event.preventDefault()
    validateField()
  })
  
  element.addEventListener('blur', event =>{
    const field = event.target
    const spanError = field.parentNode.querySelector('span.error')
      if (validateField(field)) {
        console.log(validateField(field))
        spanError.style.display = 'block'
      } else {
        spanError.style.display = 'none'
      }
    }
  )
}


