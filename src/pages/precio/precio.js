/* eslint-disable react/destructuring-assignment */
import React, { useEffect, useState } from 'react'
import { withRouter } from 'react-router'

const Precio = (props) => {
  console.log(props)
  const [loading, setLoading] = useState(false)
  useEffect(() => {
    if (!props.data.user.userAccess) {
      props.history.push('/')
    } else {
      setLoading(true)
    }
  }, [props])
  return (
    <div className='container'>
      {loading && (
        <div>
          <h1>data de usuario logeado</h1>
          <div>{JSON.stringify(props.data.user)}</div>
        </div>
      )}
    </div>
  )
}

export default withRouter(Precio)
