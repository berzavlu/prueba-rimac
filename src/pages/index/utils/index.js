export const getFormatedPlaca = () => {
  const placa = document.getElementById('nroPlaca').value
  return placa.replace('-', '')
}

export const getFormatDate = () => {
  const date = new Date()
  const formated = date
    .toISOString()
    .split('T')[0]
    .split('-')
    .join('/')
  return formated
}

export const getHourDate = () => {
  const date = new Date()
  const formated = date.toLocaleTimeString()
  return formated
}

export const marcacionesParse = (value) => {
  if (!value && value === '') {
    return 'no disponible'
  }
  return value
}
