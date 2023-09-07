
import classes from 'src/components/Headline/Headline.module.css';

export function Headline(props) {

	return (
		<div>
			<h1 className={classes.title}>{props.page} page</h1>


			<button onClick={props.handleReduce}>減らす</button>

			<p className={classes.description}>
				{props.children}
			</p>
		</div>
	);
}
