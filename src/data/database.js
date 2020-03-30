import Dexie from 'dexie';

const database = new Dexie('wikidb');
database.version(1).stores({
	pages: "++id, title, body, fourth"
});

export default database;