import { CSSProperties, MouseEventHandler, ReactNode } from "react";

import BaseButton from "../BaseButton";

import styles from "./button.module.css";

interface ButtonProps {
	name: string;
	children?: ReactNode;
	style?: CSSProperties;
	link?: string;
	onClick?: MouseEventHandler<HTMLButtonElement>;
}

const Button = ({ name, children, style, link, onClick }: ButtonProps) => {
	return (
		<BaseButton link={link} style={style} onClick={onClick}>
			<p className={styles.name}>{name}</p>
			{children}
		</BaseButton>
	);
};

export default Button;
