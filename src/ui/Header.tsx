'use client'

import { TWButton } from '@/components'
import CreateTodoModal from '@/components/shared/CreateTodoModal'
import React, { useState } from 'react'

export const Header = () => {

  const [openCreateModal, setOpenCreateModal] = useState(false);

  return (
    <div className='flex justify-between'>

      <TWButton onClick={()=>setOpenCreateModal(true)} variant='primary'>Create</TWButton>

      <CreateTodoModal
        open={openCreateModal}
        onClose={() => setOpenCreateModal(false)}/>

    </div>
  )
}
