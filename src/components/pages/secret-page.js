import React from "react"

const SecretPage = ({isLoggedIn}) => {

  if (isLoggedIn) {
    return (
      <div className="jumbotron text-center">
        <h2>The page full of secrets</h2>
      </div>
    )
  }
  return <p>You have not access to this page</p>
}

export default SecretPage