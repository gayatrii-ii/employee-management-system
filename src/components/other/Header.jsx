import React from 'react'

const Header = () => {
  return (
   <div className='flex items-end justify-between'>
      <h1 className='text-2xl font-medium text-white'>
        Helloo<br />
        <span className='text-3xl font-semibold'>Gayatrii 🙌</span>
      </h1>
      {/* Changed rounded-small to rounded-sm */}
      <button className='bg-red-600 text-lg font-medium text-white px-5 py-2 rounded-sm'>
        Log Out
      </button>
    </div>
  )
}

export default Header