import React from 'react'

const TableHead = () => {
  return (
    <div className='flex'>
        <div className='min-w-[80px] px-4 py-2 bg-red-200'>
            S.No.
        </div>
        <div className='min-w-[100px] flex-1 px-4 py-2 bg-green-200'>
            Year
        </div>
        <div className='min-w-[200px] flex-1 px-4 py-2 bg-red-200'>
            Broker Name
        </div>
        <div className='min-w-[150px] flex-1 px-4 py-2 bg-green-200'>
            GWP
        </div>
        <div className='min-w-[150px] flex-1 px-4 py-2 bg-red-200'>
            Planned GWP
        </div>
        <div className='min-w-[150px] flex-1 px-4 py-2 bg-green-200'>
            Market Type
        </div>
    </div>
  )
}

export default TableHead