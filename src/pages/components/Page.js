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

	console.log(17, allState);

	const titleInput = useInputControl(dataState.value.title);
	const bodyInput = useInputControl(dataState.value.body);
	const tagInput = useInputControl(dataState.value.tags);
	// const fourthInput = useInputControl("");
	
	const [validate, setValidate] = useState([]);
	const [allData, setallData] = useState([...allState.value]);
	const [dbAction, setdbAction] = useState([]);

	const pageInfo = {
		title: titleInput.value,
		tags: tagInput.value,
		body: bodyInput.value
		// fourth: fourthInput.value,
	};
	
	let value
	let options

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
			setValidate(make)
			// console.log(57, pageInfo);
			// 
			// db write here
			//
			pageInfo["id"] = setdbAction(await database.pages.put(pageInfo));
			allState.nested.set([pageInfo, ...allState])
			// console.log(pageInfo);

		}
	}
	
	useEffect(() => {
		const getList = async () => {
			// 
			// db read here.
			// 
			const dbRead = await database.pages.where("id").equals(dbAction).first();
			// console.log(71, dbRead)
		}
		getList();
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