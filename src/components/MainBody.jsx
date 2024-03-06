import React from 'react'
import Table from './Table'

const MainBody = () => {
  return (
    <div className='flex-1 p-4'>
        <div className='flex-col'>
            <div className='flex items-center justify-end pb-4'>
                <select className='border-2 focus-0 px-2 py-1 rounded-md shadow-md'>
                    <option>Option 1</option>
                    <option>Option 2</option>
                    <option>Option 3</option>
                </select>
            </div>
            <div className='lg:flex lg:items-center lg:justify-between gap-4 pb-4'>
                <div className='w-full h-[120px] flex items-center justify-center shadow border-2 rounded-md mb-4 lg:mb-0'>Hello</div>
                <div className='w-full h-[120px] flex items-center justify-center shadow border-2 rounded-md mb-4 lg:mb-0'>Hello</div>
                <div className='w-full h-[120px] flex items-center justify-center shadow border-2 rounded-md mb-4 lg:mb-0'>Hello</div>
                <div className='w-full h-[120px] flex items-center justify-center shadow border-2 rounded-md mb-4 lg:mb-0'>Hello</div>
            </div>
            <Table />
            <div className='w-full flex items-center justify-between gap-4 py-4'>
                <div className='w-2/3 h-[300px] flex items-center justify-center shadow border-2 rounded-md'>Hello</div>
                <div className='w-1/3 h-[300px] flex items-center justify-center shadow border-2 rounded-md'>Hello</div>
            </div>
        </div>
    </div>
  )
}

export default MainBody