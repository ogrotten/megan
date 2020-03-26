import React, { useState, useEffect } from 'react';
import Dexie from "dexie";

import './App.css';

const db = new Dexie("yawndb");
db.version(1).stores({
	tasks: "++id, data"
})

function App() {
	const [fieldData, setFieldData] = useState("");
	const [newItem, setNewItem] = useState("");

	const controlField = e => {
		setFieldData(e.target.value)
	}

	const formData = async e => {
		e.preventDefault();		// Don't exec normal form submission events.

		// Write to db. It returns the new ID to dbWrite
		const dbWrite = await db.tasks.put({ data: fieldData })

		// Show in console the id of the db write.
		console.log(`Returned ID: ${dbWrite}`);
		
		// "Read back" the new entry immediately
		const dbRead = await db.tasks.where("id").equals(dbWrite).first();
		
		// Set the state 
		setNewItem(dbRead);
	}

	useEffect(() => {
		// Show in console the newest db entry
		console.log("Newest Item:", newItem);
	},[newItem])	// watch state of `newItem` for changes

	return (
		<div className="App">
			<form onSubmit={formData}>
				<input onChange={controlField} id="testfield" type="text" placeholder=" " name="inputField" value={fieldData} />
			</form>
		</div>
	);
}

export default App;
