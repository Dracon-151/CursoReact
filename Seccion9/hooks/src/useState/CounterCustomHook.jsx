import { useCounter } from "../hooks/useCounter"

export const CounterCustomHook = () => {

	const { counter, add, subtract, reset } = useCounter()

	return (
		<>
			<div className="text-center">
				<h3>Counter Custom Hook</h3>
				<p>{ counter }</p>

				<button className="btn btn-success w-25 mx-2"
					onClick={()=>add(2)}
				>
					+
				</button>
				<button className="btn btn-danger w-25 mx-2"
					onClick={()=>subtract(2)}
				>
					-
				</button>
				<button className="btn btn-warning w-25 mx-2"
					onClick={reset}
				>
					Reset
				</button>
			</div>
		</>
	)
}
