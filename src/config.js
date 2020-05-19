"use strict";

const dotenv = require( "dotenv" );

dotenv.config(); //pull env variables from .env and set them for node envrionment

const {
	PORT,
	HOST,
	HOST_URL,
	COOKIE_ENCRYPT_PWD,
	SQL_SERVER,
	SQL_DATABASE,
	SQL_USER,
	SQL_PASSWPRD,
	OKTA_ORG_URL,
	OKTA_CLIENT_ID,
	OKTA_CLIENT_SECRET
} = process.env;

const sqlEncrypt = process.env.SQL_ENCRYPT === "true";
