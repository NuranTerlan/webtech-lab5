import { useReducer } from "react";

import { DispatchObject } from "../Context";
import DefaultState, { DefaultStateStructure } from "../DefaultState";

const reducer = (state: DefaultStateStructure, action: DispatchObject) => {
	const { type, payload } = action;

	switch (type) {
		case "STARTQUIZ":
			return { ...state, user: { ...payload } };
		case "SUBMITQUIZ":
			return { ...state, result: { ...payload } };
		case "RESETQUIZ":
			return { ...state, result: { correct: 0, wrong: 0 } };
		case "SETQUIZLENGTH":
			return { ...state, quizLength: payload };
		case "SETQUIZCATEGORY":
			return { ...state, quizCategory: payload };
		default:
			return { ...state };
	}
};

const useGlobalState = () => {
	const [globalState, globalDispatch] = useReducer(reducer, DefaultState);

	return { globalState, globalDispatch };
};

export default useGlobalState;
