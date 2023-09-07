import {  useCallback, useMemo, useState } from 'react'

export const useCounter = () =>{
	const [count, setCount] = useState(1);
	const [isShow, setIsShow] = useState(true);

const doubleCount = useMemo(() =>{
    return count*2;
}, [count]);

  const handleClick = useCallback(() => {
		if(count <10){
			setCount((prevCount)=>prevCount+1);
		}
		
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

	return {count, doubleCount, isShow, handleClick, handleDisplay};
}