import React, { useState } from 'react'

function DynamicInput() {
  const [value, setValue] = useState('')

  return (
    <div className="mt-2">
      <input className="form-control form-control-sm d-inline w-auto" type="text" value={value} onChange={(e) => setValue(e.target.value)} placeholder="Type here..." />
      <span className="ms-2">You typed: {value}</span>
    </div>
  )
}

export default DynamicInput
