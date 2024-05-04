import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'

import MainLayout from './layouts/MainLayout'

import Сalc from './pages/Сalc'
import Docs from './pages/Docs'
import Preview from './pages/Preview'

import Topic from './pages/Topic'

import './scss/main.scss'

function App() {
	return (
		<>
			<ToastContainer />
			<MainLayout>
				<Routes>
					<Route path='/' element={<Preview />} />
					<Route path='/calc' element={<Сalc />} />
					<Route path='/docs' element={<Docs />} />

					<Route path='*' element={<Topic />} />
				</Routes>
			</MainLayout>
		</>
	)
}

export default App
