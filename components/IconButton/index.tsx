import { CSSProperties, MouseEventHandler } from "react";

import Button from "../Button";
import ArrowRight from "../../public/arrow-right.svg";

import styles from "./iconButton.module.css";

const buttonIcons = {
	"arrow-right": <ArrowRight className={styles.svg} />,
};

type IconTypes = "arrow-right";

interface IconButtonProps {
	name: string;
	iconType: IconTypes;
	style?: CSSProperties;
	link?: string;
	onClick?: MouseEventHandler<HTMLButtonElement>;
}

const IconButton = ({
	name,
	iconType,
	style,
	link,
	onClick,
}: IconButtonProps) => {
	return (
		<Button name={name} link={link} style={style} onClick={onClick}>
			{buttonIcons[iconType]}
		</Button>
	);
};

export default IconButton;
