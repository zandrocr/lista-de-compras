import { useState } from "react"
import { Input } from "../input"

export function SearchBar() {
    const [array, setArray] = useState()
    
	return (
		<div>
			<Input placeholder='Digite o produto que deseja'/>
		</div>
	)
}
