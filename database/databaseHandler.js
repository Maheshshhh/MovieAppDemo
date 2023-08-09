import runQuery from './configure';

const TABLE_A_USER_DETAILS = '`A_USER_DETAILS`';
const A_USER_NAME = '`A_USER_NAME`';
const A_USER_EMAIL = '`A_USER_EMAIL`';
const A_USER_PHONE = '`A_USER_PHONE`';
const A_USER_PASSWORD = '`A_USER_PASSWORD`';
const A_USER_CONFIRM_PASS = '`A_USER_CONFIRM_PASS`';


export const TABLE_A_USER_DETAILS_SCHEMA =
  'CREATE TABLE IF NOT EXISTS ' +
  TABLE_A_USER_DETAILS +
  '(' +
  A_USER_NAME +
  ' TEXT, ' +
  A_USER_EMAIL +
  ' TEXT, ' +
  A_USER_PHONE +
  ' TEXT, ' +
  A_USER_PASSWORD +
  ' TEXT, ' +
  A_USER_CONFIRM_PASS +
  ' TEXT)';

export default databaseHandler = {
  async createTable() {

    runQuery(TABLE_A_USER_DETAILS_SCHEMA, [])
      .then(data => {
        //console.log(JSON.stringify(data));
      })

      .catch(err => {
        //console.log(JSON.stringify(err));
      });


    try {
    } catch (err) { }
  },

  async insertUserDetailsData(userData) {
    let query =
      'INSERT INTO ' +
      TABLE_A_USER_DETAILS +
      '(' +
      A_USER_NAME +
      ' , ' +
      A_USER_EMAIL +
      ' , ' +
      A_USER_PHONE +
      ' , ' +
      A_USER_PASSWORD +
      ' , ' +
      A_USER_CONFIRM_PASS +
      ')' +
      'VALUES';

    let param = '';

    let value = [];

    for (let i = 0; i < userData.length; i++) {
      param = param + '(?,?,?,?,?)';

      if (i != userData.length - 1) param = param + ',';

      let item = userData[i];

      let data = [
        item.name,
        item.email,
        item.phone,
        item.password,
        item.confirmPass
      ];
      value.push(...data);
    }
    query = query + param;

    if (param == '') return false;

    try {
      console.log('query--', query);
      let result = await runQuery(query, value);

      if (result.rowsAffected > 0) return true;
      else return false;
    } catch (err) {
      console.log('detailsData err', err);
      return false;
    }
  },


  async deleteUserData() {
    try {
      let query = 'DELETE FROM ' + TABLE_A_USER_DETAILS + ';';

      let Table = await runQuery(query);

      console.log('deleteUserData ==> ' + query);
    } catch (err) { }
  },


async fetchUserDetails() {
  try {
    let query =
      'SELECT * FROM ' +
      TABLE_A_USER_DETAILS +
      ' ORDER BY ' +
      A_USER_NAME +
      ' LIMIT 1';
    let result = await runQuery(query);

    console.log('fetchUserDetails ==> ' + query);

    data = result.rows;
  } catch (error) {
    console.log('fetchUserDetails err', error);
  }

  return data;
},

};
