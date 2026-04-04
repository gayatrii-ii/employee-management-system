import React from 'react'

const TaskList = () => {
  return (
    <div 
      id='tasklist' 
      className='h-[55%] w-full overflow-x-auto py-5 mt-10 flex flex-nowrap gap-5 items-center justify-start px-5 
                 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]'
    >
        {/* Task Card 1 */}
        <div className='flex-shrink-0 h-[100%] w-[300px] p-5 bg-red-400 rounded-xl'>
            <div className='flex justify-between items-center'>
                <h3 className='bg-red-500 text-sm px-3 py-1 rounded'>High</h3>
                <h4 className='text-sm'>30 March 2026</h4>
            </div>
            <h2 className='mt-5 text-2xl font-semibold'>Make an assignment</h2>
            <p className='text-sm mt-1'>Complete all your assignments on time, Start a timer today itself!</p>
            {/* Task Content */}
        </div>

        {/* Task Card 2 */}
        <div className='flex-shrink-0 h-full w-[300px] p-5 bg-green-400 rounded-xl'>
            <div className='flex justify-between items-center'>
                <h3 className='bg-red-500 text-sm px-3 py-1 rounded'>High</h3>
                <h4 className='text-sm'>30 March 2026</h4>
            </div>
            <h2 className='mt-5 text-2xl font-semibold'>Make an assignment</h2>
            <p className='text-sm mt-1'>Complete all your assignments on time, Start a timer today itself!</p>
            {/* Task Content */}
        </div>
        {/* Task Card 3 */}
       <div className='flex-shrink-0 h-full w-[300px] p-5 bg-blue-400 rounded-xl'>
            <div className='flex justify-between items-center'>
                <h3 className='bg-red-500 text-sm px-3 py-1 rounded'>High</h3>
                <h4 className='text-sm'>30 March 2026</h4>
            </div>
            <h2 className='mt-5 text-2xl font-semibold'>Make an assignment</h2>
            <p className='text-sm mt-1'>Complete all your assignments on time, Start a timer today itself!</p>
            {/* Task Content */}
        </div>

        {/* Task Card 4 */}
        <div className='flex-shrink-0 h-full w-[300px] p-5 bg-yellow-400 rounded-xl'>
            <div className='flex justify-between items-center'>
                <h3 className='bg-red-500 text-sm px-3 py-1 rounded'>High</h3>
                <h4 className='text-sm'>30 March 2026</h4>
            </div>
            <h2 className='mt-5 text-2xl font-semibold'>Make an assignment</h2>
            <p className='text-sm mt-1'>Complete all your assignments on time, Start a timer today itself!</p>
            {/* Task Content */}
        </div>
        
        {/* Task Card 5 */}
       <div className='flex-shrink-0 h-full w-[300px] p-5 bg-red-400 rounded-xl'>
            <div className='flex justify-between items-center'>
                <h3 className='bg-red-500 text-sm px-3 py-1 rounded'>High</h3>
                <h4 className='text-sm'>30 March 2026</h4>
            </div>
            <h2 className='mt-5 text-2xl font-semibold'>Make an assignment</h2>
            <p className='text-sm mt-1'>Complete all your assignments on time, Start a timer today itself!</p>
            {/* Task Content */}
        </div>
    </div>
  )
}

export default TaskList