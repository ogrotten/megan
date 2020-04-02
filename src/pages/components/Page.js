import React, { useState, useEffect } from 'react';
import { useStateLink } from "@hookstate/core";

import { dataLink, pageLink, allLink } from "../../state/hookstate"

import { useInputControl } from "../hooks/useInputControl.js";
import ValidateFields from "../hooks/Validate";
import database from "../../data/database";

import { Container, Divider, Form, Input } from 'semantic-ui-react'

const Page = () => {
	const dataState = useStateLink(dataLink);
	const pageState = useStateLink(pageLink);
	const allState = useStateLink(allLink);
	// const fourthInput = useInputControl("");
	
	const [validate, setValidate] = useState([]);
	const [dbAction, setdbAction] = useState(pageState.get().id);
	
	const [pageInfo, setPageInfo] = useState({});

	const titleInput = useInputControl(pageInfo.title);
	const bodyInput = useInputControl(pageInfo.body);
	const tagInput = useInputControl(pageInfo.tags);
	
	console.log(27, pageInfo);
	// let value
	// let options

	const doSubmit = async e => {
		e.preventDefault();
		const make = []
		Object.keys(pageInfo).forEach(el => {
			if (pageInfo[el] === "") {
				make.push(`"${el}" field cannot be blank.`)
			}
		})
		if (make.length !== 0) {
			setValidate(make)
			return
		} else {
			// setValidate(make)
			// 
			// db write here
			//
			database.insert(pageInfo)
				.then((id) => {
					setPageInfo({...pageInfo, id: id});
					console.log(56, id);
					setdbAction(id);
				});

			// allState.set([pageInfo, ...allState.get()])
			// console.log(pageInfo);

		}
	}

	useEffect(() => {
		// database.getall().then((result) => {
		// 	allState.set(result)
		// })

		if (dbAction) {
			console.log(72, dbAction);
			database.get(dbAction)
				.then((result) => {
					console.log(73, result);
					dataState.set(result)
					setPageInfo(result)
				})
		}
	}, [dbAction])


	return (
		<Container fluid className="main">
			<Form onSubmit={doSubmit}>
				<Form.Input fluid
					{...titleInput}
					placeholder='Title'
					size="small"
					label={{ icon: 'text cursor' }}
					labelPosition='left'
				/>
				<Input fluid
					{...tagInput}
					placeholder='Descriptive Tags'
					size="mini"
					label={{ icon: 'tag' }}
					labelPosition='left'
				// transparent
				/>
				<Divider />
				<ValidateFields validate={validate} />
				<Form.TextArea
					{...bodyInput}
					placeholder='Tell me something good . . .'
				/>
				<Form.Button>Submit</Form.Button>
			</Form>
		</Container>
	)
}

export default Page