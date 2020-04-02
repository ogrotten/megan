import React, { useState, useEffect } from 'react';
import { useStateLink } from "@hookstate/core";
import { Container, Menu } from 'semantic-ui-react'

import { pageLink } from "../../state/hookstate"

const LeftSide = () => {
	// const dataS = useStateLink(dataState);
	const pageState = useStateLink(pageLink);

	// const [item, setItem] = useState({ activeItem: 'Show All' })

	const handleItemClick = async (e, { name, page }) => {
		// setItem({ activeItem: name })
		pageState.set({page: page});
	}

	useEffect(() => {
		
	})
	
	return (
		<Container fluid className="leftside">
			<Menu pointing secondary vertical>
				<Menu.Item
					name='Show All'
					page="main"
					active={pageState.get().page === 'main'}
					onClick={handleItemClick}
				/>
				<Menu.Item
					name='Add New'
					page="page"
					active={pageState.get().page === 'page'}
					onClick={handleItemClick}
				/>
				<Menu.Item
					name='Manage'
					page="manage"
					active={pageState.get().page === 'manage'}
					onClick={handleItemClick}
				/>
			</Menu>
		</Container>
	)
}

export default LeftSide