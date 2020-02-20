import * as TYPE from './types/home'
import API from '../api'
import ENV from '../../env'

const { API_CREAR_COTIZACION } = ENV[process.env.NODE_ENV]

export const setPrices = (params) => {
  return (dispatch) =>
    new Promise((resolve, reject) => {
      const request = API.requestCognito(API_CREAR_COTIZACION, params)
      return request
        .then((response) => {
          resolve(response)
          const user = {
            data: response,
            tipoDocumento: params.request.payload.tercero.tipoDocumento,
            placa: params.request.payload.vehiculo.placa,
            placaFormat: params.request.payload.vehiculo.placaFormat,
            email: params.request.payload.tercero.email,
            envioComunic: params.request.payload.indPoliticaEnvioComunic,
            numeroDocumento: params.request.payload.tercero.numeroDocumento,
          }
          dispatch({ type: TYPE.PRICES_SUCCESS, payload: user })
        })
        .catch((error) => {
          reject(error)
          dispatch({ type: TYPE.PRICES_ERROR })
        })
    })
}

export const sample = () => true
