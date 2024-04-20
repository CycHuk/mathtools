import React, { useState } from 'react'
import MathJax from 'react-mathjax'
import LinearSystemConstructor from '../../../../components/constructors/LinearSystems'
import Method from '../../../../features/topic/LinearSystems/methodGaussJordan'

import style from './GaussJordan.module.scss'

const formatMatrix = matrix => {
	return `\\begin{pmatrix}
    ${matrix.map(row => row.map(num => num).join(' & ')).join(' \\\\ ')}
    \\end{pmatrix}`
}

const GaussJordanPage = () => {
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
		const { intermediateSystems } = Method(copiedA, copiedB)
		try {
			setSolution(intermediateSystems[intermediateSystems.length - 1].b)
		} catch {
			setSolution([])
		}
		setIntermediateSystems(intermediateSystems)
		setDecision(true)
	}

	return (
		<div className={style['gauss-container']}>
			<h1 className={style['gauss-header']}>Метод Гаусса-Жордана</h1>
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
										formula={`[A | b] = ${formatMatrix(system.A)}`}
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

export default GaussJordanPage
