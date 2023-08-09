/**
 * Generalize the sqlite query for reusing purpose
 */
import SQLite from 'react-native-sqlite-storage';
import React from 'react';

SQLite.DEBUG(false);
SQLite.enablePromise(true);

const DATABASE_NAME = 'regDetails.db';

let db;
/**Open Database
 *
 * @param query
 * @param params in the array
 *
 * @returns {resolve} results
 */
export default runQuery = async (sql, params = []) => {
  try {
    db = await SQLite.openDatabase({
      name: DATABASE_NAME,
      createFromLocation: 1,
    });
    const data = await executeQuery(sql, params);
    return data;
  } catch (err) {
    return err;
  }
};

/**
 * Execute sql queries
 *
 * @param sql
 * @param params
 *
 * @returns {resolve} results
 */
const executeQuery = (sql, params = []) =>
  new Promise((resolve, reject) => {
    db.transaction(trans => {
      trans.executeSql(
        sql,
        params,
        (trans, results) => {
          resolve(results);
        },
        error => {
          reject(error);
        },
      );
    });
  });
