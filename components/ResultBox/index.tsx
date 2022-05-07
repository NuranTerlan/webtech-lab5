import classNames from "classnames";

import styles from "./resultBox.module.css";

type ResultBoxType = "correct" | "wrong";

interface ResultBoxProps {
	count: number;
	type: ResultBoxType;
}

const classNamesForType = {
	correct: styles.correct,
	wrong: styles.wrong,
};

const ResultBox = ({ count = 0, type }: ResultBoxProps) => {
	return (
		<div className={classNames(styles.box, classNamesForType[type])}>
			{count}
		</div>
	);
};

export default ResultBox;
