import React, { useState, useEffect } from 'react';
import Dexie from "dexie";

import './App.css';

// Setup db "yawndb"
const db = new Dexie("yawndb");
db.version(1).stores({
	// Setup table "tasks"
	// autoinc primary key column "id"
	// secondary key column "data"
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
		// Show the newest db entry in console whenever "newItem" is updated.
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
