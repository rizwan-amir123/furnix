import pool from '../../../lib/db';
export async function GET(req, { params }) {
  const id = params.id;
  const client = await pool.connect();
  const result = await client.query("SELECT * FROM products WHERE id = $1", [id]);
  const products = result.rows;
  client.release();
  return Response.json(products);
}