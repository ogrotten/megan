import * as JsStore from 'jsstore';
import { IDataBase, DATA_TYPE, ITable } from 'jsstore';

const getWorkerPath = () => {
    if (process.env.NODE_ENV === 'development') {
        return require("file-loader?name=scripts/[name].[hash].js!jsstore/dist/jsstore.worker.js");
    }
    else {
        return require("file-loader?name=scripts/[name].[hash].js!jsstore/dist/jsstore.worker.min.js");
    }
};

const workerPath = getWorkerPath();
export const idbCon = new JsStore.Connection(new Worker(workerPath));
export const dbname = 'Demo';

const getDatabase = () => {
    const tblTest = {
        testdata: 'testing',
        columns: {
            id: {
                primaryKey: true,
                autoIncrement: true
            },
            data: {
                notNull: true,
                dataType: DATA_TYPE.String
            }
        }
    };
    const dataBase = {
        name: dbname,
        tables: [tblTest]
    };
    return dataBase;
};

export const initJsStore = () => {
    try {
        const dataBase = getDatabase();
        idbCon.initDb(dataBase);
    }
    catch (ex) {
        console.error(ex);
    }
};