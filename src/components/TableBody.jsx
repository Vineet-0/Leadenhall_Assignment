import React from 'react'

const TableBody = () => {
  return (
    <div className='max-h-[270px] overflow-y-scroll hideScrollBar'>
        {
            [1,2,3,4,5,6,7,8,9,10].map((item, index) => (
                <div key={index} className='flex'>
                    <div className='min-w-[80px] px-4 py-2'>
                        {item}
                    </div>
                    <div className='min-w-[100px] flex-1 px-4 py-2'>
                        2021
                    </div>
                    <div className='min-w-[200px] flex-1 px-4 py-2'>
                        Broker Name
                    </div>
                    <div className='min-w-[150px] flex-1 px-4 py-2'>
                        GWP
                    </div>
                    <div className='min-w-[150px] flex-1 px-4 py-2'>
                        Planned GWP
                    </div>
                    <div className='min-w-[150px] flex-1 px-4 py-2'>
                        Market Type
                    </div>
                </div>
            ))
        }
    </div>
  )
}

export default TableBody