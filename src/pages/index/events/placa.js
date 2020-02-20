// agregar error en campo placa
export const addErrorMessageOnPlateField = (messageErr = '*Error en campo') => {
  const elmErrorPlaca = document.getElementById('validatePlaca')
  const elmFielPlaca = document.getElementById('nroPlaca')

  elmErrorPlaca.classList.remove('hidden')
  elmErrorPlaca.innerText = messageErr

  elmFielPlaca.classList.add('validate-input-error')
}

// remove error en campo placa
const removeErrorMessageOnPlateField = (messageErr = '*Error en campo') => {
  const elmErrorPlaca = document.getElementById('validatePlaca')
  const elmFielPlaca = document.getElementById('nroPlaca')

  elmErrorPlaca.classList.add('hidden')
  elmErrorPlaca.innerText = messageErr

  elmFielPlaca.classList.remove('validate-input-error')
}

const checkPlate = (plateStr) => {
  if (plateStr.length === 7) {
    const last3 = plateStr.substr(4, 3)
    const regEPlaca = /^[0-9]+$/
    if (last3.match(regEPlaca)) {
      removeErrorMessageOnPlateField()
    } else {
      addErrorMessageOnPlateField('Últimos 3 dígitos deben ser números')
    }
  }
}

export const onBlurPlaca = () => {
  const charPlaca = document.getElementById('nroPlaca')
  if (charPlaca.value.length === 0) {
    addErrorMessageOnPlateField('Ingrese un número de placa')
  } else if (charPlaca.value.length < 7) {
    addErrorMessageOnPlateField('Verificar número de placa')
  } else {
    const last3 = charPlaca.value.substr(4, 3)
    const regEPlaca = /^[0-9]+$/
    if (last3.match(regEPlaca)) {
      removeErrorMessageOnPlateField()
    } else {
      addErrorMessageOnPlateField('Últimos 3 dígitos deben ser números')
    }
  }
}

export const onChangePlaca = (e) => {
  const charPlaca = document.getElementById('nroPlaca')
  const regex = new RegExp('^[a-zA-Z0-9)(-]+$')
  const code = !e.charCode ? e.which : e.charCode
  const str = String.fromCharCode(code)

  if (!(regex.test(str) || e.which === 8 || e.which === 9)) {
    addErrorMessageOnPlateField('Debe ingresar una placa valida')
    return false
  }
  if (charPlaca.value.length === 0) {
    removeErrorMessageOnPlateField()
  } else if (e.which !== 8) {
    if (charPlaca.value.length === 3) {
      charPlaca.value += '-'
    } else if (charPlaca.value.length === 6) {
      const strg = String.fromCharCode(!e.charCode ? e.which : e.charCode)
      checkPlate(charPlaca.value + strg)
    }
  } else {
    console.log('show?')
    removeErrorMessageOnPlateField()
  }
  return true
}
