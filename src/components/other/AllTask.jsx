import React from 'react'

const AllTask = () => {
    return (
        <div className='bg-[#2A2A2A] p-5 rounded mt-5 h-48 overflow-auto'>
            {/* Task Row */}
            <div className='bg-red-400 mb-2 py-2 px-4 flex justify-between rounded'>
                <h2 className='font-medium'>Gayatri</h2>
                <h3 className='font-medium'>Make a UI Design</h3>
                <h5>Status</h5>
            </div>

            <div className='bg-blue-400 mb-2 py-2 px-4 flex justify-between rounded'>
                <h2 className='font-medium'>Gayatri</h2>
                <h3 className='font-medium'>Make a UI Design</h3>
                <h5>Status</h5>
            </div>

            <div className='bg-green-400 mb-2 py-2 px-4 flex justify-between rounded'>
                <h2 className='font-medium'>Gayatri</h2>
                <h3 className='font-medium'>Make a UI Design</h3>
                <h5>Status</h5>
            </div>
            
            <div className='bg-yellow-400 mb-2 py-2 px-4 flex justify-between rounded'>
                <h2 className='font-medium'>Gayatri</h2>
                <h3 className='font-medium'>Make a UI Design</h3>
                <h5>Status</h5>
            </div>
        </div>
    )
}

export default AllTask