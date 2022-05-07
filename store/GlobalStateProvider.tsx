import { ReactElement } from "react";

import Context from "./Context";
import useGlobalState from "./hooks/useGlobalState";

interface GlobalStateProviderProps {
	children: ReactElement;
}

const GlobalStateProvider = ({ children }: GlobalStateProviderProps) => {
	const globalState = useGlobalState();

	return <Context.Provider value={globalState}>{children}</Context.Provider>;
};

export default GlobalStateProvider;
