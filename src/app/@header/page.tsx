'use client'

import { CustomToggleTheme } from '@/components'
import React from 'react'

const HeaderPage = () => {

  return (
    <div className='z-[10] w-full p-2 bg-blue-500 fixed top-0'>
      <h1 className="text-3xl font-bold text-center">
        ToDo List
      </h1>
      <div className='flex justify-end items-center gap-2'>
        <CustomToggleTheme />
      </div>
    </div>
  )
}

export default HeaderPage