import Image from "next/image";
import classnames from "classnames";

import { ReactNode } from "react";

import styles from "./layout.module.css";

interface LayoutProps {
	children: ReactNode;
	mainCentered?: boolean;
	excludeFooter?: boolean;
}

const Layout = ({
	children,
	mainCentered = false,
	excludeFooter = false,
}: LayoutProps) => {
	return (
		<div className={styles.container}>
			<header className={classnames(styles.header, styles.center)}>
				<Image
					src="/popquiz-logo-black.svg"
					alt="popquiz-logo"
					width={70}
					height={70}
				/>
			</header>
			<main
				className={classnames(styles.main, mainCentered && styles.center)}
				style={{ paddingTop: mainCentered ? "0" : "4rem" }}
			>
				{children}
			</main>
			{!excludeFooter && (
				<footer className={classnames(styles.footer, styles.center)}>
					<h5>designed by devvhale</h5>
				</footer>
			)}
		</div>
	);
};

export default Layout;
