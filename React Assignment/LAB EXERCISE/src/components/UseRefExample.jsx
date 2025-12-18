import React, { useState, useRef } from 'react'

function UseRefExample() {
  const [stateCount, setStateCount] = useState(0)
  const refCount = useRef(0)

  return (
    <div className="mb-2">
      <span className="me-2">State: {stateCount}</span>
      <button className="btn btn-sm btn-primary me-1" onClick={() => setStateCount(stateCount + 1)}>Update State</button>
      <button className="btn btn-sm btn-outline-primary" onClick={() => { refCount.current++; alert('Ref: ' + refCount.current) }}>Update Ref</button>
    </div>
  )
}

export default UseRefExample
