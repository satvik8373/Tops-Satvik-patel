import React, { useState } from 'react'

function CounterHooks() {
  const [count, setCount] = useState(0)

  return (
    <div className="mb-2">
      <span className="me-2">Count: {count}</span>
      <button className="btn btn-sm btn-secondary me-1" onClick={() => setCount(count - 1)}>-</button>
      <button className="btn btn-sm btn-secondary" onClick={() => setCount(count + 1)}>+</button>
    </div>
  )
}

export default CounterHooks
