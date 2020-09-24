import React from 'react'
import Button from './Button'
import Container from './Container'
import BackgroundSVG from './BackgroundSVG'

export default function Nextgen() {
  return (
    <div style={{ marginTop: '81px' }}>
      <Container>
        <div className='next-gen-container'>
          <h1>
            Next generation <br /> digital banking
          </h1>
          <p>
            Take your financial life online. Your Easybank account <br /> will be
            a one-stop shop for spending, saving, <br /> budgeting, investing, and
            much more.
          </p>
          <Button />
        </div>
        <BackgroundSVG isDesktop={true} style={{ position: 'absolute', left: '50%' }} />
      </Container>
    </div>
  )
}
