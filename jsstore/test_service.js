import { BaseService } from "./base_service";

export class TestService extends BaseService {

	constructor() {
		super();
		this.tableName = "Testing";
	}

	getData() {
		return this.connection.select({
			from: this.tableName,
		})
	}

	addData(student) {
		return this.connection.insert({
			into: this.tableName,
			values: [student],
			return: true // since studentid is autoincrement field and we need id, 
			// so we are making return true which will return the whole data inserted.
		})
	}
}