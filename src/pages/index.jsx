import Head from 'next/head';
import styles from 'src/styles/Home.module.css';
import { Main } from 'src/components/Main';
import { Header } from 'src/components/Header';
import { Footer } from 'src/components/Footer';

 const Home = (props) => {
	return (
		<div className={styles.container}>
			<Head>
				<title>Index Paga</title>
			</Head>
      <Header />

			{ props.isShow ? <h1>{props.count}</h1> : null}
		  <button onClick={props.handleClick}
			>
			ボタン</button>
			<button onClick={props.handleDisplay}>
			{props.isShow ? '非表示': '表示'}</button>

			<input type='text' value={props.text} onChange={props.handleChenge}/>
			<button onClick={props.handleAdd}>追加</button>
			<ul>
				{props.array.map(item=>{
					return<li key={item}>{item}</li>;
				})}
			</ul>

			<Main page='index' />
			<Footer />
		</div>
	);
}

export default Home;