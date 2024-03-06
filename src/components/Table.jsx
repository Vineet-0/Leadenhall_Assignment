import React from 'react'
import TableHead from './TableHead'
import TableBody from './TableBody'

const Table = () => {
  return (
    <div className='flex-col shadow border-2 rounded-md'>
        <TableHead />
        <TableBody />
    </div>
  )
}

export default Table