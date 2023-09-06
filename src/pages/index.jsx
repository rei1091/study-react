import Head from 'next/head';
import styles from 'src/styles/Home.module.css';
import { Main } from 'src/components/Main';
import { Header } from 'src/components/Header';
import { Footer } from 'src/components/Footer';

export default function Home(props) {
	const {count, isShow, handleClick, handleDisplay, text, array, handleChenge, handleAdd
	} = props;

	return (
		<div className={styles.container}>
			<Head>
				<title>Index Paga</title>
			</Head>
      <Header />

			{isShow ? <h1>{count}</h1> : null}
		  <button onClick={handleClick}
			>
			ボタン</button>
			<button onClick={handleDisplay}>
			{isShow ? '非表示': '表示'}</button>

			<input type='text' value={text} onChange={handleChenge}/>
			<button onClick={handleAdd}>追加</button>
			<ul>
				{array.map(item=>{
					return<li key={item}>{item}</li>;
				})}
			</ul>

			<Main page='index' />
			<Footer />
		</div>
	);
}
