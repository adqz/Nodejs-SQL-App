"use strict";

const dotenv = require( "dotenv" ); //read in .env file

dotenv.config(); //pull env variables from .env and set them for node envrionment

const {
	PORT,
	HOST,
	HOST_URL,
	COOKIE_ENCRYPT_PWD,
	SQL_SERVER,
	SQL_DATABASE,
	SQL_USER,
	SQL_PASSWORD,
	OKTA_ORG_URL,
	OKTA_CLIENT_ID,
	OKTA_CLIENT_SECRET
} = process.env;

const sqlEncrypt = process.env.SQL_ENCRYPT === "true";

// It is very easy to miss some environment variables. To prevent this, use assert to make sure all variables are there
// TODO: Add asserts to make sure all env variables are present.
module.exports = {
	port: PORT,
	host: HOST,
	url: HOST_URL,
	cookiePwd: COOKIE_ENCRYPT_PWD,
	sql: {
		server: SQL_SERVER,
		database: SQL_DATABASE,
		user: SQL_USER,
		password: SQL_PASSWORD,
		options: {
			encrypt: sqlEncrypt,
			enableArithAbort: true,
		},
	},
	okta: {
		url: OKTA_ORG_URL,
		client: OKTA_CLIENT_ID,
		clientSecret: OKTA_CLIENT_SECRET,
	},
};
