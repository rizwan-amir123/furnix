import pool from '../../../../lib/db';
export async function GET(req) {
    const answer = [];
    try {
        const client = await pool.connect();
        const result = await client.query("SELECT * FROM products WHERE category = 'seating'");
        answer.push(result.rows[0]);
        answer.push(result.rows[1]);
        const resultSecond = await client.query("SELECT * FROM products WHERE category = 'bedroom'");
        answer.push(resultSecond.rows[0]);
        const resultThird = await client.query("SELECT * FROM products WHERE category = 'outdoor'");
        answer.push(resultThird.rows[0]);
        client.release();
        return Response.json(answer);
    } catch {
      return Response.json({ error: 'Internal server error' });
    }
  }