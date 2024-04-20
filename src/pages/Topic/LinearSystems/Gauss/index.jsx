// Gauss.jsx

import React, { useState } from 'react'
import MathJax from 'react-mathjax'
import LinearSystemConstructor from '../../../../components/constructors/LinearSystems'
import MethodGauss from '../../../../features/topic/LinearSystems/methodGauss'

import style from './Gauss.module.scss'

const formatMatrix = matrix => {
	return `\\begin{pmatrix}
    ${matrix.map(row => row.map(num => num).join(' & ')).join(' \\\\ ')}
    \\end{pmatrix}`
}

const GaussPage = () => {
	const [A, setA] = useState([])
	const [B, setB] = useState([])
	const [solution, setSolution] = useState(null)
	const [intermediateSystems, setIntermediateSystems] = useState(null)
	const [decision, setDecision] = useState(false)

	const updateSystem = (newA, newB) => {
		setA(newA)
		setB(newB)
		setDecision(false)
	}

	const solveSystem = () => {
		const copiedA = A.map(row => [...row])
		const copiedB = [...B]
		const { solution, intermediateSystems } = MethodGauss(copiedA, copiedB)
		setSolution(solution)
		setIntermediateSystems(intermediateSystems)
		setDecision(true)
	}

	const combineMatrix = (A, B) => {
		const combinedMatrix = A.map((row, index) => [...row.slice(), B[index]])
		return combinedMatrix
	}

	return (
		<div className={style['gauss-container']}>
			<h1 className={style['gauss-header']}>Метод Гаусса</h1>
			<LinearSystemConstructor
				className={style['linear-system-constructor']}
				onUpdate={updateSystem}
			/>{' '}
			<button className={style['solve-button']} onClick={solveSystem}>
				Решить
			</button>{' '}
			{decision && (
				<div className={style['intermediate-systems-container']}>
					<h2>Решение:</h2>
					{intermediateSystems.map((system, index) => (
						<div key={index} className={style['intermediate-system']}>
							<h3 className={style['intermediate-system-header']}>
								Шаг {index + 1}:
							</h3>
							<div>
								<MathJax.Provider>
									<MathJax.Node
										className={style['mathjax-formula']}
										formula={`[A | b] = ${formatMatrix(
											combineMatrix(system.A, system.b)
										)}`}
									/>
								</MathJax.Provider>
							</div>
						</div>
					))}
				</div>
			)}
			{decision && (
				<div className={style['solution-container']}>
					<h2>Ответ:</h2>
					<MathJax.Provider>
						<MathJax.Node
							className={style['mathjax-formula']}
							formula={`x = [${solution.map(num => num).join(', ')}]`}
						/>
					</MathJax.Provider>
				</div>
			)}
		</div>
	)
}

export default GaussPage
