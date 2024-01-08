import { Fragment, useEffect, useState, Suspense } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Gallery from './components/Gallery'
import SearchBar from './components/SearchBar'
import { DataContext } from './context/DataContext'
import AlbumView from './components/AlbumView'
import ArtistView from './components/ArtistView'
import SongView from './components/SongView'
import { createResource as fetchData } from './helper'
import Spinner from './spinner'


function App() {
	let [search, setSearch] = useState('')
	let [message, setMessage] = useState('Search for Music!')
	let [data, setData] = useState(null)

	// const API_URL = 'https://itunes.apple.com/search?term='

	useEffect(() => {
		if (search) {
			// const fetchData = async () => {
			document.title = `${search} Music`
			// 	const response = await fetch(API_URL + search)
			// 	const resData = await response.json()
			// 	if (resData.results.length > 0) {
			// 		return setData(resData.results)
			// 	} else {
			// 		return setMessage('Not Found')
			// 	}
			// }
			// fetchData()
			console.log(fetchData(search))
			setData(fetchData(search))
			
		}
	}, [search])

	const handleSearch = (e, term) => {
		e.preventDefault()
		setSearch(term)
	}
	const renderGallery = () => {
		if (data) {
			return (
				<Suspense fallback={<Spinner />}>
					<Gallery data={data} />
				</Suspense>
			)
		}

	}
	return (
		<div className="App">

<SearchBar handleSearch={handleSearch} />
								
								{message}


			<DataContext.Provider value={data}>
				<Router>
					<Routes>
						<Route path="/" element={
							<Fragment>
								{renderGallery()}
							</Fragment>
						} />
						<Route path="/album/:id" element={<AlbumView />} />
						<Route path="/artist/:id" element={<ArtistView />} />
						{/* <Route path="/song/:id" element={<SongView />} /> */}
					</Routes>
				</Router>
			</DataContext.Provider>



		</div>
	);
}

export default App;
