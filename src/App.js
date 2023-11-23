import { useEffect, useState } from 'react'
import './App.css'
import PatternDividerMobile from './svgs/PatternDividerMobile'

function App() {
	const [adviceSlip, setAdviceSlip] = useState({})

	useEffect(() => {
		async function fetchAdvice() {
			const res = await fetch(`https://api.adviceslip.com/advice`)
			const adviceSlip = await res.json()
			console.log('fetchAdvice()', adviceSlip.slip)
			setAdviceSlip(adviceSlip.slip)
		}
		fetchAdvice()
		console.log('App intialised')
	}, [])

	return (
		<div className="App">
			<div className="card">
				<p>ADVICE #{adviceSlip.id}</p>
				<p className="advice">"{adviceSlip.advice}"</p>
				<PatternDividerMobile />
			</div>
		</div>
	)
}

export default App
