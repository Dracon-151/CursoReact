import { useState } from "react"

export const Counter = () => {

	const [counter, setCounter] = useState({
		counter1: 10,
		counter2: 20,
		counter3: 30,
	})
	
	const add = ()=> setCounter(el => {
		return {
			...el,
			counter1: counter.counter1+1,
		}
	})
	const subtract = ()=> setCounter(el => {
		return {
			...el,
			counter1: counter.counter1-1,
		}
	})

	return (
		<>
			<div className="text-center">
				<h3>Counter</h3>
				<p>{ counter.counter1 }</p>
				<p>{ counter.counter2 }</p>
				<p>{ counter.counter3 }</p>

				<button className="btn btn-success w-25 mx-2"
					onClick={add}
				>
					+
				</button>
				<button className="btn btn-danger w-25 mx-2"
					onClick={subtract}
				>
					-
				</button>
			</div>
		</>
	)
}
