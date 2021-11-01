import { memo } from 'react'
import { Spinner as BootstrapSpinner } from 'react-bootstrap'

export const Spinner = memo(({ centered }) => {
  const SpinnerIcon = () => (
    <BootstrapSpinner animation="grow" role="status">
      <span className="visually-hidden">{'Loading...'}</span>
    </BootstrapSpinner>
  )

  return centered ? (
    <div className="d-flex h-100 w-100 justify-content-center align-items-center">
      <SpinnerIcon />
    </div>
  ) : (
    <SpinnerIcon />
  )
})
