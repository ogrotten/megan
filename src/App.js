import React, { useState, useEffect } from 'react';
import Dexie from "dexie";

import './App.css';

const db = new Dexie("yawndb");
db.version(1).stores({
	tasks: "++id, data"
})

function App() {
	const [field, setField] = useState("");
	const [incoming, setIncoming] = useState("");

	const doInput = e => {
		setField(e.target.value)
		// console.log(e.target.value);
	}

	const getTest = async e => {
		e.preventDefault();
		const giving = await db.tasks.put({ data: field })
		const getting = await db.tasks.where("data").startsWith("b").sortBy("data");
		setIncoming(field);
		console.log(25, field, giving, getting);
	}

	useEffect(() => {
		function* getdata() {yield db.tasks.where("id").above(0).toArray();}
		// async function getdata() {await db.tasks.where("id").above(0).toArray();}
		// const getdata = async () => {await db.tasks.where("data").startsWith("b").sortBy("data");}
		// const getdata = async () => {await db.tasks.where("id").equals(17);}
		// console.log(28,JSON.stringify(getdata(),null,2));
		console.log(34,getdata());
	},[incoming])

	return (
		<div className="App">
			<form onSubmit={getTest}>
				<input onChange={doInput} id="testfield" type="text" placeholder=" " name="field" value={field} />
			</form>
		</div>
	);
}

export default App;
