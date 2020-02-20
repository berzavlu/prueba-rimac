/* eslint-disable no-useless-escape */
// remove error en campo email
const removeMessageOnEmailField = (messageErr = '*Error en campo') => {
  const elmErrorPlaca = document.getElementById('validateEmail')
  const elmFielPlaca = document.getElementById('email')

  elmErrorPlaca.classList.add('hidden')
  elmErrorPlaca.innerText = messageErr

  elmFielPlaca.classList.remove('validate-input-error')
}

// agregar error en campo email
export const addErrorMessageOnEmailField = (messageErr = '*Error en campo') => {
  const elmErrorEmail = document.getElementById('validateEmail')
  const elmFieldEmail = document.getElementById('email')

  elmErrorEmail.classList.remove('hidden')
  elmErrorEmail.innerText = messageErr

  elmFieldEmail.classList.add('validate-input-error')
}

export const onChangeEmail = () => {
  const regECel = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
  const charCel = document.getElementById('email')
  if (regECel.test(charCel.value)) {
    removeMessageOnEmailField()
  } else {
    addErrorMessageOnEmailField('Ingresar una dirección de correo válida')
  }
}
