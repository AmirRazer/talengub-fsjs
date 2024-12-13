// const { Pool } = require("pg");

// const pool = new Pool({
//   host: "aws-0-ap-southeast-1.pooler.supabase.com",
//   user: "postgres.opeuxgnzgpktslfklthx",
//   database: "postgres",
//   password: "MjBGtA1eFuxqoKOJ",
//   port: "6543",
//   max: 20,
//   idleTimeoutMillis: 2000,
//   connectionTimeoutMillis: 2000,
// });

// module.exports = pool;
const { Pool } = require('pg')
 
const pool = new Pool({
  host: 'localhost',
  user: 'postgres',
  database:'talenthub',
  password: '1234567890',
  port:'5432',
  max: 20,
  idleTimeoutMillis: 30000,
  connectionTimeoutMillis: 2000,
});

module.exports = pool;