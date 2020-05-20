// This module reads queries written in the data folder and returns them in a single object
// It is good practice to write sql queries in .sql instead of using string formatting to prevent injection attackls
"use strict";

const fs = require( "fs-extra" );
const { join } = require( "path" );

const loadSqlQueries = async ( folderName ) => {
	const filePath = join( process.cwd(), "src", "data", folderName );
	const files = await fs.readdir( filePath );
	const sqlFiles = files.filter( f => f.endsWith( ".sql" ) );
	const queries = {};

	for ( const sqlFile of sqlFiles ) {
		const query = fs.readFileSync( join( filePath, sqlFile ), { encoding: "UTF-8" } );
		queries[ sqlFile.replace( ".sql", "" ) ] = query; //creating a [property in query object and assiging it the query read in
	}
	return queries;
};

module.exports = {
	loadSqlQueries
};
