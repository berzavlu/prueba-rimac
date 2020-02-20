/* eslint-disable no-alert */
/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
/* eslint-disable object-curly-newline */
import React, { useState, useEffect } from 'react'
import Cleave from 'cleave.js/react'
import { withRouter } from 'react-router'
import Amplify, { Auth } from 'aws-amplify'
import {
  onChangePlaca,
  onBlurPlaca,
  addErrorMessageOnPlateField,
} from './events/placa'
import { getFormatedPlaca, getFormatDate, getHourDate } from './utils'
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
  const [loading, setLoading] = useState(false)

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

  const doRequest = () => {
    const obj = {
      request: {
        trace: {
          serviceId: 'API-COTIZACION-SOAT',
          consumerId: 'WEBPUB',
          channelCode: 'WEB',
          traceId: '125751027100110360156000000000000',
        },
        payload: {
          ideProd: 3844,
          usuEmision: 'VSOATV',
          ideCanal: 449658888,
          ideVendedor: 3642513629,
          idpMoneda: 'SOL',
          vehiculo: {
            placa: getFormatedPlaca(),
            placaFormat: document.getElementById('nroPlaca').value,
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
            tipoDocumento: '2',
            numeroDocumento: '77232373',
            nombres: '',
            apellidoPaterno: '',
            apellidoMaterno: '',
            fechaNacimiento: '',
            idGenero: '',
            email,
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
          indPoliticaEnvioComunic: checkCC ? 'SI' : 'NO',
          indPoliticaProtecDatPers: checkTYC ? 'SI' : 'NO',
        },
      },
    }
    setLoading(true)
    props
      .setPrices(obj)
      .then((res) => {
        console.log(res)
        props.history.push('/precio')
      })
      .catch((err) => {
        setLoading(false)
        window.alert('ocurrió un error')
        console.log(err)
      })
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
      doRequest()
    }
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
                  *Error al digital número
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
                <button
                  type='submit'
                  className={`${loading ? 'btn--loading' : ''}`}
                >
                  Comencemos
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}

export default withRouter(Home)
