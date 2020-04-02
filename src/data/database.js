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
		// .then((id) => {
		// 	console.log(17, id);
		// 	database.get(id).then((result) => {
		// 		console.log(19, result);
		// 		return (result)
		// 	})
		// })
		.catch((err) => {
			console.log(">>> DATABASE 'insert' error: ", err);
		});
}
database.update = (pageInfo) => {
	database.pages.put(pageInfo)
}
database.get = (id) => {
	return database.pages.get(id)
	// return database.pages.where("id").equals(id).first()
	// 	.then((res) => {
	// 		console.log(26, res);
	// 		return res;
	// 	})
}
database.getall = () => {
	return database.pages.where("id").above(-1)/* .reverse() */.toArray()
		// .then((result) => {
		// 	console.log("geoff: ", result[0]);
		// 	return result
		// })
		.catch((err) => {
			console.log(">>> DATABASE 'getall' error: ", err);
		});

}
export default database;