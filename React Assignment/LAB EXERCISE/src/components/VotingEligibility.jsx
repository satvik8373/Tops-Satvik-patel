import React, { useState } from 'react'

function VotingEligibility() {
  const [age, setAge] = useState('')

  return (
    <div className="mt-2">
      <input className="form-control form-control-sm d-inline w-auto" type="number" value={age} onChange={(e) => setAge(e.target.value)} placeholder="Enter age" />
      <span className="ms-2">
        {age === '' ? 'Enter your age' : parseInt(age) >= 18 ? "Eligible to vote" : "Not eligible to vote"}
      </span>
    </div>
  )
}

export default VotingEligibility
