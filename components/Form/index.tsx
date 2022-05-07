import { ReactNode } from "react";

import styles from "./form.module.css";

interface FormProps {
	children: ReactNode;
}

const Form = ({ children }: FormProps) => {
	return <div className={styles.formContainer}>{children}</div>;
};

export default Form;
