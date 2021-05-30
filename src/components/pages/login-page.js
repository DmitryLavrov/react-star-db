import React from "react"
import {Redirect} from 'react-router-dom'

const LoginPage = ({isLoggedIn, onLogin}) => {
  if(isLoggedIn) return <Redirect to="/"/>

  return (
    <div className="jumbotron">
    <p>Log in to see the secret page</p>
    <button className="btn btn-lg btn-primary"
            onClick={onLogin}>
      Log in
    </button>
    </div>
  )
}

export default LoginPage