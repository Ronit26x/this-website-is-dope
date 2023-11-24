import React, { useEffect, useState } from "react";
import Logo from "@/assets/logo-white.svg";
import { RoughNotation } from "react-rough-notation";

const Nav = () => {
	const [showTwitter, setShowTwitter] = useState(false);
	const [showGithub, setShowGithub] = useState(false);

	const [top, setTop] = useState(true);
	const handleScroll = () => {
		const position = window.pageYOffset;
		position < 10 ? setTop(true) : setTop(false);
	};

	useEffect(() => {
		window.addEventListener("scroll", handleScroll, { passive: true });

		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);
	return (
		<nav
			className={`fixed w-full z-50 top-0 px-6 py-4 ${
				!top &&
				`backdrop-blur-3xl border-b-2 border-neutral-900 border-opacity-50`
			} flex justify-between items-center`}
		>
			<a href="/" className="w-fit">
				<img src={Logo} alt="Logo" className="w-12 h-12" />
			</a>
			
		</nav>
	);
};

export default Nav;
