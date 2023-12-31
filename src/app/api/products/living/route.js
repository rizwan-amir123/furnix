import pool from '../../../lib/db';

export async function GET(Request) {
  const client = await pool.connect();
  const result = await client.query("SELECT * FROM products WHERE category = 'living'");
  const products = result.rows;
  client.release();
  return Response.json(products);
}