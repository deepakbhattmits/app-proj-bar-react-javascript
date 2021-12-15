/** @format */
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import MainComponent from '../components/MainComponent';
import { getBeers, addTofavorites, removeFromfavorites } from '../store/actions';
import SearchPage from './SearchPage';
const MainPage = () => {
	const dispatch = useDispatch();

	let idb = null;
	const [db, setDb] = useState('default');
	const [version, setVersion] = useState(1);
	const [isLoading, setIsLoading] = useState(false);
	const beers = useSelector((state) => state.beerData.beers);
	const fbeers = useSelector((state) => state.beerData.addFbeers);
	const favorites = useSelector((state) => state.beerData.favorites);
	const getfav = () => {
		return fbeers;
	};

	const addToFavorite = (e) => {
		dispatch(addTofavorites(e.target.id));
	};
	const removeFromfavorite = (e) => {
		dispatch(removeFromfavorites(e.target.id));
	};

	const handleIndexDBChange = (e) => {
		const { name, value } = e.target;
		console.log('called : ', value, name);
		if (name === 'db') {
			setDb(value);
		} else if (name === 'version') {
			setVersion(+value);
		}
	};
	const handleCreateDB = (e) => {
		const dbName = db;
		const dbVersion = version;
		console.log('NEW : ', dbName, dbVersion);

		const request = indexedDB.open(dbName, dbVersion);

		//on upgrade needed
		request.onupgradeneeded = (e) => {
			idb = e.target.result;
			/*  note = {
                        title: "note1",
                        text: "this is a note"
                    }*/
			const pNotes = idb.createObjectStore('personal_notes', {
				keyPath: 'title',
			});
			const todoNotes = idb.createObjectStore('todo_notes', {
				keyPath: 'title',
			});

			alert(
				`upgrade is called database name: ${idb.name} version : ${idb.version}`
			);
		};
		//on success
		request.onsuccess = (e) => {
			idb = e.target.result;
			alert(
				`success is called database name: ${idb.name} version : ${idb.version}`
			);
		};
		//on error
		request.onerror = (e) => {
			alert(`error: ${e.target.error} was found `);
		};
	};
	const handleAddNote = (e) => {
		const note = {
			title: 'note' + Math.random(),
			text: 'This is my note',
		};

		const tx = idb.transaction('personal_notes', 'readwrite');
		tx.onerror = (e) => alert(` Error! ${e.target.error}  `);
		const pNotes = tx.objectStore('personal_notes');
		pNotes.add(note);
	};
	const handleViewNotes = (e) => {
		const tx = idb.transaction('personal_notes', 'readonly');
		const pNotes = tx.objectStore('personal_notes');
		const request = pNotes.openCursor();
		request.onsuccess = (e) => {
			const cursor = e.target.result;

			if (cursor) {
				alert(`Title: ${cursor.key} Text: ${cursor.value.text} `);
				//do something with the cursor
				cursor.continue();
			}
		};
	};
	useEffect(() => {
		// if (!beers) {
		dispatch(getBeers()); //  action call.
		// }
		// }, [beers, dispatch]);
	}, [dispatch]);

	return (
		<>
			<SearchPage setIsLoading={setIsLoading} />
			<div className='ui row'>
				<MainComponent
					beers={beers}
					fbeers={getfav()}
					addToFavorite={addToFavorite}
					removeFromfavorite={removeFromfavorite}
					className={favorites}
					isLoading={isLoading}
				/>
			</div>
			<div className='ui segment'>
				DB
				<input
					name='db'
					type='text'
					value={db}
					onChange={handleIndexDBChange}
				/>
				Version{' '}
				<input
					name='version'
					type='text'
					value={version}
					onChange={handleIndexDBChange}
				/>
				<button name='createDb' onClick={handleCreateDB}>
					Create DB
				</button>
				<button name='btnAddNote' onClick={handleAddNote}>
					Add Note
				</button>
				<button name='btnViewNotes' onClick={handleViewNotes}>
					View Notes
				</button>
			</div>
		</>
	);
};
export default MainPage;
