import React, { useState } from 'react'

function ClickButton() {
  const [clicked, setClicked] = useState(false)

  return (
    <button className="btn btn-sm btn-info" onClick={() => setClicked(true)}>
      {clicked ? "Clicked!" : "Not Clicked"}
    </button>
  )
}

export default ClickButton
