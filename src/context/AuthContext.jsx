import React, { createContext, useState } from 'react'

// 1. THIS LINE IS LIKELY MISSING OR MISSPELLED
export const AuthDataContext = createContext()

const AuthContext = ({ children }) => {
    const [userData, setUserData] = useState(null)

    return (
        <div>
            {/* 2. ENSURE THIS MATCHES THE NAME ABOVE */}
            <AuthDataContext.Provider value={userData}>
                {children}
            </AuthDataContext.Provider>
        </div>
    )
}

export default AuthContext