import { NextPage } from "next";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";

import Layout from "../components/Layout";
import QuizOption, { QuizOptionType } from "../components/QuizOption";
import Button from "../components/Button";
import IconButton from "../components/IconButton";

import useAppContext from "../store/hooks/useAppContext";

import styles from "../styles/Quiz.module.css";

type Option = {
	content: string;
	correct: boolean;
};

export type QuizStep = {
	question: string;
	options: Option[];
};

export type FinalResult = {
	correct: number;
	wrong: number;
};

const Quiz: NextPage = () => {
	const [quiz, setQuiz] = useState<QuizStep[]>([]);
	const [stepLevel, setStepLevel] = useState<number>(0);
	const [currentStep, setCurrentStep] = useState<QuizStep>();
	const [optionsTypes, setOptionsTypes] = useState<QuizOptionType[]>(
		Array(4).fill("normal")
	);
	const [firstAttemptOnStep, setFirstAttemptOnStep] = useState<boolean>(true);
	const [result, setResult] = useState<FinalResult>({ correct: 0, wrong: 0 });

	const { globalState, globalDispatch } = useAppContext();
	const { user, quizCategory } = globalState;

	const router = useRouter();

	useEffect(() => {
		if (!user.email) {
			router.push("/");
			return;
		}

		const fetchQuiz = async () => {
			const response = await fetch(`api/quiz/${quizCategory}`);
			const data = await response.json();

			setCurrentStep(data[0]);
			setQuiz(data);
			globalDispatch({ type: "SETQUIZLENGTH", payload: data.length });
		};

		fetchQuiz().catch(console.error);
	}, []);

	useEffect(() => {
		setCurrentStep(quiz[stepLevel]);
		setOptionsTypes(Array(4).fill("normal"));
		setFirstAttemptOnStep(true);
	}, [stepLevel]);

	const onOptionClick = (index: number) => {
		const copyOfOptionsTypes = [...optionsTypes];

		if (currentStep?.options[index].correct) {
			copyOfOptionsTypes[index] = "correct";
			setOptionsTypes(copyOfOptionsTypes);

			doFirstCheckFor("correct");

			return;
		}

		copyOfOptionsTypes[index] = "wrong";
		setOptionsTypes(copyOfOptionsTypes);

		doFirstCheckFor("wrong");
	};

	const doFirstCheckFor = (optionType: QuizOptionType) => {
		if (firstAttemptOnStep) {
			setResult(({ correct, wrong }) => {
				switch (optionType) {
					case "correct":
						correct++;
						break;
					case "wrong":
						wrong++;
						break;
				}

				return { correct, wrong };
			});

			setFirstAttemptOnStep(false);
		}
	};

	const onNextButtonClick = () => {
		setStepLevel((prev) => Math.min(prev + 1, quiz.length - 1));
	};

	const onSubmitButtonClick = () => {
		globalDispatch({ type: "SUBMITQUIZ", payload: { ...result } });

		router.push("result");
	};

	return (
		<Layout excludeFooter>
			{currentStep ? (
				<>
					<h1 className={styles.question}>{currentStep.question}</h1>
					<div className={styles.answer}>
						<div className={styles.optionsContainer}>
							{currentStep.options.map((option, index) => (
								<QuizOption
									key={option.content}
									content={option.content}
									type={optionsTypes[index]}
									onClick={() => onOptionClick(index)}
								/>
							))}
						</div>
						<div className={styles.bottomSection}>
							<div className={styles.info}>
								{stepLevel + 1}
								<span>/{quiz.length}</span>
							</div>
							{stepLevel === quiz.length - 1 ? (
								<IconButton
									name="Submit quiz"
									iconType="arrow-right"
									onClick={onSubmitButtonClick}
								/>
							) : (
								<Button name="Next" onClick={onNextButtonClick} />
							)}
						</div>
					</div>
				</>
			) : (
				<h1 className={styles.question}>Loading question..</h1>
			)}
		</Layout>
	);
};

export default Quiz;
