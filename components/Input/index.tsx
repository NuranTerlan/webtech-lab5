import { useId, ChangeEvent } from "react";

import styles from "./input.module.css";

type InputType = "text" | "number" | "email";

interface InputProps {
	label: string;
	type?: InputType;
	placeholder?: string;
	value: string | number;
	onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

const Input = ({
	label,
	type = "text",
	placeholder = "Type here..",
	value,
	onChange,
}: InputProps) => {
	const inputId = useId();

	return (
		<div className={styles.inputContainer}>
			<label htmlFor={inputId}>{label}</label>
			<input
				type={type}
				id={inputId}
				value={value}
				onChange={onChange}
				placeholder={placeholder}
			/>
		</div>
	);
};

export default Input;
