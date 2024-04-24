import "./index.css"

export function Input({ id, label, type, value, placeholder, onChange, onClick, error, message }) {
	return (
		<div className="input">
			<label htmlFor={id}>{label}</label>
			<input
				id={id ? id : ""}
				name={id ? id : ""}
				type={type ? type : "text"}
				value={value}
				placeholder={placeholder ? placeholder : "Search..."}
				onChange={onChange}
				onClick={onClick}
			/>
			{error == true && value == "" ? (
				<p data-error>{message || "Preencha o campo corretamente"}</p>
			) : null}
		</div>
	)
}
