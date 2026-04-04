import React, { createContext, useState } from 'react'

// 1. Create the actual Context object
export const TaskDataContext = createContext()

const TaskContext = ({ children }) => {
    
    // Example data to pass down
    const [userData, setUserData] = useState(null)

    return (
        <div>
            {/* 2. Wrap children in the Provider and pass the value */}
            <TaskDataContext.Provider value={[userData, setUserData]}>
                {children}
            </TaskDataContext.Provider>
        </div>
    )
}

export default TaskContext