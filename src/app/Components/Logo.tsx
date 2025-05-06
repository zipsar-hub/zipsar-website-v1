import React from 'react'
import Icon from './Icon'

const Logo = () => {
  return (
    <div className='flex items-center gap-3'>
      <Icon/>
      <h1 className='font-bold text-2xl gradient-text font-headerBold tracking-[2px]'>ZIPSAR</h1>
    </div>
  )
}

export default Logo
