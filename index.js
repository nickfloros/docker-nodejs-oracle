const oracledb = require('oracledb');

async function run() {
let connection = null;
try {
	const connStr = process.env.NODE_ORACLEDB_CONNECTIONSTRING || '192.168.1.232:32118/XE';
        console.log(`NODE_ORACLEDB_CONNECTIONSTRING ${connStr} ${process.env.NODE_ORACLEDB_CONNECTIONSTRING}`);
	connection = await oracledb.getConnection({
		user: 'res_user',
		password : 'res_user',
		connectionString : connStr
	});

	const result = await connection.execute('select sysdate from dual');

	console.log(result.rows);
}
catch (err) {
	console.log(err);
}
 finally {
	if (connection) {
	try {
		await connection.close();
	}
	catch (err) {
		console.error(err);
	}
    }
 }

}

run();
