import Head from 'next/head'
import styles from 'src/styles/Home.module.css'
import { Main } from 'src/components/Main'
import { Header } from 'src/components/Header'
import { Footer } from 'src/components/Footer'
import { useCallback, useEffect } from 'react'

//  const handleClick = (e, foo)=>{
//  	console.log(e.target.href);
// 	e.preventDefault();
// 	alert(foo);
//  };

export default function Home() {
	const foo = 1;

  const handleClick = useCallback((e)=>{
  console.log(e.target.href);
 	 e.preventDefault();
		alert(foo);
  }, []);

	useEffect(()=> {
		console.log('マウント時');
    document.body.style.backgroundColor ="lightblue";
		return()=>{
			console.log('アンマウント時');
			document.body.style.backgroundColor ="";
		}
	},[])

	return (
		<div className={styles.container}>
			<Head>
				<title>Index Paga</title>
			</Head>
      <Header />
		  <a href="/about" onClick={handleClick}
			>
			ボタン</a>
			<Main page='index' />
			<Footer />
		</div>
	);
}
