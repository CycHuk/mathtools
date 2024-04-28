import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'

import MainLayout from './layouts/MainLayout'

import Home from './pages/Home'
import Docs from './pages/Docs'

import Topic from './pages/Topic'

import './scss/main.scss'

function App() {
	return (
		<>
			<ToastContainer />
			<MainLayout>
				<Routes>
					<Route path='/' element={<Home />} />
					<Route path='/docs' element={<Docs />} />

					<Route path='*' element={<Topic />} />
				</Routes>
			</MainLayout>
		</>
	)
}

export default App
