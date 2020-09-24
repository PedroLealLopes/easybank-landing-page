import React from 'react'

export default function Button({text}) {
  return (
      <button className='btn-header'>{text ? text : 'Request Invite'}</button>
  )
}
