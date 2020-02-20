module.exports = {
  development: {
    NODE_ENV: 'development',
    API_URL: 'https://localhost/api/public/v1/',
    PORT: 4000,
    ASSET_PATH: '/',
    identityPoolId: 'us-east-2:e5d1b8a3-21d5-4102-9028-1b10aae418e9',
    region: 'us-east-2',
    identityPoolRegion: 'us-east-2',
    userPoolId: 'us-east-2_tos8ZN6tw',
    userPoolWebClientId: '4lc3c3i4s2hrrekkdt5qpu4hie',
    authenticationFlowType: 'USER_SRP_AUTH',
    amplifyUsername: 'SOAT',
    amplifyPassword:
      'e217328e71921c6100bba8a286fca080391452d5dc6a50b7c6767a5d52aa9af8fc3264a650ad3a6bd58a10025136684f',
    API_MARCA_MODELO:
      'https://a5u1jab0m6.execute-api.us-east-2.amazonaws.com/TEST/automovil/marcamodelo/obtener',
    API_ACTUALIZAR_COTIZACION:
      'https://a5u1jab0m6.execute-api.us-east-2.amazonaws.com/TEST/cotizacionSoat/actualizar',
    API_CREAR_COTIZACION:
      'https://a5u1jab0m6.execute-api.us-east-2.amazonaws.com/TEST/cotizacionSoat2/crear',
    API_ATRIBUTO_OBTENER:
      'https://a5u1jab0m6.execute-api.us-east-2.amazonaws.com/TEST/atributo/valor/obtener',
    API_CREAR_TOKEN_SAFETYPAY:
      'https://a5u1jab0m6.execute-api.us-east-2.amazonaws.com/TEST/pagos/crearTokenSafetyPay',
    API_CREAR_COTIZACION_CULQI:
      'https://a5u1jab0m6.execute-api.us-east-2.amazonaws.com/TEST/cotizacion/culqi/post',
    API_UTILITARIOS_DEPARTAMENTO:
      'https://1z9e0ofixl.execute-api.us-east-2.amazonaws.com/TEST/utilitarios/departamento/buscar',
    API_UTILITARIOS_PROVINCIA:
      'https://1z9e0ofixl.execute-api.us-east-2.amazonaws.com/TEST/utilitarios/provincia/buscar',
    API_UTILITARIOS_DISTRITO:
      'https://1z9e0ofixl.execute-api.us-east-2.amazonaws.com/TEST/utilitarios/distrito/buscar',
    API_SUNARP_OBTENER:
      'https://a5u1jab0m6.execute-api.us-east-2.amazonaws.com/TEST/automovil/sunarp/obtener',
    API_BUSQUEDA_TERCERO:
      'https://t3hzf2hpoe.execute-api.us-east-2.amazonaws.com/test/soat/bsqTercero',
  },
  production: {
    NODE_ENV: 'production',
    API_URL: typeof window !== 'undefined' ? window.baseUrlApi : '',
    PORT: 8080,
    ASSET_PATH: '/',
    identityPoolId: 'us-east-2:e5d1b8a3-21d5-4102-9028-1b10aae418e9',
    region: 'us-east-2',
    identityPoolRegion: 'us-east-2',
    userPoolId: 'us-east-2_tos8ZN6tw',
    userPoolWebClientId: '4lc3c3i4s2hrrekkdt5qpu4hie',
    authenticationFlowType: 'USER_SRP_AUTH',
    amplifyUsername: 'SOAT',
    amplifyPassword:
      'e217328e71921c6100bba8a286fca080391452d5dc6a50b7c6767a5d52aa9af8fc3264a650ad3a6bd58a10025136684f',
    API_MARCA_MODELO:
      'https://a5u1jab0m6.execute-api.us-east-2.amazonaws.com/TEST/automovil/marcamodelo/obtener',
    API_ACTUALIZAR_COTIZACION:
      'https://a5u1jab0m6.execute-api.us-east-2.amazonaws.com/TEST/cotizacionSoat/actualizar',
    API_CREAR_COTIZACION:
      'https://a5u1jab0m6.execute-api.us-east-2.amazonaws.com/TEST/cotizacionSoat2/crear',
    API_ATRIBUTO_OBTENER:
      'https://a5u1jab0m6.execute-api.us-east-2.amazonaws.com/TEST/atributo/valor/obtener',
    API_CREAR_TOKEN_SAFETYPAY:
      'https://a5u1jab0m6.execute-api.us-east-2.amazonaws.com/TEST/pagos/crearTokenSafetyPay',
    API_CREAR_COTIZACION_CULQI:
      'https://a5u1jab0m6.execute-api.us-east-2.amazonaws.com/TEST/cotizacion/culqi/post',
    API_UTILITARIOS_DEPARTAMENTO:
      'https://1z9e0ofixl.execute-api.us-east-2.amazonaws.com/TEST/utilitarios/departamento/buscar',
    API_UTILITARIOS_PROVINCIA:
      'https://1z9e0ofixl.execute-api.us-east-2.amazonaws.com/TEST/utilitarios/provincia/buscar',
    API_UTILITARIOS_DISTRITO:
      'https://1z9e0ofixl.execute-api.us-east-2.amazonaws.com/TEST/utilitarios/distrito/buscar',
    API_SUNARP_OBTENER:
      'https://a5u1jab0m6.execute-api.us-east-2.amazonaws.com/TEST/automovil/sunarp/obtener',
    API_BUSQUEDA_TERCERO:
      'https://t3hzf2hpoe.execute-api.us-east-2.amazonaws.com/test/soat/bsqTercero',
  },
}
