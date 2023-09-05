import Head from 'next/head'
import styles from 'src/styles/Home.module.css'
import { Main } from 'src/components/Main'
import { Header } from 'src/components/Header'
import { Footer } from 'src/components/Footer'
import {  useCallback, useEffect, useState } from 'react'

export default function Home() {
	const [count, setCount] = useState(1);
	// let foo = 1;

  const handleClick = useCallback(() => {
		if(count <10){
			setCount((count)=>count+1);
		}
		// foo = foo+1;
		//第二引数を指定し不要なレンダリングをさせない
	}, [count]);

	useEffect(()=> {
    document.body.style.backgroundColor ="lightblue";
		return()=>{
			document.body.style.backgroundColor ="";
		}
	},[]);


	return (
		<div className={styles.container}>
			<Head>
				<title>Index Paga</title>
			</Head>
      <Header />
			<h1>{count}</h1>
		  <button onClick={handleClick}
			>
			ボタン</button>
			<Main page='index' />
			<Footer />
		</div>
	);
}
