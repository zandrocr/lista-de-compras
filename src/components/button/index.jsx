import "./index.css"

export function Button({ onClick, label }) {
	return (
		<button id="button" onClick={onClick}>
			{label}
		</button>
	)
}
