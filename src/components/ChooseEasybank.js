import React from 'react'
import Container from './Container'
import IconOnlineSVG from './IconOnlineSVG'
import IconBudgetingSVG from './IconBudgetingSVG'
import IconOnboardingSVG from './IconOnboardingSVG'
import IconApiSVG from './IconApiSVG'

const ChooseEasybank = () => {
  return (
    <Container className='choose-easybank-container'>
      <div className='choose-easybank-header'>
        <h1>Why choose Easybank</h1>
        <p>
          We leverage Open Banking to turn your bank account into your financial
          hub. <br />
          Control your finances like never before.
        </p>
      </div>
      <div className='choose-easybank-list'>
        <div className='choose-easybank-list-item'>
          <IconOnlineSVG />
          <h3>Online Banking</h3>
          <p>
            Our modern web and mobile applications allow you to keep track of
            your finances wherever you are in the world
          </p>
        </div>
        <div className='choose-easybank-list-item'>
          <IconBudgetingSVG />
          <h3>Simple Budgeting</h3>
          <p>
            See exactly where your money goes each month. Receive notifications
            when you're close to hitting your limits
          </p>
        </div>
        <div className='choose-easybank-list-item'>
          <IconOnboardingSVG />
          <h3>Fast Onboarding</h3>
          <p>
            We don't do branches. Open your account in minutes online and start
            taking control of your finances right away.
          </p>
        </div>
        <div className='choose-easybank-list-item'>
          <IconApiSVG />
          <h3>Open API</h3>
          <p>
            Manage your savings, investments, pension, and much more from one
            account. Tracking your money has never been easier
          </p>
        </div>
      </div>
    </Container>
  )
}

export default ChooseEasybank
