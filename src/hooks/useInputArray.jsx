import {  useCallback, useState } from 'react';

export const useInputArray = () =>{
	const [text, setText] = useState("");
	const [array, setArray] = useState([]);
  const handleChenge = useCallback((e)=>{
		if(e.target.value.length > 5){
			alert('5文字以内にしてください');
			return;
		}
		setText(e.target.value.trim());
	}, []);

	const handleAdd =useCallback(()=>{
		setArray((prevArray)=>{
			if (prevArray.includes(text)){
				alert("同じ要素が既に存在します");
				return prevArray;
			}
			return [...prevArray, text]//pop等の破壊的メッソドを使わないためのスップレット構文
		});
		setText('');
	}, [text]);
	return {text, array, handleChenge, handleAdd};
}