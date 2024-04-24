import { useState } from "react"
import "./index.css"
import { ValidPassword } from "../../validation/validPassword"
import { Input } from "../../components/input"
import { Button } from "../../components/button"
import { UseAuth } from "../../hooks/useAuth"

export function Login() {
	const { login } = UseAuth()

	const [username, setUsername] = useState("")
	const [password, setPassword] = useState("")

	const validEmail = !username.toLowerCase().match(/[a-z]+@+[a-z]+.com(.br)*/)
	
	function Submit(e) {
		e.preventDefault()
		if (validEmail || password.length <= 5) {
			console.log("Email ou senha inválido")
		} else {
			login(username, password)
		}
	}

	return (
		<div id="login">
			<form onSubmit={Submit}>
				<h1>Login</h1>
				<Input
					id="username"
					label="Email"
					onChange={(e) => setUsername(e.target.value)}
					value={username}
				/>
				<Input
					type="password"
					id="password"
					label="Senha"
					onChange={(e) => setPassword(e.target.value)}
					value={ValidPassword(password)}
				/>
				<Button label="Entrar" />
			</form>
		</div>
	)
}
