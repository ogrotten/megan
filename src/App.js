import React, { useState, useEffect } from 'react';
// import axios from "axios";
import { Container, Button, Card, InputGroup, FormControl, /* ToggleButton, ToggleButtonGroup */ } from "react-bootstrap";
import Dexie from "dexie";

import { useInputControl } from "./hooks/useInputControl.js";
// import AdminListitem from "./AdminListitem";
import ValidateFields from "./Validate";

import './App.css';

const db = new Dexie("wikidb");
db.version(1).stores({
	tasks: "++id, title"
})

const App = (props) => {
	// useInputControl setup, abstracting the basic form fields
	const celebNameInput = useInputControl("");
	const factoidInput = useInputControl("");
	const imageUrlInput = useInputControl("");
	const birthyear = useInputControl("");

	// setting up local state
	// const [alive, setAlive] = useState(true);
	const [celebs, setCelebs] = useState([]);
	const [validate, setValidate] = useState([]);

	const celebInfo = {
		celebname: celebNameInput.value,
		image_url: imageUrlInput.value,
		factoid: factoidInput.value,
		birthyear: birthyear.value,
		// alive: alive
	};

	// const doAlive = e => {
	// 	const chgAlive = e.target.value;
	// 	setAlive(chgAlive);
	// };

	const doSubmit = e => {
		e.preventDefault();
		const make = []
		Object.keys(celebInfo).forEach(el => {
			if (celebInfo[el] === "") {
				make.push(`"${el}" field cannot be blank.`)
			}
		})
		if (make.length !== 0) {
			setValidate(make)
			return
		} else {
			setValidate(make)
			setCelebs([celebInfo, ...celebs ])
			// 
			// db write here
			// 
			e.preventDefault();
		}
	}

	useEffect(() => {
		const getList = () => {
			// 
			// db read here.
			// 
			// axios
			// 	.get(`https://ogr-ft-celebdoa.herokuapp.com/api/celeb`)
			// 	.then(response => {
			// 		const ordered = response.data.sort((a,b) => {return a.id - b.id})
			// 		setCelebs(ordered.reverse())
			// 	})
			// 	.catch(err => console.error(`>>> PROBLEM -- List > axios :: ${err}`))
		}
		getList();
	}, [])

	return (
		<Container>
			<Card style={{ maxWidth: '40rem', margin: "auto" }}>
				<form onSubmit={doSubmit}>
					<Card.Header>
						<Card.Title bg="light">Add Celeb</Card.Title>
					</Card.Header>
					<Card.Body style={{ padding: "2rem" }}>
						<InputGroup className="mb-3">
							<FormControl style={{ minWidth: "50%" }} {...celebNameInput} placeholder="Celebrity" />
							{/* <ToggleButtonGroup name="alivequestion" defaultValue={true}>
								<ToggleButton type="radio" name="alive" value={true} checked={alive === true} onChange={doAlive} variant="outline-primary" >
									Alive
								</ToggleButton>
								<ToggleButton type="radio" name="dead" value={false} checked={alive === false} onChange={doAlive} variant="outline-primary">
									Dead
								</ToggleButton>
							</ToggleButtonGroup> */}
						</InputGroup>
						<InputGroup className="mb-3">
							<FormControl {...birthyear} placeholder="Birth Year" style={{ maxWidth: "25%" }} />
							<FormControl {...imageUrlInput} placeholder="Image URL" />
						</InputGroup>
						<InputGroup className="mb-3">
							<FormControl {...factoidInput} placeholder="Factoid" />
						</InputGroup>
						<Button variant="primary" type="submit" style={{ width: "10rem" }}>
							Add Celeb
						</Button>
					</Card.Body>
				</form>
				<ValidateFields validate={validate} />
			</Card>
			{/* {celebs.map(item => (
				<AdminListitem key={celebs.indexOf(item)} item={item} />
			))} */}
		</Container>
	);
}

export default App;
