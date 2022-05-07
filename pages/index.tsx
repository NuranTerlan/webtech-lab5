import { NextPage } from "next";
import { useRouter } from "next/router";
import Head from "next/head";
import Image from "next/image";
import { ChangeEvent, useState, useEffect } from "react";

import Layout from "../components/Layout";
import Input from "../components/Input/index";
import IconButton from "../components/IconButton";
import Form from "../components/Form";
import TimeChallengeImage from "../public/time.jpg";

import useAppContext from "../store/hooks/useAppContext";

import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
	const [firstName, setFirstName] = useState<string>("");
	const [email, setEmail] = useState<string>("");

	const { globalState, globalDispatch } = useAppContext();

	const router = useRouter();

	useEffect(() => {
		const { user } = globalState;

		setFirstName(user.firstName);
		setEmail(user.email);
	}, []);

	const onFirstNameInputChange = (e: ChangeEvent<HTMLInputElement>) => {
		setFirstName(e.target.value);
	};

	const onEMailInputChange = (e: ChangeEvent<HTMLInputElement>) => {
		setEmail(e.target.value);
	};

	const onStartButtonClick = () => {
		if (firstName && email) {
			globalDispatch({
				type: "STARTQUIZ",
				payload: { firstName, email },
			});

			router.push("categories");
		}
	};

	return (
		<div className={styles.container}>
			<Head>
				<title>POP Quiz</title>
				<meta name="description" content="Web Technologies Laboratory Work" />
				<link rel="icon" href="/popquiz-logo-white.svg" />
			</Head>
			<div className={styles.coverContainer}>
				<div className={styles.cover}>
					<Image
						src={TimeChallengeImage}
						alt="time"
						layout="fill"
						objectFit="cover"
						draggable={false}
						placeholder="blur"
						className={styles.image}
					/>
					<div className={styles.shadow}>
						<h1>
							Challenge
							<br />
							against
							<br />
							time
						</h1>
					</div>
				</div>
			</div>
			<Layout mainCentered>
				<Form>
					<Input
						label="Your name"
						placeholder="Nuran"
						value={firstName}
						onChange={onFirstNameInputChange}
					/>
					<Input
						label="E-mail"
						placeholder="nuran@gmail.com"
						value={email}
						onChange={onEMailInputChange}
					/>
					<IconButton
						name="Start quiz"
						iconType="arrow-right"
						style={{ marginTop: "1.5rem" }}
						onClick={onStartButtonClick}
					/>
				</Form>
			</Layout>
		</div>
	);
};

export default Home;
