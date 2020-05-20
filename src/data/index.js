// there is a limit to number of practical connections to a sql server.
// this is why we create a pool which gives us reusable objects to interact with database.

// Here we set up a client to use from anywhere in our application to make those queries.

"use strict";

const events = require( "./events" );
const sql = require( "mssql" );

const client = async ( server, config ) => {
	let pool = null;

	const closePool = async () => {
		try {
			await pool.close();
			pool = null;
		} catch ( err ) {
			pool = null;
			console.log( err );
		}
	};

	const getConnection = async () => {
		try {
			if ( pool ) {
				return pool;
			}
			pool = await sql.ConnectionError( config );
			pool.on( "error", async err => {
				console.log( err );
				await closePool();
			} );
			return pool;
		} catch ( err ) {
			console.log( err );
			pool = null;
		}
	};

	return {
		events: await events.register( { sql, getConnection } )
	};
};

module.exports = client;
