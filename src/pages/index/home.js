import React, { useState, useEffect } from 'react'
import Cleave from 'cleave.js/react'
import Amplify, { Auth } from 'aws-amplify'
import {
  onChangePlaca,
  onBlurPlaca,
  addErrorMessageOnPlateField,
} from './events/placa'
import { onChangeEmail, addErrorMessageOnEmailField } from './events/email'
import style from './style.module.scss'

import ENV from '../../../env'

const {
  identityPoolId,
  region,
  identityPoolRegion,
  userPoolId,
  userPoolWebClientId,
  authenticationFlowType,
  amplifyUsername,
  amplifyPassword,
} = ENV[process.env.NODE_ENV]

Amplify.configure({
  Auth: {
    identityPoolId,
    region,
    identityPoolRegion,
    userPoolId,
    userPoolWebClientId,
    authenticationFlowType,
  },
})

const getCredentials = async () => {
  await Auth.signIn(amplifyUsername, amplifyPassword)
  Auth.currentCredentials()
    .then((response) => {
      sessionStorage.setItem(
        'AccessKeyId',
        response.data.Credentials.AccessKeyId
      )
      sessionStorage.setItem('SecretKey', response.data.Credentials.SecretKey)
      sessionStorage.setItem(
        'SessionToken',
        response.data.Credentials.SessionToken
      )
    })
    .catch((e) => {
      console.log(e)
    })
}

const Home = (props) => {
  const [placa, setPlaca] = useState('')
  const [email, setEmail] = useState('')
  const [checkCC, setCheckCC] = useState(true)
  const [checkTYC, setCheckTYC] = useState(true)
  const [showAlertPoliticas, setShowAlertPoliticas] = useState(false)

  useEffect(() => {
    getCredentials()
  }, [])

  const changePlaca = ({ target: { value } }) => {
    setPlaca(value)
  }

  const changeEmail = ({ target: { value } }) => {
    setEmail(value.replace(/\s/g, ''))
  }

  const onChangeCheckboxCC = () => {
    setCheckCC(!checkCC)
    setShowAlertPoliticas(checkCC !== false)
  }

  const onChangeCheckboxTYC = () => {
    setCheckTYC(!checkTYC)
    setShowAlertPoliticas(checkTYC !== false)
  }

  const sendForm = (e) => {
    e.preventDefault()
    let error = false

    const elmPlaca = document.getElementById('nroPlaca')

    const elmEmail = document.getElementById('email')

    if (placa === '') {
      addErrorMessageOnPlateField('Campo requerido')
      error = true
    }
    if (email === '') {
      addErrorMessageOnEmailField('Campo requerido')
      error = true
    }

    if (elmPlaca.classList.contains('validate-input-error')) error = true
    if (elmEmail.classList.contains('validate-input-error')) error = true

    if (checkTYC === false || checkCC === false) {
      setShowAlertPoliticas(true)
      error = true
    }
    if (!error) {
      this.setState({ loading: true });
      const hourDate = getHourDate();
      const formatDate = getFormatDate();
      const formatedPlaca = getFormatedPlaca();
      const nroDocumento = document.getElementById("field1-step0").value;
      let docVal = "";
      if (typeDoc === "DNI") {
        docVal = "2";
      } else if (typeDoc === "CE") {
        docVal = "4";
      } else {
        docVal = "1";
      }
      const nroTipoDoc = docVal;

      const objPlaca = {
        placa: formatedPlaca,
        ip: "192.128.12.12",
        usuario: "VSOATV",
        fechaTransferencia: formatDate,
        horaTransferencia: hourDate,
        transaccionCanal: "21351353"
      };

      const objDni = {
        tipoDocumento: nroTipoDoc,
        numDocumento: nroDocumento,
        ip: "127.0.0.1",
        usuario: "VSOATV",
        transaccionCanal: "0",
        fechaTransferencia: formatDate,
        horaTransferencia: hourDate
      };

      const objPrices = {
        tercero: {
          tipoPersona: "N",
          numDocumento: nroDocumento,
          tipoDocumento: nroTipoDoc
        },
        producto: {
          codigoProducto: "2003",
          dscProducto: "SOAT"
        },
        bienAsegurado: {
          dscBienAsegurado: "",
          autocompletarSunarp: "0",
          datosParticulares: [
            {
              codRamo: "SOAT",
              nombre: "PLACA_DE_RODAJE",
              valor: "", // AZC423
              numOrden: 1
            },
            {
              codRamo: "SOAT",
              nombre: "CLASES_DE_VEHICULOS",
              valor: "", // CAMIONETA
              numOrden: 2
            },
            {
              codRamo: "SOAT",
              nombre: "TIPOS_DE_VEHICULOS",
              valor: "", // RURAL
              numOrden: 3
            },
            {
              codRamo: "SOAT",
              nombre: "MARCAS_DE_VEHICULOS",
              valor: "", // MITSUBISHI
              numOrden: 4
            },
            {
              codRamo: "SOAT",
              nombre: "MODELOS_DE_VEHICULOS",
              valor: "", // ASX
              numOrden: 5
            },
            {
              codRamo: "SOAT",
              nombre: "ANOS_DE_FABRICACION",
              valor: "", // 2017
              numOrden: 6
            },
            {
              codRamo: "SOAT",
              nombre: "NUMERO_DE_MOTOR",
              valor: "", // 4B11TQ9060
              numOrden: 7
            },
            {
              codRamo: "SOAT",
              nombre: "NUMERO_DE_SERIE",
              valor: "", // JMYXNGA2WJZ000206
              numOrden: 8
            },
            {
              codRamo: "SOAT",
              nombre: "TELEFONO_CONTACTO",
              valor: "", // 999999999
              numOrden: 9
            },
            {
              codRamo: "SOAT",
              nombre: "DISTRITO",
              valor: "", // LIMA
              numOrden: 10
            },
            {
              codRamo: "SOAT",
              nombre: "PROVINCIA",
              valor: "", // LIMA
              numOrden: 11
            },
            {
              codRamo: "SOAT",
              nombre: "DEPARTAMENTO",
              valor: "", // LIMA
              numOrden: 12
            },
            {
              codRamo: "SOAT",
              nombre: "IND_SETAME",
              valor: "", // NO
              numOrden: 13
            },
            {
              codRamo: "SOAT",
              nombre: "IND_TRABAJADOR_PLANILLA",
              valor: "", // NO
              numOrden: 14
            },
            {
              codRamo: "SOAT",
              nombre: "IND_COLABORADOR",
              valor: "", // NO
              numOrden: 15
            },
            {
              codRamo: "SOAT",
              nombre: "USO_DE_VEHICULO",
              valor: "", // PARTICULAR
              numOrden: 16
            },
            {
              codRamo: "SOAT",
              nombre: "TIPO_DE_PERSONA",
              valor: "", // NATURAL
              numOrden: 17
            },
            {
              codRamo: "SOAT",
              nombre: "INDCONTACTAR",
              valor: checkCC ? "SI" : "NO",
              numOrden: 18
            },
            {
              codRamo: "SOAT",
              nombre: "CONSENTIDATOSPER",
              valor: checkTYC ? "SI" : "NO",
              numOrden: 19
            }
          ]
        },
        canal: {
          ideTipCanal: 24,
          codigoCanal: "449658888",
          dscCanal: "SEGUROS DIRECTOS"
        },
        ip: "127.0.0.1",
        usuario: "VSOATV",
        transaccionCanal: "779096982732kuidfghb749f2937be41f6fe12",
        fechaTransferencia: formatDate,
        horaTransferencia: hourDate
      };
      const ojbNuevo = {
        request: {
          trace: {
            serviceId: "API-COTIZACION-SOAT",
            consumerId: "WEBPUB",
            channelCode: "WEB",
            traceId: "125751027100110360156000000000000"
          },
          payload: {
            ideProd: 3844,
            usuEmision: "VSOATV",
            ideCanal: 449658888,
            ideVendedor: 3642513629,
            idpMoneda: "SOL",
            vehiculo: {
              placa: formatedPlaca,
              placaFormat: document.getElementById("field2-step0").value,
              codUso: "",
              descUso: "",
              codClase: "",
              descClase: "",
              codTipo: "",
              descTipo: "",
              codMarca: "",
              descMarca: "",
              codModelo: "",
              descModelo: "",
              numMotor: "",
              numSerie: "",
              codAnioFabricacion: "",
              descAnioFabricacion: "",
              numeroAsientos: ""
            },
            tercero: {
              tipoDocumento: nroTipoDoc,
              numeroDocumento: nroDocumento,
              nombres: "",
              apellidoPaterno: "",
              apellidoMaterno: "",
              fechaNacimiento: "",
              idGenero: "",
              email: elmEmail.value,
              celular: "",
              direccion: {
                idDepartamento: "",
                descDepartamento: "",
                idProvincia: "",
                descProvincia: "",
                idDistrito: "",
                descDistrito: "",
                direccionCompleta: ""
              }
            },
            indPoliticaEnvioComunic: checkCC ? "SI" : "NO",
            indPoliticaProtecDatPers: checkTYC ? "SI" : "NO"
          }
        }
      };
    }
    doRequest(ojbNuevo, objPlaca, objDni, objPrices)
  }

  const doRequest = (obj) => {
    props
      .setPrices(obj).then(res => {
        console.log(res)
      }
      .catch((err) => {
        console.log(err)
      })
  }

  return (
    <React.Fragment>
      <div className='bgApp' />
      <div className={style.wrapper}>
        <div className={style.wrapper__left}>
          <div className={style.wrapper__left__title}>
            SOAT
            <br />
            <b>Express</b>
          </div>
          <div className={style.wrapper__left__subtitle}>
            Obtenlo y <b>disfruta de los beneficios</b>
          </div>
          <div className={style.wrapper__left__disclaimer}>
            © 2018 RIMAC Seguros y Reaseguros.
          </div>
          <div className={style.wrapper__left__human} />
        </div>
        <div className={style.wrapper__right}>
          <div className={style.wrapper__right__title}>
            Obtén tu SOAT
            <div className={style.wrapper__right__title__red}>
              fácil y rápido
            </div>
            <form
              noValidate
              onSubmit={sendForm}
              className={style.wrapper__right__form}
            >
              <div className='form-group'>
                <Cleave
                  required
                  placeholder=''
                  options={{
                    delimiter: '-',
                    blocks: [3, 3],
                    uppercase: true,
                  }}
                  id='nroPlaca'
                  maxLength='7'
                  onKeyPress={(e) => onChangePlaca(e)}
                  onBlur={onBlurPlaca}
                  title=''
                  autoComplete='off'
                  onChange={changePlaca}
                  value={placa}
                />
                <div className='input__placeholder'>Placa del auto</div>
                <div id='validatePlaca' className='error__input hidden'>
                  *Error al digitar placa
                </div>
              </div>
              <div className='form-group'>
                <input
                  type='text'
                  id='email'
                  onBlur={onChangeEmail}
                  required
                  autoComplete='off'
                  value={email}
                  onChange={changeEmail}
                />
                <div className='input__placeholder'>Correo electrónico</div>
                <div id='validateEmail' className='error__input hidden'>
                  > *Error al digital número
                </div>
              </div>
              <div className='wrapCheckbox'>
                <div className='md-checkbox'>
                  <input
                    name='politica-step0'
                    id='politica-step0'
                    type='checkbox'
                    autoComplete='off'
                    onClick={onChangeCheckboxCC}
                    onChange={() => null}
                    checked={checkCC}
                  />
                  <label htmlFor='politica-step0' style={{ height: '40px' }} />
                  <div className={style.wrapper__right__tos}>
                    Acepto la Política de Envío de Comunicaciones Comerciales.
                  </div>
                </div>
              </div>
              <div className='wrapCheckbox'>
                <div className='md-checkbox'>
                  <input
                    name='placa-step0'
                    id='placa-step0'
                    type='checkbox'
                    autoComplete='off'
                    onClick={onChangeCheckboxTYC}
                    onChange={() => null}
                    checked={checkTYC}
                  />
                  <label htmlFor='placa-step0' />
                  <div className={style.wrapper__right__tos}>
                    Acepto la Política de Protección de Datos Personales y los
                    Términos y Condiciones
                  </div>
                </div>
              </div>
              {showAlertPoliticas && (
                <div className={style.wrapper__right__alertTos}>
                  Debe aceptar la política de protección de datos personales y
                  los términos y condiciones.
                </div>
              )}
              <div className={style.wrapper__right__submit}>
                <button type='submit'>Comencemos</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}

export default Home
