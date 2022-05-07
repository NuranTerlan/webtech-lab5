export interface User {
	firstName: string;
	email: string;
}

export interface Result {
	correct: number;
	wrong: number;
}

export type CategoryKey = "general" | "sport" | "mathematics";

export interface QuizCategory {
	name: string;
	key: CategoryKey;
}

export interface DefaultStateStructure {
	user: User;
	result: Result;
	quizCategory: CategoryKey;
	quizLength: number;
	quizCategories: QuizCategory[];
}

const DefaultState: DefaultStateStructure = {
	user: { firstName: "", email: "" },
	result: { correct: 0, wrong: 0 },
	quizCategory: "general",
	quizLength: 0,
	quizCategories: [
		{ name: "General Knowledge", key: "general" },
		{ name: "Sport", key: "sport" },
		{ name: "Mathematics", key: "mathematics" },
	],
};

export default DefaultState;
