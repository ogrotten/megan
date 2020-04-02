import React, { useState } from 'react';
import { useStateLink } from "@hookstate/core";
import { Container, Menu } from 'semantic-ui-react'

import { pageLink } from "../../state/hookstate"

const LeftSide = () => {
	// const dataS = useStateLink(dataState);
	const pageS = useStateLink(pageLink);

	const [item, setItem] = useState({ activeItem: 'Show All' })

	const handleItemClick = async (e, { name, page }) => {
		setItem({ activeItem: name })
		pageS.nested.page.set(page);
	}

	return (
		<Container fluid className="leftside">
			<Menu pointing secondary vertical>
				<Menu.Item
					name='Show All'
					page="main"
					active={item.activeItem === 'Show All'}
					onClick={handleItemClick}
				/>
				<Menu.Item
					name='Add New'
					page="page"
					active={item.activeItem === 'Add New'}
					onClick={handleItemClick}
				/>
				<Menu.Item
					name='Manage'
					page="manage"
					active={item.activeItem === 'Manage'}
					onClick={handleItemClick}
				/>
			</Menu>
		</Container>
	)
}

export default LeftSide