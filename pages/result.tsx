import { NextPage } from "next";
import { useRouter } from "next/router";
import { useEffect } from "react";

import Layout from "../components/Layout";
import ResultBox from "../components/ResultBox";
import Button from "../components/Button";
import IconButton from "../components/IconButton";

import useAppContext from "../store/hooks/useAppContext";

import styles from "../styles/Result.module.css";

const Result: NextPage = () => {
	const { globalState, globalDispatch } = useAppContext();
	const { result, quizLength, user } = globalState;
	let score: number = (result.correct * 100) / quizLength;

	const router = useRouter();

	useEffect(() => {
		if (!user.email) {
			router.push("/");
		}
	}, []);

	const onRetakeButtonClick = () => {
		globalDispatch({ type: "RESETQUIZ", payload: null });

		router.push("categories");
	};

	return (
		<Layout>
			<h1 className={styles.heading}>
				Thank you for taking this quiz, <span>{user.firstName}</span>
			</h1>
			<div className={styles.details}>
				<div className={styles.resultBoxes}>
					<ResultBox count={result.correct} type="correct" />
					<ResultBox count={result.wrong} type="wrong" />
				</div>
				<h2 className={styles.score}>
					{score}
					<span>%</span>
				</h2>
			</div>
			<div className={styles.buttons}>
				<Button name={`Send to ${user.email}`} />
				<IconButton
					name="Retake quiz"
					iconType="arrow-right"
					onClick={onRetakeButtonClick}
				/>
			</div>
		</Layout>
	);
};

export default Result;
