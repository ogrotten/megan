import Dexie from 'dexie';

const database = new Dexie('wikidb');
database.version(1).stores({
	pages: "++id, title, body, fourth"
});

database.insert = (pageInfo) => {
	console.log(9, pageInfo);
	return database.pages.add(pageInfo)
		.then((result) => {
			// console.log(12, result);
			const x = result;
			console.log(13,x);
			return x;
		})
		// .then((result) => {
		// 	console.log(15, result);
		// 	console.log(database.get(result));
		// })
		// .catch((err) => {
		// 	console.log("Insert error: ", err);
		// });
}
database.update = (pageInfo) => {
	database.pages.put(pageInfo)
}
database.get = async (id) => {
	return await database.pages.get(id);
}

export default database;