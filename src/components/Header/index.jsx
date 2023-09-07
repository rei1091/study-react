import Link from "next/link";
import classes from 'src/components/Header/Header.module.css';

const NAV_ITEMS = [
	{herf: "/", label: "Index"},
	{herf: "/about", label: "About"}
]

export const Header = () => {
	return (
		<header className={classes.header}>
			{NAV_ITEMS.map((item) => {
				return(
				<Link key={item.herf} href={item.herf} className={classes.anchor}>
				{item.label}
			</Link>
				);
			})}
		</header>
	);
}
