import {useState, useCallback, useEffect} from 'react'

const storageName = 'userData'

export const useAuth = () => {
    const [token, setToken] = useState(null)
    const [userId, setUserId] = useState(null)
    const [ready, setReady] = useState(false)
    const [userRole, setUserRole] = useState(null)

    const login = useCallback((jwtToken, id, roles) => {
        setToken(jwtToken)
        setUserId(id)
        setUserRole(roles)

        localStorage.setItem(storageName, JSON.stringify({
            userId: id,
            token: jwtToken,
            userRole: roles
        }))
    }, [])

    const logOut = useCallback(() => {
        setToken(null)
        setUserId(null)
        setUserRole(null)

        localStorage.removeItem(storageName)
    }, [])

    useEffect(() => {
        const data = JSON.parse(localStorage.getItem(storageName))

        if (data && data.token){
            login(data.token, data.userId, data.userRole)
        }
        setReady(true)
    }, [login])

    return { login, logOut, token, userId, userRole, ready}
}