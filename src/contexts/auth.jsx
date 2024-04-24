import { createContext, useEffect, useState } from "react"
import { FirebaseLogin } from "../Api/firebaseLogin"
import { useNavigate } from "react-router-dom"

export const AuthContext = createContext()

// eslint-disable-next-line react/prop-types
export function AuthProvider({ children }) {
	const navigate = useNavigate()
	const [user, setUser] = useState(null)
	const [loading, setLoading] = useState(true)

	useEffect(() => {
		const userToken = localStorage.getItem("user_token")
		const userDb = localStorage.getItem("user_db")

		if (userToken && userDb) {
			setUser(JSON.parse(userDb))
			setLoading(false)
		}
	}, [])

	async function login(username, password) {
		const response = await FirebaseLogin({ username, password })
		const accessToken = await response.accessToken
		localStorage.setItem("user_token", accessToken)

		const userData = await response
		localStorage.setItem("user_db", JSON.stringify({ username: userData.email, uid: userData.uid }))

		const userStorege = JSON.parse(localStorage.getItem("user_db"))

		if (userStorege) {
			setUser(userStorege.username)
		}

		navigate("/home")
	}

	return (
		<AuthContext.Provider value={{ signIn: !!user, user, login, loading }}>
			{children}
		</AuthContext.Provider>
	)
}
