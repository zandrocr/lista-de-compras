import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"
import { getAuth } from "firebase/auth";

const firebaseConfig = {
	apiKey: "AIzaSyBwnH4X435gLXjZeeIDTCwCuF-rwhwbS-E",
	authDomain: "test-64aa4.firebaseapp.com",
	databaseURL: "https://test-64aa4-default-rtdb.firebaseio.com",
	projectId: "test-64aa4",
	storageBucket: "test-64aa4.appspot.com",
	messagingSenderId: "947105153319",
	appId: "1:947105153319:web:7d11572ff0f5f9728b2902",
	measurementId: "G-ZEYG9C635E",
}

const app = initializeApp(firebaseConfig)
export const auth = getAuth(app);
export const db = getFirestore(app)