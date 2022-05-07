import Link from "next/link";
import { CSSProperties, MouseEventHandler, ReactNode } from "react";

import styles from "./baseButton.module.css";

interface BaseButtonProps {
	children: ReactNode;
	style?: CSSProperties;
	link?: string;
	onClick?: MouseEventHandler<HTMLButtonElement>;
}

const BaseButton = ({ children, style, link, onClick }: BaseButtonProps) => {
	const button = (
		<button
			type="button"
			className={styles.button}
			style={style}
			onClick={onClick}
		>
			{children}
		</button>
	);

	return <>{link ? <Link href={link ?? "/"}>{button}</Link> : button}</>;
};

export default BaseButton;
