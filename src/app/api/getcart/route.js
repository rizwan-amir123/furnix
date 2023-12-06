import pool from '../../lib/db';

export async function GET(Request) {
  const client = await pool.connect();
  const result = await client.query("SELECT * FROM furnixschema.users WHERE email = 'b@gmail.com'");
  const user = result.rows;
  const cart = user[0].cart;
  client.release();
  return Response.json(cart);
}