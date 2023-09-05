import Head from 'next/head'
import styles from 'src/styles/Home.module.css'
import { Main } from 'src/components/Main'
import { Header } from 'src/components/Header'
import { Footer } from 'src/components/Footer'
import {  useCallback, useEffect, useState } from 'react'

export default function Home() {
	const [count, setCount] = useState(1);
	const [text, setText] = useState("");
	const [isShow, setIsShow] = useState(true);

  const handleClick = useCallback(() => {
		if(count <10){
			setCount((prevCount)=>prevCount+1);
		}
		// foo = foo+1;
		//第二引数を指定し不要なレンダリングをさせない
	}, [count]);

	const handoleDisplay = useCallback(()=>{
		setIsShow((prevIsShow)=>
			// if(isShow){
			//   return false;
			// }
		!prevIsShow//isShow ? false: true;
		);
	}, []);

	const handleChenge = useCallback((e)=>{
		if(e.target.value.length > 5){
			alert('5文字以内にしてください');
			return;
		}
		setText(e.target.value.trim());
	}, []);
	
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
			{isShow ? <h1>{count}</h1> : null}
		  <button onClick={handleClick}
			>
			ボタン</button>
			<button onClick={handoleDisplay}>
			{isShow ? '非表示': '表示'}</button>
			<input type='text' value={text} onChange={handleChenge}/>
			<Main page='index' />
			<Footer />
		</div>
	);
}
