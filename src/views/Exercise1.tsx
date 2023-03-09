import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function Exercise1() {
  const navigate = useNavigate()

  return (
    <div>
      <h1>Exrcesize 1</h1>
      <button onClick={() => navigate(-1)}>ComeBack</button>
    </div>
  )
}
