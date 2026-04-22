const { pool, Pool } = require('pg');

const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'student_records',
  password: '', // put your postgres password if you have one
  port: 5432,
});

async function testConnection() {
    let client;

    try{
        client = await pool.connect();
        console.log('Connected to PostgreSQL database!');

        const result = await client.query('SELECT * FROM students');

        console.log('Students in database:');
        console.table(result.rows);

        console.log(`Total students: ${result.rowsCounts}`);

    } catch (err) {
        console.error('Database connection error:', err);
    } finally {
        if (client) client.release();
        
        await pool.end();
        console.log('Connection pool closed.');
    }
}

testConnection();