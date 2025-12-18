import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { increment, decrement } from '../store/counterSlice'

function ReduxCounter() {
  const count = useSelector((state) => state.counter.value)
  const dispatch = useDispatch()

  return (
    <div className="mb-2">
      <span className="me-2">Redux Count: {count}</span>
      <button className="btn btn-sm btn-warning me-1" onClick={() => dispatch(decrement())}>-</button>
      <button className="btn btn-sm btn-warning" onClick={() => dispatch(increment())}>+</button>
    </div>
  )
}

export default ReduxCounter
