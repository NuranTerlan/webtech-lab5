import { useContext } from "react";

import Context from "../Context";

const useAppContext = () => {
	const { globalState, globalDispatch } = useContext(Context);

	return { globalState, globalDispatch };
};

export default useAppContext;
