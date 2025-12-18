import React, { useState } from 'react'

function ControlledForm() {
  const [formData, setFormData] = useState({ name: '', email: '', password: '' })
  const [errors, setErrors] = useState({})
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const newErrors = {}
    if (!formData.name) newErrors.name = 'Name required'
    if (!formData.email.includes('@')) newErrors.email = 'Invalid email'
    if (formData.password.length < 6) newErrors.password = 'Min 6 chars'
    setErrors(newErrors)
    if (Object.keys(newErrors).length === 0) setSubmitted(true)
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-2">
        <input className="form-control form-control-sm" name="name" value={formData.name} onChange={handleChange} placeholder="Name" />
        {errors.name && <small className="text-danger">{errors.name}</small>}
      </div>
      <div className="mb-2">
        <input className="form-control form-control-sm" name="email" value={formData.email} onChange={handleChange} placeholder="Email" />
        {errors.email && <small className="text-danger">{errors.email}</small>}
      </div>
      <div className="mb-2">
        <input className="form-control form-control-sm" name="password" type="password" value={formData.password} onChange={handleChange} placeholder="Password" />
        {errors.password && <small className="text-danger">{errors.password}</small>}
      </div>
      <button className="btn btn-sm btn-primary" type="submit">Submit</button>
      {submitted && <p className="mt-2 text-success">Name: {formData.name}, Email: {formData.email}</p>}
    </form>
  )
}

export default ControlledForm
