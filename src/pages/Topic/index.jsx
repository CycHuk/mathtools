import { Routes, Route, Navigate } from 'react-router-dom'

import LinearSystems from './LinearSystems'

const Topic = () => {
	return (
		<Routes>
			<Route path='/linear-systems/*' element={<LinearSystems />} />
			<Route path='/2/*' element={<h1>1</h1>} />
			<Route path='/3/*' element={<h1>1</h1>} />
			<Route path='/4/*' element={<h1>1</h1>} />
			<Route path='/5/*' element={<h1>1</h1>} />
			<Route path='/6/*' element={<h1>1</h1>} />
			<Route path='*' element={<Navigate to='/' replace />} />
		</Routes>
	)
}

export default Topic
