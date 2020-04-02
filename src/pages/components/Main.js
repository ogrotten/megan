import React, { useState, useEffect } from 'react';
import { useStateLink } from "@hookstate/core";

import { allLink } from "../../state/hookstate"

import { Container } from 'semantic-ui-react'
import database from "../../data/database";

import MainItem from "./MainItem"

const Main = () => {
	const allState = useStateLink(allLink);
	const [allData, setAllData] = useState([])

	useEffect(() => {
		database.getall().then((result) => {
			allState.set(result)
			setAllData(result)
			// console.log(15, result);
		})
		// console.log(16, allState.get());
	}, [])

	return (
		<Container fluid className="leftside">
			{allData.map(item => (
				// <AdminListitem key={allpages.indexOf(item)} item={item} />
				<MainItem item={item} />
			))}
		</Container>
	)
}

export default Main