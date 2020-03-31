import Dexie from 'dexie';

const database = new Dexie('wikidb');
database.version(1).stores({
	pages: "++id, title, body, fourth"
});

database.insert = (pageInfo) => {
	return database.pages.add(pageInfo)
		// .then((result) => {
		// 	// console.log(12, result);
		// 	const x = result;
		// 	console.log(13,x);
		// 	return x;
		// })
		.catch((err) => {
			console.log(">>> DATABASE Insert error: ", err);
		});
}
database.update = (pageInfo) => {
	database.pages.put(pageInfo)
}
database.get = (id) => {
	return database.pages.get(id)
		.then((res) => {
			console.log(26, res);
			return res;
		})
}
database.getall = () => {
	return database.pages.where("id").above(-1)/* .reverse() */.toArray();
}

export default database;