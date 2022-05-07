import { MouseEventHandler } from "react";
import classNames from "classnames";

import styles from "./quizOption.module.css";

export type QuizOptionType = "correct" | "wrong" | "normal";

interface QuizOptionProps {
	content: string;
	type?: QuizOptionType;
	onClick: MouseEventHandler<HTMLDivElement>;
}

const classNamesForType = {
	correct: styles.correct,
	wrong: styles.wrong,
	normal: styles.normal,
};

const QuizOption = ({ content, type, onClick }: QuizOptionProps) => {
	return (
		<div
			className={classNames(styles.option, type && classNamesForType[type])}
			onClick={onClick}
		>
			{content}
		</div>
	);
};

export default QuizOption;
