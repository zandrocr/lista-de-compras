import { signInWithEmailAndPassword } from "firebase/auth"
import { auth } from "./config/config"

export function FirebaseLogin(user) {
	return signInWithEmailAndPassword(auth, user.username, user.password)
		.then((userCredential) => {
			const user = userCredential.user
			return user
		})
		.catch((error) => {
			console.log(error)
		})
}
