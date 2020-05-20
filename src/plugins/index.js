"use strict";

// We'll create a module for a sql plugin which can be used by other modules to make queries to database

module.exports.register = async ( server ) => {
	await server.register( sql );
};
