import React, { useState } from 'react'

function LoginLogout() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  return (
    <button className={`btn btn-sm ${isLoggedIn ? 'btn-danger' : 'btn-success'}`} onClick={() => setIsLoggedIn(!isLoggedIn)}>
      {isLoggedIn ? "Logout" : "Login"}
    </button>
  )
}

export default LoginLogout
