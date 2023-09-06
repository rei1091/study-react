import {  useCallback, useState } from 'react'

export const useCounter = () =>{
	const [count, setCount] = useState(1);
	const [isShow, setIsShow] = useState(true);
  const handleClick = useCallback(() => {
		if(count <10){
			setCount((prevCount)=>prevCount+1);
		}
		// foo = foo+1;
		//第二引数を指定し不要なレンダリングをさせない
	}, [count]);
	const handleDisplay = useCallback(()=>{
		setIsShow((prevIsShow)=>
			// if(isShow){
			//   return false;
			// }
		!prevIsShow//isShow ? false: true;
		);
	}, []);

	return {count, isShow, handleClick, handleDisplay};
}