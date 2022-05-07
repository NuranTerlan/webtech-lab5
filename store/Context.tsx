import { createContext } from "react";

import DefaultState, { DefaultStateStructure } from "./DefaultState";

export interface DispatchObject {
	type: string;
	payload: any;
}

interface ContextStructure {
	globalState: DefaultStateStructure;
	globalDispatch: (dispatchObject: DispatchObject) => void;
}

const Context = createContext<ContextStructure>({
	globalState: DefaultState,
	globalDispatch: () => {},
});

export default Context;
