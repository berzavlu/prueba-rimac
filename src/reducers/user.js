import * as TYPE from '../actions/types/home'

const initialState = {
  userAccess: false,
  payload: {
    trace: {
      serviceId: '',
      consumerId: '',
      channelCode: '',
      traceId: '',
    },
    status: { success: null },
    payload: {
      ideCotizacion: '',
      usuEmision: {
        usuEmision: '',
        ideCanal: null,
        ideVendedor: null,
      },
      insplan: {
        idePlan: null,
        dscPlan: '',
        primaNeta: null,
        primaBruta: null,
      },
      vehiculo: {
        placa: '',
        codUso: '',
        descUso: '',
        codClase: '',
        descClase: '',
        codTipo: '',
        descTipo: '',
        codMarca: '',
        descMarca: '',
        codModelo: '',
        descModelo: '',
        numMotor: '',
        numSerie: '',
        codAnioFabricacion: '',
        descAnioFabricacion: '',
        numeroAsientos: '',
      },
      tercero: {
        tipoDocumento: '',
        numeroDocumento: '',
        nombres: '',
        apellidoPaterno: '',
        apellidoMaterno: '',
        fechaNacimiento: '',
        idGenero: '',
        email: '',
        celular: '',
        direccion: {
          idDepartamento: '',
          descDepartamento: '',
          idProvincia: '',
          descProvincia: '',
          idDistrito: '',
          descDistrito: '',
          direccionCompleta: '',
        },
      },
      listaUsos: [],
      indicadorColaborador: '',
      indicadorSetame: '',
      indicadorTrabPlanilla: '',
      fechaInicioVigencia: '',
    },
  },
  placa: '',
  placaFormat: '',
  email: '',
  indPoliticaProtecDatPers: '',
}

export default (state = initialState, action) => {
  switch (action.type) {
    case TYPE.PRICES_SUCCESS:
      return {
        ...state,
        userAccess: true,
        payload: action.payload.data.response,
        placa: action.payload.placa,
        tipoDocumento: action.payload.tipoDocumento,
        placaFormat: action.payload.placaFormat,
        email: action.payload.email,
        indPoliticaProtecDatPers: 'SI',
        indPoliticaEnvioComunic: action.payload.envioComunic,
        numeroDocumento: action.payload.numeroDocumento,
      }
    default:
      return state
  }
}
