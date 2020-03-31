import React, { useState, useEffect } from 'react';
import { useStateLink } from "@hookstate/core";

import { stateLink } from "../../state/hookstate"
import { useInputControl } from "../hooks/useInputControl.js";
import ValidateFields from "../hooks/Validate";
import database from "../../data/database";

const PageSide = (props) => {
	const state = useStateLink(stateLink);
	// console.log(11,state);

	// useInputControl setup, abstracting the basic form fields
	const titleInput = useInputControl("");
	const bodyInput = useInputControl("");
		// const tagInput = useInputControl("");
		// const fourthInput = useInputControl("");

	// setting up local state
	const [allpages, setAllPages] = useState([]);
	const [validate, setValidate] = useState([]);
	const [recent, setrecent] = useState(1);

	const pageInfo = {
		title: titleInput.value,
		// tags: tagInput.value,
		body: bodyInput.value,
		// fourth: fourthInput.value,
	};

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
			setAllPages([pageInfo, ...allpages])
			console.log(44, pageInfo);
			// 
			// db write here
			//
			setrecent(await database.insert(pageInfo));
			
			state.nested.title.set(pageInfo.title);
			state.nested.body.set(pageInfo.body);
		}
	}

	useEffect(() => {
		console.log("60 useEffect > ", recent);
		// const m = database.get(recent)
		// console.log(m);

		const getrecent = async () => {
			// 
			// db read here.
			// 
			// return await database.pages.where("id").equals(x).first();
			setAllPages( await database.getall())
		}
		
		getrecent();
		// console.log("70 useEffect > ", getrecent(recent));
	}, [recent])
	
	// #region <input> docs

	/* 
	<input {...titleInput} placeholder="Title" style={{ minWidth: "50%" }} />

	{...titleInput} spreads in info from ./hooks/useInputControl.js
		* the new value of the field
		* the onChange function

	It therefore does not need onChange={} or value={} when using the tag.
	
	 */

	// #endregion
	
	return (
		<>
			<form onSubmit={doSubmit}>
				<p>recent: {recent}</p>
				<input {...titleInput} placeholder="Title" style={{ minWidth: "50%" }} />
					{/* <input {...fourthInput} placeholder="(fourth)" style={{ maxWidth: "25%" }} />
					<input {...tagInput} placeholder="Tags" /> */}
				<input {...bodyInput} placeholder="Body" />
				<button variant="primary" type="submit" style={{ width: "10rem" }}>
					Add
				</button>
			</form>
			<ValidateFields validate={validate} />
			{/* {allpages.map(item => (
				<AdminListitem key={allpages.indexOf(item)} item={item} />
			))} */}
		</>
	);
}

export default PageSide;
