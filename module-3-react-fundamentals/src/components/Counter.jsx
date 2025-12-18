import React, { useState } from 'react'

function Counter() {
  const [count, setCount] = useState(0)

  return (
    <div className="mt-2">
      <span className="me-2">Count: {count}</span>
      <button className="btn btn-sm btn-success" onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  )
}

export default Counter
