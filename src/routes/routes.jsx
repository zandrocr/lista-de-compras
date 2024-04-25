import { BrowserRouter, Navigate, Route, Routes, useNavigate } from "react-router-dom"
import { Home } from "../pages/home"
import { Login } from "../pages/login"
import { AuthProvider } from "../contexts/auth"
import { UseAuth } from "../hooks/useAuth"

// eslint-disable-next-line react/prop-types
function Private({ Item }) {
	const navigate = useNavigate()
	const { signIn, loading } = UseAuth()
	if (loading === true) {
		return "Loading..."
	} else {
		if (signIn === false) {
			return <Login />
		} else {
			return Item
		}
	}
}

export function RoutesApp() {
	return (
		<BrowserRouter>
			<AuthProvider>
				<Routes>
					<Route path="/" element={<Navigate to="/login" />} />
					<Route path="/login" element={<Login />} />
					<Route exact path="/home" element={<Private Item={<Home />} />} />
				</Routes>
			</AuthProvider>
		</BrowserRouter>
	)
}
