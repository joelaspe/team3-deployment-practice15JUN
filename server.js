const express = require('express');
const { Pool } = require('pg');
const dotenv = require('dotenv');
dotenv.config();
const app = express();
const dbString = process.env.DATABASE_URL
const PORT = process.env.PORT
const pool = new Pool ( {
  	connectionString: dbString
});

app.use(express.static('public'));

app.get ('/todos', async(req, res) => ({
	try {
	  const result = await pool.query('SELECT * from todos;');
	  res.json(result.rows).status(200);
	} catch (error) {
	  res.json(error.message).status(500);
	}
});

app.listen(process.env.PORT, () => {
	console.log('Running on port' + process.env.PORT);
});
  	
