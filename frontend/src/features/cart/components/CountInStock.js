import React from 'react'

function CountInStock({ countInStock }) {
  const available =
    countInStock === 0 ? 'Out of stock' : `${countInStock} available`

  return <span className="ml-2">{available}</span>
}

export default CountInStock
