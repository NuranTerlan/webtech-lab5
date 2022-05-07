import { NextPage } from "next";
import { useRouter } from "next/router";

import Layout from "../components/Layout";
import Button from "../components/Button";
import { CategoryKey, DefaultStateStructure } from "../store/DefaultState";

import useAppContext from "../store/hooks/useAppContext";

import styles from "../styles/Categories.module.css";

const Categories: NextPage = () => {
	const { globalState, globalDispatch } = useAppContext();

	const { quizCategories }: DefaultStateStructure = globalState;

	const router = useRouter();

	const onButtonClick = (key: CategoryKey) => {
		globalDispatch({ type: "SETQUIZCATEGORY", payload: key });

		router.push("quiz");
	};

	return (
		<Layout excludeFooter>
			<h1 className={styles.heading}>Choose category</h1>
			<div className={styles.categories}>
				{quizCategories &&
					quizCategories.map((category) => (
						<Button
							key={category.key}
							name={category.name}
							onClick={() => onButtonClick(category.key)}
						/>
					))}
			</div>
		</Layout>
	);
};

export default Categories;
