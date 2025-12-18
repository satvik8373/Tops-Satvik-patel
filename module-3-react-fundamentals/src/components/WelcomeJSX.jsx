import React from 'react'

function WelcomeJSX() {
  const description = "JSX lets you write HTML in JavaScript"
  const year = 2024

  return (
    <div>
      <h1>Welcome to JSX</h1>
      <p>{description}</p>
      <p>Year: {year}</p>
    </div>
  )
}

export default WelcomeJSX
