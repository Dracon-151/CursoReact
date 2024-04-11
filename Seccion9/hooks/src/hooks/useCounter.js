import { useState } from "react"

export const useCounter = (initialValue = 10) => {

    const [counter, setCounter] = useState(initialValue)

	const add = (val=1)=> setCounter(el => el+val)
	const subtract = (val=1)=> {
        if(counter == 0) return
        setCounter(el => el-val)
    }

	const reset = ()=> setCounter(initialValue)

    return{
        counter,
        add,
        subtract,
        reset,
    }
}