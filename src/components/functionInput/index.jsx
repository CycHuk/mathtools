// FunctionInput.js

import React, { useState } from 'react'
import style from './FunctionInput.module.scss'

const FunctionInput = ({ onInputChange }) => {
	const [functionString, setFunctionString] = useState('')

	const handleChange = event => {
		const value = event.target.value
		setFunctionString(value)
		onInputChange(value)
	}

	return (
		<div className={style.functionInputContainer}>
			<label htmlFor='functionInput' className={style.functionInputLabel}>
				Введите функцию в виде sin(x) - x**2:
			</label>
			<input
				type='text'
				id='functionInput'
				className={style.functionInput}
				value={functionString}
				onChange={handleChange}
			/>
		</div>
	)
}

export default FunctionInput
