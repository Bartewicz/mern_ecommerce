import React from 'react'

export function Price({ price }) {
  return <h3 className="d-inline align-baseline">{`$${price}`}</h3>
}
