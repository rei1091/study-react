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
	const [array, setArray] = useState([]);

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

	const handleAdd =useCallback(()=>{
		setArray((prevArray)=>{
			if(prevArray.some(item=>item === text)){
				alert("同じ要素が既に存在します");
				return prevArray;
			}
			return [...prevArray, text]//pop等の破壊的メッソドを使わないためのスップレット構文
		});
		setText('');
	}, [text]);

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
