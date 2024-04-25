import { useState } from "react"
import { Input } from "../input"
import { Button } from "../button"
import "./index.sass"

export function SearchBar() {
	const [array, setArray] = useState([])

	function Submit(e){
		e.preventDefault()
	}

	return (
		<div id="searchBar">
			<form onSubmit={Submit}>
				<div className="novos-produtos">
					<Input placeholder="Digite o produto que deseja" />
					<Input type='number' placeholder="Qnt.." />
				</div>
				<Button label="Novo Produto" />
			</form>
		</div>
	)
}
