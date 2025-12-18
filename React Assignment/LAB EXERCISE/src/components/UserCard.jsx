import React from 'react'

function UserCard({ name, age, location }) {
  return (
    <div>
      <h3>{name}</h3>
      <p>Age: {age}</p>
      <p>Location: {location}</p>
    </div>
  )
}

export default UserCard
